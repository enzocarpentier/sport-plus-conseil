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
 * Écoute en temps réel l'ajout de nouveaux commentaires via Supabase Realtime
 */
export function subscribeToDossierComments(onNewComment: (comment: DossierComment) => void) {
  const channel = supabase
    .channel('public:dossier_comments_realtime')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'dossier_comments' },
      (payload) => {
        if (payload.new) {
          onNewComment(payload.new as DossierComment)
        }
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}
