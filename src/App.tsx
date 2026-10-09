import { useState, useEffect } from 'react'
import { DossierCoverPage } from './components/dossier/DossierCoverPage'
import { DossierPage02Intro } from './components/dossier/DossierPage02Intro'
import { DossierPage03Genesis } from './components/dossier/DossierPage03Genesis'
import { DossierPage04Mergers } from './components/dossier/DossierPage04Mergers'
import { DossierPage05Portfolio } from './components/dossier/DossierPage05Portfolio'
import { DossierPage06PestelPolEco } from './components/dossier/DossierPage06PestelPolEco'
import { DossierPage07PestelSocTech } from './components/dossier/DossierPage07PestelSocTech'
import { DossierPage08PestelEnvLeg } from './components/dossier/DossierPage08PestelEnvLeg'
import { DossierPage09PorterForces } from './components/dossier/DossierPage09PorterForces'
import { DossierPage10Swot } from './components/dossier/DossierPage10Swot'
import { DossierPage11BusinessModel } from './components/dossier/DossierPage11BusinessModel'
import { DossierPage12Stakeholders } from './components/dossier/DossierPage12Stakeholders'
import { DossierPage13ResourcesRbv } from './components/dossier/DossierPage13ResourcesRbv'
import { DossierPage14VrioModel } from './components/dossier/DossierPage14VrioModel'
import { DossierPage15SportStrategy } from './components/dossier/DossierPage15SportStrategy'
import { DossierPage16CommercialStrategy } from './components/dossier/DossierPage16CommercialStrategy'
import { DossierPage17TerritorialStrategy } from './components/dossier/DossierPage17TerritorialStrategy'
import { DossierPage18RseStrategy } from './components/dossier/DossierPage18RseStrategy'
import { DossierPage19ProspectiveMintzberg } from './components/dossier/DossierPage19ProspectiveMintzberg'
import { DossierPage20Bibliography } from './components/dossier/DossierPage20Bibliography'

import { CommentsPanel } from './components/CommentsPanel'
import {
  type DossierComment,
  fetchDossierComments,
  subscribeToDossierComments
} from './lib/supabase'
import { Printer, MessageSquare, ChevronDown } from 'lucide-react'

const DOSSIER_PAGES = [
  { num: 1, title: 'Page de Garde Académique', render: (p: number, t: number) => <DossierCoverPage pageNumber={p} totalPages={t} /> },
  { num: 2, title: 'Sommaire & Introduction Générale', render: (p: number, t: number) => <DossierPage02Intro pageNumber={p} totalPages={t} /> },
  { num: 3, title: 'Genèse, PME & Culture d\'Entreprise', render: (p: number, t: number) => <DossierPage03Genesis pageNumber={p} totalPages={t} /> },
  { num: 4, title: 'Rapprochements & Alliances Stratégiques', render: (p: number, t: number) => <DossierPage04Mergers pageNumber={p} totalPages={t} /> },
  { num: 5, title: 'Portefeuille Multisport d\'Événements', render: (p: number, t: number) => <DossierPage05Portfolio pageNumber={p} totalPages={t} /> },
  { num: 6, title: 'PESTEL : Dimensions Politique & Économique', render: (p: number, t: number) => <DossierPage06PestelPolEco pageNumber={p} totalPages={t} /> },
  { num: 7, title: 'PESTEL : Dimensions Sociale & Technologique', render: (p: number, t: number) => <DossierPage07PestelSocTech pageNumber={p} totalPages={t} /> },
  { num: 8, title: 'PESTEL : Dimensions Écologique & Légale', render: (p: number, t: number) => <DossierPage08PestelEnvLeg pageNumber={p} totalPages={t} /> },
  { num: 9, title: 'Modèle des 5 Forces de Porter', render: (p: number, t: number) => <DossierPage09PorterForces pageNumber={p} totalPages={t} /> },
  { num: 10, title: 'Diagnostic SWOT Global', render: (p: number, t: number) => <DossierPage10Swot pageNumber={p} totalPages={t} /> },
  { num: 11, title: 'Modèle d\'Affaires dans les OS 2', render: (p: number, t: number) => <DossierPage11BusinessModel pageNumber={p} totalPages={t} /> },
  { num: 12, title: 'Cartographie des Parties Prenantes', render: (p: number, t: number) => <DossierPage12Stakeholders pageNumber={p} totalPages={t} /> },
  { num: 13, title: 'Théorie des Ressources (RBV)', render: (p: number, t: number) => <DossierPage13ResourcesRbv pageNumber={p} totalPages={t} /> },
  { num: 14, title: 'Modèle VRIO de Barney', render: (p: number, t: number) => <DossierPage14VrioModel pageNumber={p} totalPages={t} /> },
  { num: 15, title: 'Stratégie Sportive de l\'Agence', render: (p: number, t: number) => <DossierPage15SportStrategy pageNumber={p} totalPages={t} /> },
  { num: 16, title: 'Stratégie Commerciale & Hospitalités B2B', render: (p: number, t: number) => <DossierPage16CommercialStrategy pageNumber={p} totalPages={t} /> },
  { num: 17, title: 'Stratégie Territoriale & Pouvoirs Publics', render: (p: number, t: number) => <DossierPage17TerritorialStrategy pageNumber={p} totalPages={t} /> },
  { num: 18, title: 'Stratégie Sociétale, Parité & RSE', render: (p: number, t: number) => <DossierPage18RseStrategy pageNumber={p} totalPages={t} /> },
  { num: 19, title: 'Prospective & Fable de Mintzberg', render: (p: number, t: number) => <DossierPage19ProspectiveMintzberg pageNumber={p} totalPages={t} /> },
  { num: 20, title: 'Sources & Bibliographie Académique', render: (p: number, t: number) => <DossierPage20Bibliography pageNumber={p} totalPages={t} /> },
]

export function App() {
  const totalPages = 20
  const [comments, setComments] = useState<DossierComment[]>([])
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)
  const [targetPage, setTargetPage] = useState<number>(1)

  // Chargement initial des commentaires et écoute temps réel
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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const getPageCommentsCount = (pageNum: number) => {
    return comments.filter((c) => c.page_number === pageNum).length
  }

  return (
    <div className="min-h-screen bg-[#e5e7eb] py-12 px-4 flex flex-col items-center justify-start select-text relative">
      
      {/* BARRE D'ACTIONS FLOTTANTE EN HAUT À DROITE */}
      <div className="no-print fixed top-4 right-4 z-40 flex items-center gap-2.5">
        
        {/* SÉLECTEUR RAPIDE DE NAVIGATION ENTRE LES 20 PAGES */}
        <div className="relative hidden md:block">
          <select
            onChange={(e) => handleScrollToPage(Number(e.target.value))}
            defaultValue=""
            className="appearance-none bg-white hover:bg-gray-50 text-gray-800 text-xs font-sans font-medium px-3 py-2 pr-7 rounded-md border border-gray-300 shadow-md cursor-pointer transition-all"
            title="Naviguer directement vers une page du dossier"
          >
            <option value="" disabled>Aller à la page...</option>
            {DOSSIER_PAGES.map((page) => (
              <option key={page.num} value={page.num}>
                P.{page.num} : {page.title}
              </option>
            ))}
          </select>
          <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>

        {/* BOUTON COMMENTAIRES / COLLABORATION */}
        <button
          onClick={() => setIsCommentsOpen(true)}
          className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-3.5 py-2 rounded-md shadow-md hover:shadow-lg transition-all text-xs font-sans font-medium cursor-pointer border border-gray-300"
          title="Ouvrir les remarques du groupe"
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
          title="Imprimer ou exporter en PDF officiel A4 (20 pages)"
        >
          <Printer size={14} />
          <span className="hidden sm:inline">Imprimer / PDF</span>
        </button>
      </div>

      {/* LES 20 PAGES A4 DU DOSSIER ACADÉMIQUE */}
      <div className="flex flex-col items-center gap-12 w-full max-w-full">
        {DOSSIER_PAGES.map((page) => (
          <div key={page.num} className="relative flex flex-col items-center w-full">
            <div className="no-print w-[210mm] max-w-full flex justify-between items-center mb-1.5 px-1 text-xs text-gray-600">
              <span className="font-semibold text-gray-700">
                Page {page.num} — {page.title}
              </span>
              <button
                onClick={() => handleOpenCommentsForPage(page.num)}
                className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 bg-white/90 hover:bg-white px-2.5 py-1 rounded-md border border-gray-300 shadow-2xs transition-colors cursor-pointer"
              >
                <MessageSquare size={12} />
                <span>Commenter cette page</span>
                {getPageCommentsCount(page.num) > 0 && (
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {getPageCommentsCount(page.num)}
                  </span>
                )}
              </button>
            </div>
            <div id={`dossier-page-${page.num}`} className="a4-page-wrapper">
              {page.render(page.num, totalPages)}
            </div>
          </div>
        ))}
      </div>

      {/* PANNEAU LATÉRAL DE COMMENTAIRES */}
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
