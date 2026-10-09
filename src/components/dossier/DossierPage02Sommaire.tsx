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
    // Si la fonction de navigation fluide est fournie, on l'utilise pour le confort web
    if (onNavigatePage) {
      e.preventDefault()
      onNavigatePage(targetPage)
    }
    // Sinon le comportement naturel de l'ancre href="#dossier-page-X" s'applique (essentiel pour l'export PDF)
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
        <span className="italic">Sommaire Général du Dossier</span>
      </div>

      {/* Corps du Sommaire pleine page */}
      <div className="academic-body flex-1 flex flex-col justify-between py-1 text-[11pt]">
        <div className="text-center mb-3">
          <h1 className="text-[15pt] font-bold uppercase tracking-wider text-black">
            Sommaire Général
          </h1>
          <div className="w-16 h-0.5 bg-black mx-auto mt-1" />
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-1">
          <a
            href="#dossier-page-3"
            onClick={(e) => handleClick(e, 3)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 3"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[10.5pt]">
              Introduction Générale et Problématique Stratégique
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800" />
            <span className="font-mono font-bold text-[10.5pt]">Page 3</span>
          </a>
        </div>

        {/* PARTIE 1 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-4"
            onClick={(e) => handleClick(e, 4)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 4"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[10.5pt]">
              Partie 1 — Présentation de l&apos;Organisation Choisie (OS de Niveau 2)
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800" />
            <span className="font-mono font-bold text-[10.5pt]">Page 4</span>
          </a>
          <div className="pl-4 space-y-0.5 text-[10pt] text-gray-800">
            <a
              href="#dossier-page-4"
              onClick={(e) => handleClick(e, 4)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">1.1 Genèse historique, statut juridique SAS et culture PME</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">4</span>
            </a>
            <a
              href="#dossier-page-5"
              onClick={(e) => handleClick(e, 5)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">1.2 Rapprochements clés : GM Sports Consulting, TV Sport Events et Dragons</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">5</span>
            </a>
            <a
              href="#dossier-page-6"
              onClick={(e) => handleClick(e, 6)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">1.3 Portefeuille multisport d&apos;événements (NBA, All Star Game, WTA, Marathon)</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">6</span>
            </a>
          </div>
        </div>

        {/* PARTIE 2 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-7"
            onClick={(e) => handleClick(e, 7)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 7"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[10.5pt]">
              Partie 2 — Analyse de l&apos;Environnement (Macro et Micro)
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800" />
            <span className="font-mono font-bold text-[10.5pt]">Page 7</span>
          </a>
          <div className="pl-4 space-y-0.5 text-[10pt] text-gray-800">
            <a
              href="#dossier-page-7"
              onClick={(e) => handleClick(e, 7)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">2.1 Diagnostic PESTEL : facteurs politiques et économiques</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">7</span>
            </a>
            <a
              href="#dossier-page-8"
              onClick={(e) => handleClick(e, 8)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">2.2 Diagnostic PESTEL : facteurs socioculturels et technologiques</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">8</span>
            </a>
            <a
              href="#dossier-page-9"
              onClick={(e) => handleClick(e, 9)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">2.3 Diagnostic PESTEL : facteurs écologiques et légaux</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">9</span>
            </a>
            <a
              href="#dossier-page-10"
              onClick={(e) => handleClick(e, 10)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">2.4 Analyse sectorielle : le modèle des 5 forces (+1) de Michael Porter</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">10</span>
            </a>
            <a
              href="#dossier-page-11"
              onClick={(e) => handleClick(e, 11)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">2.5 Diagnostic stratégique croisé : matrice SWOT globale de l&apos;agence</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">11</span>
            </a>
          </div>
        </div>

        {/* PARTIE 3 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-12"
            onClick={(e) => handleClick(e, 12)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 12"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[10.5pt]">
              Partie 3 — Analyse du Modèle d&apos;Affaires (Business Model)
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800" />
            <span className="font-mono font-bold text-[10.5pt]">Page 12</span>
          </a>
          <div className="pl-4 space-y-0.5 text-[10pt] text-gray-800">
            <a
              href="#dossier-page-12"
              onClick={(e) => handleClick(e, 12)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">3.1 Définition conceptuelle et spécificités des OS 2 (RCOV &amp; Magretta)</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">12</span>
            </a>
            <a
              href="#dossier-page-13"
              onClick={(e) => handleClick(e, 13)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">3.2 Cartographie des parties prenantes apporteuses de ressources (Freeman)</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">13</span>
            </a>
            <a
              href="#dossier-page-14"
              onClick={(e) => handleClick(e, 14)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">3.3 Provenance des ressources tangibles et intangibles (Théorie RBV)</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">14</span>
            </a>
            <a
              href="#dossier-page-15"
              onClick={(e) => handleClick(e, 15)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">3.4 Évaluation stratégique des ressources : le modèle VRIO de Barney</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">15</span>
            </a>
          </div>
        </div>

        {/* PARTIE 4 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-16"
            onClick={(e) => handleClick(e, 16)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 16"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[10.5pt]">
              Partie 4 — Analyse des Stratégies à l&apos;Œuvre
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800" />
            <span className="font-mono font-bold text-[10.5pt]">Page 16</span>
          </a>
          <div className="pl-4 space-y-0.5 text-[10pt] text-gray-800">
            <a
              href="#dossier-page-16"
              onClick={(e) => handleClick(e, 16)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">4.1 Stratégie sportive : opérateur d&apos;élite et synergies club Dragons (RHE 76)</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">16</span>
            </a>
            <a
              href="#dossier-page-17"
              onClick={(e) => handleClick(e, 17)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">4.2 Stratégie commerciale : régie, naming CDES et hospitalités B2B</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">17</span>
            </a>
            <a
              href="#dossier-page-18"
              onClick={(e) => handleClick(e, 18)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">4.3 Stratégie territoriale : attractivité métropolitaine et commande publique</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">18</span>
            </a>
            <a
              href="#dossier-page-19"
              onClick={(e) => handleClick(e, 19)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">4.4 Stratégie sociétale : parité sportive (WTA 250) et écoresponsabilité RSE</span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300" />
              <span className="font-mono text-gray-700">19</span>
            </a>
          </div>
        </div>

        {/* PARTIES 5 & 6 */}
        <div className="space-y-1">
          <a
            href="#dossier-page-20"
            onClick={(e) => handleClick(e, 20)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 20"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[10.5pt]">
              Partie 5 — Analyse Prospective (Valant Conclusion) : Fable de Mintzberg
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800" />
            <span className="font-mono font-bold text-[10.5pt]">Page 20</span>
          </a>
          <a
            href="#dossier-page-21"
            onClick={(e) => handleClick(e, 21)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 21"
          >
            <span className="font-bold uppercase tracking-wide group-hover:underline text-[10.5pt]">
              Partie 6 — Sources et Bibliographie Académique Complète
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800" />
            <span className="font-mono font-bold text-[10.5pt]">Page 21</span>
          </a>
        </div>
      </div>

      {/* Pied de page académique centré */}
      <div className="pt-2 grid grid-cols-3 items-center text-[10pt] text-gray-700 border-t border-gray-400 shrink-0 mt-auto w-full">
        <span className="text-left">Université de Rouen Normandie — UFR STAPS</span>
        <span className="text-center font-mono font-medium text-[10.5pt]">{pageNumber}</span>
        <span className="text-right italic">Note collective de synthèse</span>
      </div>
    </div>
  )
}
