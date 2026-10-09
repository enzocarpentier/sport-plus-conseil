import { DossierCoverPage } from './components/dossier/DossierCoverPage'
import { DossierPresentationPage } from './components/dossier/DossierPresentationPage'
import { DossierOfferPage } from './components/dossier/DossierOfferPage'
import { DossierBudgetPage } from './components/dossier/DossierBudgetPage'
import { Printer } from 'lucide-react'

export function App() {
  const totalPages = 4

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-[#e5e7eb] py-10 px-4 flex flex-col items-center justify-start select-text">
      {/* Bouton d'impression / export PDF sobre et élégant */}
      <button
        onClick={handlePrint}
        className="no-print fixed top-5 right-5 z-50 flex items-center gap-2 bg-[#1c2d42] hover:bg-[#0f1b29] text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all text-xs font-serif font-medium cursor-pointer border border-[#2b415e]"
        title="Imprimer ou exporter en PDF (A4 officiel)"
      >
        <Printer size={14} />
        <span>Imprimer / Exporter PDF (A4)</span>
      </button>

      {/* Les Pages A4 du Dossier Académique */}
      <div className="flex flex-col items-center gap-10 w-full max-w-full">
        {/* PAGE 1 : Page de Garde Académique */}
        <div id="dossier-page-1" className="a4-page-wrapper">
          <DossierCoverPage pageNumber={1} totalPages={totalPages} />
        </div>

        {/* PAGE 2 : Sommaire, Abstract & Introduction */}
        <div id="dossier-page-2" className="a4-page-wrapper">
          <DossierPresentationPage pageNumber={2} totalPages={totalPages} />
        </div>

        {/* PAGE 3 : Matrice d'Allocation & Doctrine Fiscale */}
        <div id="dossier-page-3" className="a4-page-wrapper">
          <DossierOfferPage pageNumber={3} totalPages={totalPages} />
        </div>

        {/* PAGE 4 : Budget Analytique & Protocole d'Approbation */}
        <div id="dossier-page-4" className="a4-page-wrapper">
          <DossierBudgetPage pageNumber={4} totalPages={totalPages} />
        </div>
      </div>
    </div>
  )
}

export default App
