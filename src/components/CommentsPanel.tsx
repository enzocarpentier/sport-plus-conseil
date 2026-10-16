import { useState, useEffect } from 'react'
import {
  MessageSquare,
  Send,
  X,
  RefreshCw,
  Clock,
  ArrowRight,
  Filter,
  CheckCircle2,
  AlertCircle,
  Trash2,
  RotateCcw
} from 'lucide-react'
import {
  type DossierComment,
  addDossierComment,
  updateDossierCommentPage,
  deleteDossierComment,
  toggleDossierCommentResolved
} from '../lib/supabase'

interface CommentsPanelProps {
  isOpen: boolean
  onClose: () => void
  comments: DossierComment[]
  onRefreshComments: () => void
  onDeleteComment?: (id: string) => Promise<{ success: boolean; error: string | null }>
  onToggleResolved?: (id: string, resolved: boolean) => Promise<{ success: boolean; error: string | null }>
  targetPage: number
  onTargetPageChange: (page: number) => void
  onScrollToPage: (page: number) => void
  currentVisiblePage: number
}

const GROUP_MEMBERS = [
  { name: 'Enzo Carpentier', short: 'EC', color: 'bg-blue-600 text-white' },
  { name: 'Louis Lieury', short: 'LL', color: 'bg-emerald-600 text-white' },
  { name: 'Romain Lavice', short: 'RL', color: 'bg-purple-600 text-white' },
  { name: 'Kilian Lecomte', short: 'KL', color: 'bg-amber-600 text-white' },
  { name: 'Clément Usubelli', short: 'CU', color: 'bg-rose-600 text-white' }
]

const PAGE_NAMES: Record<number, string> = {
  1: 'Page 1 — Page de Garde Académique',
  2: 'Page 2 — Sommaire Général (Cliquable)',
  3: 'Page 3 — Introduction Générale & Problématique',
  4: 'Page 4 — Genèse, PME & Culture d\'Entreprise',
  5: 'Page 5 — Rapprochements & Alliances Stratégiques',
  6: 'Page 6 — Portefeuille Multisport d\'Événements',
  7: 'Page 7 — PESTEL : Dimensions Politique & Économique',
  8: 'Page 8 — PESTEL : Dimensions Sociale & Technologique',
  9: 'Page 9 — PESTEL : Dimensions Écologique & Légale',
  10: 'Page 10 — Modèle des 5 Forces (+1) de Porter',
  11: 'Page 11 — Diagnostic SWOT Global',
  12: 'Page 12 — Modèle d\'Affaires dans les OS 2 (RCOV)',
  13: 'Page 13 — Cartographie des Parties Prenantes (Freeman)',
  14: 'Page 14 — Théorie des Ressources (RBV)',
  15: 'Page 15 — Modèle VRIO de Barney',
  16: 'Page 16 — Stratégie Sportive de l\'Agence',
  17: 'Page 17 — Stratégie Commerciale & Hospitalités B2B',
  18: 'Page 18 — Stratégie Territoriale & Commande Publique',
  19: 'Page 19 — Stratégie Sociétale, Parité & RSE',
  20: 'Page 20 — Prospective & Fable de Mintzberg',
  21: 'Page 21 — Sources & Bibliographie Académique'
}

export const CommentsPanel: React.FC<CommentsPanelProps> = ({
  isOpen,
  onClose,
  comments,
  onRefreshComments,
  onDeleteComment,
  onToggleResolved,
  targetPage,
  onTargetPageChange,
  onScrollToPage,
  currentVisiblePage
}) => {
  const [selectedAuthor, setSelectedAuthor] = useState<string>(() => {
    return localStorage.getItem('dossier_comment_author') || 'Enzo Carpentier'
  })
  const [customAuthor, setCustomAuthor] = useState('')
  const [isCustomAuthor, setIsCustomAuthor] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [filterPage, setFilterPage] = useState<number | null>(null)
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'resolved'>('all')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Gestion de la modification de page d'un commentaire existant
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null)
  const [editPageNumber, setEditPageNumber] = useState<number>(1)
  const [isUpdatingPage, setIsUpdatingPage] = useState(false)

  // Gestion de la suppression d'un commentaire
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  // Gestion de la bascule réglé / en cours
  const [isTogglingResolvedId, setIsTogglingResolvedId] = useState<string | null>(null)

  // Sauvegarder l'auteur sélectionné
  useEffect(() => {
    if (!isCustomAuthor && selectedAuthor) {
      localStorage.setItem('dossier_comment_author', selectedAuthor)
    }
  }, [selectedAuthor, isCustomAuthor])

  const handleSelectAuthor = (name: string) => {
    setSelectedAuthor(name)
    setIsCustomAuthor(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const author = isCustomAuthor ? customAuthor.trim() : selectedAuthor

    if (!author) {
      setStatusMessage({ type: 'error', text: 'Veuillez sélectionner ou indiquer votre nom.' })
      return
    }

    if (!commentText.trim()) {
      setStatusMessage({ type: 'error', text: 'Veuillez rédiger votre remarque ou suggestion.' })
      return
    }

    setIsSubmitting(true)
    setStatusMessage(null)

    const result = await addDossierComment({
      author_name: author,
      page_number: targetPage,
      comment_text: commentText.trim()
    })

    setIsSubmitting(false)

    if (result.error) {
      setStatusMessage({ type: 'error', text: `Erreur : ${result.error}` })
    } else {
      setCommentText('')
      setStatusMessage({ type: 'success', text: 'Commentaire publié avec succès !' })
      onRefreshComments()
      setTimeout(() => setStatusMessage(null), 4000)
    }
  }

  const handleMoveComment = async (commentId: string, newPage: number) => {
    setIsUpdatingPage(true)
    const result = await updateDossierCommentPage(commentId, newPage)
    setIsUpdatingPage(false)
    if (result.error) {
      alert(`Erreur lors du déplacement : ${result.error}`)
    } else {
      setEditingCommentId(null)
      onRefreshComments()
    }
  }

  const handleConfirmDelete = async (commentId: string) => {
    setIsDeleting(true)
    let res: { success: boolean; error: string | null }
    if (onDeleteComment) {
      res = await onDeleteComment(commentId)
    } else {
      res = await deleteDossierComment(commentId)
      onRefreshComments()
    }
    setIsDeleting(false)
    setConfirmDeleteId(null)
    if (res.error) {
      setStatusMessage({ type: 'error', text: `Erreur lors de la suppression : ${res.error}` })
    } else {
      setStatusMessage({ type: 'success', text: 'Commentaire supprimé de Supabase avec succès !' })
      setTimeout(() => setStatusMessage(null), 4000)
    }
  }

  const handleToggleResolved = async (commentId: string, resolved: boolean) => {
    setIsTogglingResolvedId(commentId)
    let res: { success: boolean; error: string | null }
    if (onToggleResolved) {
      res = await onToggleResolved(commentId, resolved)
    } else {
      res = await toggleDossierCommentResolved(commentId, resolved)
      onRefreshComments()
    }
    setIsTogglingResolvedId(null)
    if (res.error) {
      setStatusMessage({ type: 'error', text: `Erreur : ${res.error}` })
    } else {
      setStatusMessage({
        type: 'success',
        text: resolved
          ? 'Remarque marquée comme réglée !'
          : 'Remarque réouverte (en cours).'
      })
      setTimeout(() => setStatusMessage(null), 3500)
    }
  }

  const unresolvedCount = comments.filter((c) => !c.is_resolved).length
  const resolvedCount = comments.filter((c) => c.is_resolved).length

  let filteredComments = filterPage
    ? comments.filter((c) => c.page_number === filterPage)
    : comments

  if (statusFilter === 'pending') {
    filteredComments = filteredComments.filter((c) => !c.is_resolved)
  } else if (statusFilter === 'resolved') {
    filteredComments = filteredComments.filter((c) => c.is_resolved)
  }

  if (!isOpen) return null

  return (
    <div className="no-print fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md md:max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between border-l border-gray-200 animate-in slide-in-from-right duration-300">
        
        {/* EN-TÊTE DU PANNEAU */}
        <div className="px-5 py-4 bg-[#1c2d42] text-white flex items-center justify-between border-b border-[#2b415e]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <MessageSquare size={16} />
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wide">Commentaires &amp; Remarques</h2>
              <p className="text-[11px] text-gray-300">
                Espace d&apos;échange du groupe ({comments.length} avis • {unresolvedCount} en cours)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={onRefreshComments}
              className="p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              title="Actualiser les commentaires"
            >
              <RefreshCw size={15} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              title="Fermer le panneau"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* BARRE D'ÉTAT DES REMARQUES : TOUS / EN COURS / RÉGLÉS */}
        <div className="px-4 py-2 bg-[#f8fafc] border-b border-gray-200 flex items-center justify-between gap-2 text-xs shrink-0">
          <div className="flex items-center gap-1 bg-gray-200/80 p-0.5 rounded-lg text-[11px]">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-white text-gray-900 shadow-2xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tous ({comments.length})
            </button>
            <button
              onClick={() => setStatusFilter('pending')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                statusFilter === 'pending'
                  ? 'bg-amber-100 text-amber-900 shadow-2xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>En cours ({unresolvedCount})</span>
            </button>
            <button
              onClick={() => setStatusFilter('resolved')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                statusFilter === 'resolved'
                  ? 'bg-emerald-600 text-white shadow-2xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <CheckCircle2 size={11} />
              <span>Réglés ({resolvedCount})</span>
            </button>
          </div>

          {unresolvedCount === 0 && comments.length > 0 && (
            <span className="text-[10.5px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
              <CheckCircle2 size={11} className="text-emerald-600" /> Tout est réglé !
            </span>
          )}
        </div>

        {/* FILTRES PAR PAGE */}
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-gray-500 flex items-center gap-1 text-[11px] font-medium mr-1">
            <Filter size={11} /> Filtrer :
          </span>
          <button
            onClick={() => setFilterPage(null)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
              filterPage === null
                ? 'bg-[#1c2d42] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tous ({comments.length})
          </button>
          <button
            onClick={() => setFilterPage(currentVisiblePage)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
              filterPage === currentVisiblePage
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100'
            }`}
            title={`Filtrer uniquement sur la page visible à l'écran (P.${currentVisiblePage})`}
          >
            <span>📍 P.{currentVisiblePage} (à l&apos;écran)</span>
          </button>
          {Array.from({ length: 21 }, (_, i) => i + 1).map((page) => {
            const count = comments.filter((c) => c.page_number === page).length
            return (
              <button
                key={page}
                onClick={() => setFilterPage(page)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer shrink-0 ${
                  filterPage === page
                    ? 'bg-[#1c2d42] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                P.{page} {count > 0 && `(${count})`}
              </button>
            )
          })}
        </div>

        {/* BANNIÈRE DE NOTIFICATION SYNCHRO SUPABASE */}
        {statusMessage && (
          <div
            className={`mx-4 mt-2.5 mb-0 flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-md shadow-xs animate-in slide-in-from-top-1 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                : 'bg-red-50 text-red-900 border border-red-300'
            }`}
          >
            <div className="flex items-center gap-2">
              {statusMessage.type === 'success' ? (
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle size={15} className="text-red-600 shrink-0" />
              )}
              <span className="font-medium text-[11px]">{statusMessage.text}</span>
            </div>
            <button
              type="button"
              onClick={() => setStatusMessage(null)}
              className="text-gray-400 hover:text-gray-600 text-xs px-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* CONTENU : FORMULAIRE + LISTE DES COMMENTAIRES */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">

          {/* FORMULAIRE D'AJOUT DE COMMENTAIRE */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-300 rounded-lg p-3.5 shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                Ajouter une remarque
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-blue-700 font-medium">
                  {PAGE_NAMES[targetPage] || `Page ${targetPage}`}
                </span>
                {targetPage === currentVisiblePage ? (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-medium">
                    📍 À l&apos;écran
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => onTargetPageChange(currentVisiblePage)}
                    className="text-[10px] bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded transition-colors cursor-pointer"
                    title={`Changer pour la page ${currentVisiblePage} actuellement visible`}
                  >
                    🎯 Remettre P.{currentVisiblePage}
                  </button>
                )}
              </div>
            </div>

            {/* SÉLECTEUR DE MEMBRE DU GROUPE */}
            <div>
              <label className="block text-[11px] font-medium text-gray-600 mb-1.5">
                Qui écrit ? (Cliquez sur votre nom)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {GROUP_MEMBERS.map((member) => (
                  <button
                    key={member.name}
                    type="button"
                    onClick={() => handleSelectAuthor(member.name)}
                    className={`px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 transition-all cursor-pointer ${
                      !isCustomAuthor && selectedAuthor === member.name
                        ? 'bg-[#1c2d42] text-white shadow-xs ring-2 ring-blue-500'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold ${member.color}`}>
                      {member.short}
                    </span>
                    <span>{member.name.split(' ')[0]}</span>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setIsCustomAuthor(true)}
                  className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                    isCustomAuthor
                      ? 'bg-[#1c2d42] text-white ring-2 ring-blue-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  Autre
                </button>
              </div>

              {isCustomAuthor && (
                <input
                  type="text"
                  placeholder="Votre nom ou prénom..."
                  value={customAuthor}
                  onChange={(e) => setCustomAuthor(e.target.value)}
                  className="mt-2 w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              )}
            </div>

            {/* SÉLECTEUR DE LA PAGE CIBLÉE */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <label className="font-medium text-gray-700">
                  Sur quelle page porte ce commentaire ?
                </label>
                {targetPage !== currentVisiblePage && (
                  <button
                    type="button"
                    onClick={() => onTargetPageChange(currentVisiblePage)}
                    className="text-[11px] text-blue-600 hover:underline cursor-pointer"
                  >
                    📍 Caler sur la page visible (P.{currentVisiblePage})
                  </button>
                )}
              </div>
              <select
                value={targetPage}
                onChange={(e) => onTargetPageChange(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer font-medium text-gray-800"
              >
                {Array.from({ length: 21 }, (_, i) => i + 1).map((pageNum) => (
                  <option key={pageNum} value={pageNum}>
                    {pageNum === currentVisiblePage ? '📍 ' : ''}
                    {PAGE_NAMES[pageNum] || `Page ${pageNum}`}
                    {pageNum === currentVisiblePage ? ' [À L\'ÉCRAN]' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* TEXTE DU COMMENTAIRE */}
            <div>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Ex : Peux-tu reformuler le paragraphe 2 pour appuyer sur le All Star Game ? Ou vérifier le montant du Prize Money ?"
                rows={3}
                className="w-full p-2.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none text-gray-800"
              />
            </div>

            {/* MESSAGE D'ÉTAT */}
            {statusMessage && (
              <div
                className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-md ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle size={13} className="text-red-600 shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            {/* BOUTON D'ENVOI */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-1.5 bg-[#1c2d42] hover:bg-[#0f1b29] text-white py-2 px-3 rounded-md text-xs font-medium shadow-xs transition-colors cursor-pointer disabled:opacity-50"
            >
              <Send size={13} />
              <span>{isSubmitting ? 'Publication en cours...' : 'Publier le commentaire'}</span>
            </button>
          </form>

          {/* LISTE DES COMMENTAIRES DÉJÀ POSTÉS */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-200 pb-1">
              <span className="font-semibold text-gray-700">
                Commentaires postés ({filteredComments.length})
              </span>
              <span className="text-[11px]">Du plus récent au plus ancien</span>
            </div>

            {filteredComments.length === 0 ? (
              <div className="p-6 text-center text-gray-400 bg-gray-50 border border-dashed border-gray-200 rounded-lg">
                <MessageSquare size={24} className="mx-auto mb-2 opacity-50" />
                <p className="text-xs">Aucun commentaire sur cette section pour le moment.</p>
                <p className="text-[11px] text-gray-400 mt-1">
                  Soyez le premier à proposer un ajustement pour vos camarades !
                </p>
              </div>
            ) : (
              filteredComments.map((comment) => {
                const member = GROUP_MEMBERS.find(
                  (m) => m.name.toLowerCase() === comment.author_name.toLowerCase()
                )
                const avatarColor = member ? member.color : 'bg-gray-600 text-white'
                const initials = member
                  ? member.short
                  : comment.author_name.slice(0, 2).toUpperCase()

                const dateFormatted = new Date(comment.created_at).toLocaleString('fr-FR', {
                  day: '2-digit',
                  month: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                })

                return (
                  <div
                    key={comment.id}
                    className={`p-3 rounded-lg shadow-xs transition-colors space-y-2 border ${
                      comment.is_resolved
                        ? 'bg-emerald-50/40 border-emerald-300'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${avatarColor}`}
                        >
                          {initials}
                        </span>
                        <span className="text-xs font-semibold text-gray-900">
                          {comment.author_name}
                        </span>
                        {comment.is_resolved && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            <CheckCircle2 size={10} className="text-emerald-700" />
                            Réglé
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400">
                        <Clock size={11} />
                        <span>{dateFormatted}</span>
                      </div>
                    </div>

                    <p
                      className={`text-xs leading-relaxed whitespace-pre-wrap pl-7 ${
                        comment.is_resolved ? 'text-gray-600 italic' : 'text-gray-800'
                      }`}
                    >
                      {comment.comment_text}
                    </p>

                    <div className="flex items-center justify-between pt-1.5 border-t border-gray-100 text-[11px] gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          Page {comment.page_number}
                        </span>

                        {editingCommentId === comment.id ? (
                          <div className="flex items-center gap-1 bg-amber-50 border border-amber-300 px-1.5 py-0.5 rounded animate-in fade-in">
                            <span className="text-[10px] text-amber-800 font-medium">Vers :</span>
                            <select
                              value={editPageNumber}
                              onChange={(e) => setEditPageNumber(Number(e.target.value))}
                              className="text-[10px] bg-white border border-gray-300 rounded px-1 py-0.5 cursor-pointer"
                            >
                              {Array.from({ length: 21 }, (_, i) => i + 1).map((p) => (
                                <option key={p} value={p}>
                                  P.{p} {p === currentVisiblePage ? '(à l\'écran)' : ''}
                                </option>
                              ))}
                            </select>
                            <button
                              type="button"
                              disabled={isUpdatingPage}
                              onClick={() => handleMoveComment(comment.id, editPageNumber)}
                              className="text-[10px] bg-emerald-600 hover:bg-emerald-700 text-white px-1.5 py-0.5 rounded font-medium cursor-pointer disabled:opacity-50"
                            >
                              {isUpdatingPage ? '...' : 'OK'}
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingCommentId(null)}
                              className="text-[10px] text-gray-500 hover:text-gray-700 px-1 cursor-pointer"
                              title="Annuler"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingCommentId(comment.id)
                              setEditPageNumber(currentVisiblePage || comment.page_number)
                            }}
                            className="text-[10px] text-gray-500 hover:text-blue-700 hover:underline cursor-pointer"
                            title="Déplacer cette remarque vers une autre page"
                          >
                            Déplacer
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap">
                        {/* BOUTON RÉGLER / ROUVRIR */}
                        {comment.is_resolved ? (
                          <button
                            type="button"
                            disabled={isTogglingResolvedId === comment.id}
                            onClick={() => handleToggleResolved(comment.id, false)}
                            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 border border-gray-300 px-2 py-0.5 rounded text-[10.5px] font-medium flex items-center gap-1 transition-all cursor-pointer disabled:opacity-50"
                            title="Remettre cette remarque en cours"
                          >
                            <RotateCcw size={10.5} />
                            <span>Rouvrir</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            disabled={isTogglingResolvedId === comment.id}
                            onClick={() => handleToggleResolved(comment.id, true)}
                            className="text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded text-[10.5px] font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-2xs disabled:opacity-50"
                            title="Marquer cette remarque comme réglée"
                          >
                            <CheckCircle2 size={11} className="text-emerald-600" />
                            <span>Régler</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            onScrollToPage(comment.page_number)
                            onClose()
                          }}
                          className="text-gray-500 hover:text-blue-700 flex items-center gap-1 font-medium transition-colors cursor-pointer text-[10.5px]"
                        >
                          <span>Voir la page</span>
                          <ArrowRight size={11} />
                        </button>

                        {confirmDeleteId === comment.id ? (
                          <div className="flex items-center gap-1 bg-red-50 border border-red-300 px-1.5 py-0.5 rounded text-[10px] text-red-800 animate-in fade-in">
                            <span className="font-semibold">Supprimer ?</span>
                            <button
                              type="button"
                              disabled={isDeleting}
                              onClick={() => handleConfirmDelete(comment.id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-1.5 py-0.5 rounded text-[10px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-2xs"
                            >
                              {isDeleting ? '...' : 'Oui'}
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteId(null)}
                              className="text-gray-500 hover:text-gray-700 px-1 text-[10px] cursor-pointer"
                            >
                              Non
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(comment.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 hover:border-red-300 px-1.5 py-0.5 rounded text-[10.5px] font-medium flex items-center gap-1 transition-all cursor-pointer"
                            title="Supprimer définitivement ce commentaire de Supabase"
                          >
                            <Trash2 size={11} />
                            <span>Supprimer</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        {/* PIED DU PANNEAU */}
        <div className="p-3 bg-gray-50 border-t border-gray-200 text-center text-[11px] text-gray-500 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Espace collaboratif du groupe • UFR STAPS Rouen</span>
        </div>
      </div>
    </div>
  )
}
