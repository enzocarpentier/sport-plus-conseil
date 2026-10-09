import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
  onNavigatePage?: (pageNum: number) => void
}

export const DossierPage03Sommaire: React.FC<DossierPageProps> = ({
  id,
  pageNumber,
  onNavigatePage
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPage: number) => {
    if (onNavigatePage) {
      e.preventDefault()
      onNavigatePage(targetPage)
    }
  }

  return (
    <div
      id={id}
      className="a4-page-container bg-white text-black shadow-md relative flex flex-col justify-between select-text"
      style={{ boxSizing: 'border-box' }}
    >
      {/* En-tête courant académique */}
      <div className="pb-1 mb-2 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0">
        <span className="uppercase tracking-wider">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic">Sommaire Général (2/2)</span>
      </div>

      {/* Corps du Sommaire — Page 2/2 en strict TNR 12pt, interligne 1,5 */}
      <div className="academic-body flex-1 flex flex-col justify-between py-1 text-[12pt] leading-[1.5]">
        <div className="text-center mb-3">
          <h1 className="text-[15pt] font-bold uppercase tracking-wider text-black">
            Sommaire Général (Suite)
          </h1>
          <div className="w-16 h-0.5 bg-black mx-auto mt-1" />
        </div>

        {/* PARTIE 3 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-13"
            onClick={(e) => handleClick(e, 13)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 13"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[12pt] shrink min-w-0">
              Partie 3 — Analyse du Modèle d&apos;Affaires (Business Model)
            </span>
            <span className="flex-1 mx-3 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-mono font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 13</span>
          </a>
          <div className="pl-6 space-y-0.5 text-[12pt] text-gray-800">
            <a
              href="#dossier-page-13"
              onClick={(e) => handleClick(e, 13)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">3.1 Définition conceptuelle et spécificités des OS 2 (RCOV &amp; Magretta)</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">13</span>
            </a>
            <a
              href="#dossier-page-14"
              onClick={(e) => handleClick(e, 14)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">3.2 Cartographie des parties prenantes apporteuses de ressources (Freeman)</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">14</span>
            </a>
            <a
              href="#dossier-page-15"
              onClick={(e) => handleClick(e, 15)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">3.3 Provenance des ressources tangibles et intangibles (Théorie RBV)</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">15</span>
            </a>
            <a
              href="#dossier-page-16"
              onClick={(e) => handleClick(e, 16)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">3.4 Évaluation stratégique des ressources : le modèle VRIO de Barney</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">16</span>
            </a>
          </div>
        </div>

        {/* PARTIE 4 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-17"
            onClick={(e) => handleClick(e, 17)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 17"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[12pt] shrink min-w-0">
              Partie 4 — Analyse des Stratégies à l&apos;Œuvre
            </span>
            <span className="flex-1 mx-3 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-mono font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 17</span>
          </a>
          <div className="pl-6 space-y-0.5 text-[12pt] text-gray-800">
            <a
              href="#dossier-page-17"
              onClick={(e) => handleClick(e, 17)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">4.1 Stratégie sportive : opérateur d&apos;élite et synergies Dragons (RHE 76)</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">17</span>
            </a>
            <a
              href="#dossier-page-18"
              onClick={(e) => handleClick(e, 18)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">4.2 Stratégie commerciale : régie, naming CDES et hospitalités B2B</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">18</span>
            </a>
            <a
              href="#dossier-page-19"
              onClick={(e) => handleClick(e, 19)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">4.3 Stratégie territoriale : attractivité métropolitaine et acteurs publics</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">19</span>
            </a>
            <a
              href="#dossier-page-20"
              onClick={(e) => handleClick(e, 20)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">4.4 Stratégie sociétale : parité (WTA 250) et écoresponsabilité RSE</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">20</span>
            </a>
          </div>
        </div>

        {/* PARTIE 5 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-21"
            onClick={(e) => handleClick(e, 21)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 21"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[12pt] shrink min-w-0">
              Partie 5 — Analyse Prospective (Valant Conclusion)
            </span>
            <span className="flex-1 mx-3 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-mono font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 21</span>
          </a>
          <div className="pl-6 space-y-0.5 text-[12pt] text-gray-800">
            <a
              href="#dossier-page-21"
              onClick={(e) => handleClick(e, 21)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">5.1 Tendances prospectives du secteur : hybridation digitale et climat</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">21</span>
            </a>
            <a
              href="#dossier-page-21"
              onClick={(e) => handleClick(e, 21)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">5.2 La fable de Mintzberg et la vision stratégique holistique</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">21</span>
            </a>
          </div>
        </div>

        {/* PARTIE 6 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-22"
            onClick={(e) => handleClick(e, 22)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 22"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[12pt] shrink min-w-0">
              Partie 6 — Sources et Bibliographie Académique Complète
            </span>
            <span className="flex-1 mx-3 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-mono font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 22</span>
          </a>
          <div className="pl-6 space-y-0.5 text-[12pt] text-gray-800">
            <a
              href="#dossier-page-22"
              onClick={(e) => handleClick(e, 22)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">6.1 Ouvrages fondamentaux et articles scientifiques de référence</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">22</span>
            </a>
            <a
              href="#dossier-page-22"
              onClick={(e) => handleClick(e, 22)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">6.2 Supports pédagogiques universitaires et cours magistraux</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">22</span>
            </a>
            <a
              href="#dossier-page-22"
              onClick={(e) => handleClick(e, 22)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">6.3 Rapports institutionnels, observatoires et données d&apos;entreprise</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">22</span>
            </a>
          </div>
        </div>
      </div>

      {/* Pied de page académique centré */}
      <div className="pt-2 flex items-center justify-between text-[10pt] text-gray-700 border-t border-gray-400 shrink-0 mt-auto w-full relative">
        <span className="text-left whitespace-nowrap">Université de Rouen Normandie — UFR STAPS</span>
        <span className="absolute left-1/2 -translate-x-1/2 font-mono font-medium text-[10.5pt]">{pageNumber}</span>
        <span className="text-right italic whitespace-nowrap">Note collective de synthèse</span>
      </div>
    </div>
  )
}
