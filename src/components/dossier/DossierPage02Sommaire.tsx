import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
  onNavigatePage?: (pageNum: number) => void
}

export const DossierPage02Sommaire: React.FC<DossierPageProps> = ({
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
        <span className="italic">Sommaire Général (1/2)</span>
      </div>

      {/* Corps du Sommaire — Page 1/2 en strict TNR 12pt, interligne 1,5 */}
      <div className="academic-body flex-1 flex flex-col justify-between py-2 text-[12pt] leading-[1.5]">
        <div className="text-center mb-4">
          <h1 className="text-[15pt] font-bold uppercase tracking-wider text-black">
            Sommaire Général
          </h1>
          <div className="w-16 h-0.5 bg-black mx-auto mt-1" />
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-1">
          <a
            href="#dossier-page-4"
            onClick={(e) => handleClick(e, 4)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 4"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[12pt] shrink min-w-0">
              Introduction Générale et Problématique Stratégique
            </span>
            <span className="flex-1 mx-3 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-mono font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 4</span>
          </a>
        </div>

        {/* PARTIE 1 */}
        <div className="space-y-1.5">
          <a
            href="#dossier-page-5"
            onClick={(e) => handleClick(e, 5)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 5"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[12pt] shrink min-w-0">
              Partie 1 — Présentation de l&apos;Organisation Choisie
            </span>
            <span className="flex-1 mx-3 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-mono font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 5</span>
          </a>
          <div className="pl-6 space-y-1 text-[12pt] text-gray-800">
            <a
              href="#dossier-page-5"
              onClick={(e) => handleClick(e, 5)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">1.1 Genèse historique, statut juridique SAS et culture PME</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">5</span>
            </a>
            <a
              href="#dossier-page-6"
              onClick={(e) => handleClick(e, 6)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">1.2 Rapprochements clés : GM Sports Consulting, TV Sport Events et Dragons</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">6</span>
            </a>
            <a
              href="#dossier-page-7"
              onClick={(e) => handleClick(e, 7)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">1.3 Portefeuille multisport d&apos;événements (NBA, All Star Game, WTA, Marathon)</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">7</span>
            </a>
          </div>
        </div>

        {/* PARTIE 2 */}
        <div className="space-y-1.5">
          <a
            href="#dossier-page-8"
            onClick={(e) => handleClick(e, 8)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 8"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[12pt] shrink min-w-0">
              Partie 2 — Analyse de l&apos;Environnement (Macro et Micro)
            </span>
            <span className="flex-1 mx-3 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-mono font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 8</span>
          </a>
          <div className="pl-6 space-y-1 text-[12pt] text-gray-800">
            <a
              href="#dossier-page-8"
              onClick={(e) => handleClick(e, 8)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">2.1 Diagnostic PESTEL : facteurs politiques et économiques</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">8</span>
            </a>
            <a
              href="#dossier-page-9"
              onClick={(e) => handleClick(e, 9)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">2.2 Diagnostic PESTEL : facteurs socioculturels et technologiques</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">9</span>
            </a>
            <a
              href="#dossier-page-10"
              onClick={(e) => handleClick(e, 10)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">2.3 Diagnostic PESTEL : facteurs écologiques et légaux</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">10</span>
            </a>
            <a
              href="#dossier-page-11"
              onClick={(e) => handleClick(e, 11)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">2.4 Analyse sectorielle : le modèle des 5 forces (+1) de Michael Porter</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">11</span>
            </a>
            <a
              href="#dossier-page-12"
              onClick={(e) => handleClick(e, 12)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0">2.5 Diagnostic stratégique croisé : matrice SWOT globale de l&apos;agence</span>
              <span className="flex-1 mx-3 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="font-mono text-gray-700 shrink-0 whitespace-nowrap ml-2">12</span>
            </a>
          </div>
        </div>

        <div className="text-right text-[10pt] italic text-gray-500 pt-2">
          Suite du sommaire en page 3 &rarr;
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
