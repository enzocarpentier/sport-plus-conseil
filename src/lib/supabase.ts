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
}

/**
 * Récupère tous les commentaires du dossier triés du plus récent au plus ancien
 */
export async function fetchDossierComments(): Promise<DossierComment[]> {
  try {
    const { data, error } = await supabase
      .from('dossier_comments')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.warn('[Supabase] Erreur récupération commentaires:', error.message)
      return []
    }
    return data || []
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
 * Écoute en temps réel les changements sur les commentaires via Supabase Realtime
 */
export function subscribeToDossierComments(
  onNewComment: (comment: DossierComment) => void,
  onUpdateComment?: (comment: DossierComment) => void,
  onDeleteComment?: (id: string) => void
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
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}
