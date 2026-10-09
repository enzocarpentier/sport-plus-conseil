import { useState, useEffect } from 'react'
import { DossierCoverPage } from './components/dossier/DossierCoverPage'
import { DossierPresentationPage } from './components/dossier/DossierPresentationPage'
import { DossierOfferPage } from './components/dossier/DossierOfferPage'
import { DossierBudgetPage } from './components/dossier/DossierBudgetPage'
import { CommentsPanel } from './components/CommentsPanel'
import {
  type DossierComment,
  fetchDossierComments,
  subscribeToDossierComments
} from './lib/supabase'
import { Printer, MessageSquare } from 'lucide-react'

export function App() {
  const totalPages = 4
  const [comments, setComments] = useState<DossierComment[]>([])
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)
  const [targetPage, setTargetPage] = useState<number>(1)

  // Chargement initial des commentaires et écoute temps réel Supabase
  useEffect(() => {
    fetchDossierComments().then(setComments)

    const unsubscribe = subscribeToDossierComments((newComment) => {
      setComments((prev) => {
        if (prev.some((c) => c.id === newComment.id)) return prev
        return [newComment, ...prev]
      })
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const handleOpenCommentsForPage = (pageNum: number) => {
    setTargetPage(pageNum)
    setIsCommentsOpen(true)
  }

  const handleScrollToPage = (pageNum: number) => {
    const el = document.getElementById(`dossier-page-${pageNum}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const getPageCommentsCount = (pageNum: number) => {
    return comments.filter((c) => c.page_number === pageNum).length
  }

  return (
    <div className="min-h-screen bg-[#e5e7eb] py-12 px-4 flex flex-col items-center justify-start select-text relative">
      
      {/* BARRE D'ACTIONS FLOTTANTE EN HAUT À DROITE */}
      <div className="no-print fixed top-4 right-4 z-40 flex items-center gap-2.5">
        
        {/* BOUTON COMMENTAIRES / COLLABORATION */}
        <button
          onClick={() => setIsCommentsOpen(true)}
          className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-3.5 py-2 rounded-md shadow-md hover:shadow-lg transition-all text-xs font-sans font-medium cursor-pointer border border-gray-300"
          title="Ouvrir les commentaires et suggestions du groupe"
        >
          <div className="relative">
            <MessageSquare size={15} className="text-blue-600" />
            {comments.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {comments.length}
              </span>
            )}
          </div>
          <span>Commentaires</span>
        </button>

        {/* BOUTON D'IMPRESSION / EXPORT PDF ACADÉMIQUE */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-[#1c2d42] hover:bg-[#0f1b29] text-white px-3.5 py-2 rounded-md shadow-md hover:shadow-lg transition-all text-xs font-serif font-medium cursor-pointer border border-[#2b415e]"
          title="Imprimer ou exporter en PDF officiel A4"
        >
          <Printer size={14} />
          <span className="hidden sm:inline">Imprimer / PDF</span>
        </button>
      </div>

      {/* LES 4 PAGES A4 DU DOSSIER ACADÉMIQUE */}
      <div className="flex flex-col items-center gap-12 w-full max-w-full">
        
        {/* PAGE 1 : Page de Garde Académique */}
        <div className="relative flex flex-col items-center w-full">
          <div className="no-print w-[210mm] max-w-full flex justify-between items-center mb-1.5 px-1 text-xs text-gray-600">
            <span className="font-semibold text-gray-700">Page 1 — Page de Garde</span>
            <button
              onClick={() => handleOpenCommentsForPage(1)}
              className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 bg-white/90 hover:bg-white px-2.5 py-1 rounded-md border border-gray-300 shadow-2xs transition-colors cursor-pointer"
            >
              <MessageSquare size={12} />
              <span>Commenter cette page</span>
              {getPageCommentsCount(1) > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {getPageCommentsCount(1)}
                </span>
              )}
            </button>
          </div>
          <div id="dossier-page-1" className="a4-page-wrapper">
            <DossierCoverPage pageNumber={1} totalPages={totalPages} />
          </div>
        </div>

        {/* PAGE 2 : Présentation de Sport Plus Conseil & PESTEL */}
        <div className="relative flex flex-col items-center w-full">
          <div className="no-print w-[210mm] max-w-full flex justify-between items-center mb-1.5 px-1 text-xs text-gray-600">
            <span className="font-semibold text-gray-700">Page 2 — Présentation &amp; PESTEL</span>
            <button
              onClick={() => handleOpenCommentsForPage(2)}
              className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 bg-white/90 hover:bg-white px-2.5 py-1 rounded-md border border-gray-300 shadow-2xs transition-colors cursor-pointer"
            >
              <MessageSquare size={12} />
              <span>Commenter cette page</span>
              {getPageCommentsCount(2) > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {getPageCommentsCount(2)}
                </span>
              )}
            </button>
          </div>
          <div id="dossier-page-2" className="a4-page-wrapper">
            <DossierPresentationPage pageNumber={2} totalPages={totalPages} />
          </div>
        </div>

        {/* PAGE 3 : SWOT Global & Modèle d'Affaires VRIO */}
        <div className="relative flex flex-col items-center w-full">
          <div className="no-print w-[210mm] max-w-full flex justify-between items-center mb-1.5 px-1 text-xs text-gray-600">
            <span className="font-semibold text-gray-700">Page 3 — SWOT &amp; Modèle VRIO</span>
            <button
              onClick={() => handleOpenCommentsForPage(3)}
              className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 bg-white/90 hover:bg-white px-2.5 py-1 rounded-md border border-gray-300 shadow-2xs transition-colors cursor-pointer"
            >
              <MessageSquare size={12} />
              <span>Commenter cette page</span>
              {getPageCommentsCount(3) > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {getPageCommentsCount(3)}
                </span>
              )}
            </button>
          </div>
          <div id="dossier-page-3" className="a4-page-wrapper">
            <DossierOfferPage pageNumber={3} totalPages={totalPages} />
          </div>
        </div>

        {/* PAGE 4 : Parties Prenantes, Prospective & Sources */}
        <div className="relative flex flex-col items-center w-full">
          <div className="no-print w-[210mm] max-w-full flex justify-between items-center mb-1.5 px-1 text-xs text-gray-600">
            <span className="font-semibold text-gray-700">Page 4 — Parties Prenantes &amp; Sources</span>
            <button
              onClick={() => handleOpenCommentsForPage(4)}
              className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 bg-white/90 hover:bg-white px-2.5 py-1 rounded-md border border-gray-300 shadow-2xs transition-colors cursor-pointer"
            >
              <MessageSquare size={12} />
              <span>Commenter cette page</span>
              {getPageCommentsCount(4) > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {getPageCommentsCount(4)}
                </span>
              )}
            </button>
          </div>
          <div id="dossier-page-4" className="a4-page-wrapper">
            <DossierBudgetPage pageNumber={4} totalPages={totalPages} />
          </div>
        </div>
      </div>

      {/* PANNEAU LATÉRAL DE COMMENTAIRES CONNECTÉ À SUPABASE */}
      <CommentsPanel
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        comments={comments}
        onRefreshComments={() => fetchDossierComments().then(setComments)}
        targetPage={targetPage}
        onTargetPageChange={setTargetPage}
        onScrollToPage={handleScrollToPage}
      />
    </div>
  )
}

export default App
