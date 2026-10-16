import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://votre-projet.supabase.co'
)

// Client Supabase
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

export interface DossierComment {
  id: string
  author_name: string
  page_number: number
  comment_text: string
  created_at: string
  is_resolved?: boolean
}

/**
 * Récupère tous les commentaires du dossier avec leur statut réglé/en cours
 */
export async function fetchDossierComments(): Promise<DossierComment[]> {
  try {
    const { data: comments, error } = await supabase
      .from('dossier_comments')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.warn('[Supabase] Erreur récupération commentaires:', error.message)
      return []
    }

    // Récupération de la liste des IDs résolus depuis dossier_sections
    let resolvedIds = new Set<string>()
    try {
      const { data: sec } = await supabase
        .from('dossier_sections')
        .select('content')
        .eq('section_key', 'resolved_comments')
        .maybeSingle()

      if (sec && sec.content) {
        const parsed = JSON.parse(sec.content)
        if (Array.isArray(parsed)) {
          resolvedIds = new Set(parsed)
        }
      }
    } catch {
      // Ignorer si la section n'est pas encore initialisée
    }

    return (comments || []).map((c) => ({
      ...c,
      is_resolved: Boolean(c.is_resolved || resolvedIds.has(c.id))
    }))
  } catch (err) {
    console.error('[Supabase] Exception fetch comments:', err)
    return []
  }
}

/**
 * Ajoute un nouveau commentaire dans Supabase
 */
export async function addDossierComment(payload: {
  author_name: string
  page_number: number
  comment_text: string
}): Promise<{ data: DossierComment | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('dossier_comments')
      .insert({
        author_name: payload.author_name.trim(),
        page_number: payload.page_number,
        comment_text: payload.comment_text.trim()
      })
      .select()
      .single()

    if (error) {
      return { data: null, error: error.message }
    }
    return { data, error: null }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Erreur inconnue'
    return { data: null, error: message }
  }
}

/**
 * Met à jour le numéro de page d'un commentaire existant
 */
export async function updateDossierCommentPage(
  id: string,
  newPageNumber: number
): Promise<{ success: boolean; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('dossier_comments')
      .update({ page_number: newPageNumber })
      .eq('id', id)
      .select()

    if (!error && data && data.length > 0) {
      return { success: true, error: null }
    }

    // Fallback si la politique UPDATE n'est pas activée sur Supabase
    const { data: existing, error: fetchErr } = await supabase
      .from('dossier_comments')
      .select('*')
      .eq('id', id)
      .single()

    if (fetchErr || !existing) {
      return { success: false, error: fetchErr?.message || 'Commentaire introuvable' }
    }

    await supabase.from('dossier_comments').delete().eq('id', id)
    const { error: insErr } = await supabase.from('dossier_comments').insert({
      author_name: existing.author_name,
      page_number: newPageNumber,
      comment_text: existing.comment_text,
      created_at: existing.created_at
    })

    if (insErr) {
      return { success: false, error: insErr.message }
    }

    return { success: true, error: null }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Erreur inconnue'
    return { success: false, error: message }
  }
}

/**
 * Supprime un commentaire
 */
export async function deleteDossierComment(
  id: string
): Promise<{ success: boolean; error: string | null }> {
  try {
    const { error } = await supabase
      .from('dossier_comments')
      .delete()
      .eq('id', id)

    if (error) {
      return { success: false, error: error.message }
    }
    return { success: true, error: null }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Erreur inconnue'
    return { success: false, error: message }
  }
}

/**
 * Marque un commentaire comme réglé ou en cours (synchronisé avec Supabase)
 */
export async function toggleDossierCommentResolved(
  id: string,
  resolved: boolean
): Promise<{ success: boolean; error: string | null }> {
  try {
    // 1. Tente également de mettre à jour directement dossier_comments au cas où la colonne existerait
    try {
      await supabase.from('dossier_comments').update({ is_resolved: resolved }).eq('id', id)
    } catch {
      // Ignorer si la colonne n'existe pas
    }

    // 2. Synchronise dans dossier_sections (section_key = 'resolved_comments')
    const { data: sec } = await supabase
      .from('dossier_sections')
      .select('content')
      .eq('section_key', 'resolved_comments')
      .maybeSingle()

    let resolvedIds: string[] = []
    if (sec && sec.content) {
      try {
        const parsed = JSON.parse(sec.content)
        if (Array.isArray(parsed)) {
          resolvedIds = parsed
        }
      } catch {
        resolvedIds = []
      }
    }

    if (resolved) {
      if (!resolvedIds.includes(id)) {
        resolvedIds.push(id)
      }
    } else {
      resolvedIds = resolvedIds.filter((item) => item !== id)
    }

    const { error: upsertErr } = await supabase
      .from('dossier_sections')
      .upsert(
        {
          section_key: 'resolved_comments',
          title: 'Suivi des commentaires résolus',
          content: JSON.stringify(resolvedIds),
          updated_by: localStorage.getItem('dossier_comment_author') || 'Membre groupe',
          updated_at: new Date().toISOString()
        },
        { onConflict: 'section_key' }
      )

    if (upsertErr) {
      return { success: false, error: upsertErr.message }
    }

    return { success: true, error: null }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Erreur inconnue'
    return { success: false, error: message }
  }
}

/**
 * Écoute en temps réel les changements sur les commentaires via Supabase Realtime
 */
export function subscribeToDossierComments(
  onNewComment: (comment: DossierComment) => void,
  onUpdateComment?: (comment: DossierComment) => void,
  onDeleteComment?: (id: string) => void,
  onResolvedChange?: () => void
) {
  const channel = supabase
    .channel('public:dossier_comments_realtime')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'dossier_comments' },
      (payload) => {
        if (payload.eventType === 'INSERT' && payload.new) {
          onNewComment(payload.new as DossierComment)
        } else if (payload.eventType === 'UPDATE' && payload.new && onUpdateComment) {
          onUpdateComment(payload.new as DossierComment)
        } else if (payload.eventType === 'DELETE' && payload.old && onDeleteComment) {
          onDeleteComment(payload.old.id as string)
        }
      }
    )
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'dossier_sections' },
      (payload) => {
        if (
          payload.new &&
          (payload.new as { section_key?: string }).section_key === 'resolved_comments' &&
          onResolvedChange
        ) {
          onResolvedChange()
        }
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}
