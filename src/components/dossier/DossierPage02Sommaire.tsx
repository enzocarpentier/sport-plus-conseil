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
      <div className="page-header pb-1 mb-2 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0 w-full overflow-hidden">
        <span className="uppercase tracking-wide whitespace-nowrap shrink-0">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic whitespace-nowrap shrink-0">Sommaire Général</span>
      </div>

      {/* Corps du Sommaire — strict TNR 12pt, interligne 1,5, alignement à gauche strict (zéro espace de justification) */}
      <div className="sommaire-container flex-1 flex flex-col justify-start py-1 text-[12pt] leading-[1.5]">
        <div className="text-center mb-3 w-full">
          <h1
            className="text-[14pt] font-bold uppercase tracking-wider text-black"
            style={{ textAlign: 'center' }}
          >
            Sommaire Général
          </h1>
          <div className="w-16 h-0.5 bg-black mx-auto mt-1" />
        </div>

        {/* INTRODUCTION */}
        <div className="mb-2">
          <a
            href="#dossier-page-3"
            onClick={(e) => handleClick(e, 3)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 3"
          >
            <span
              className="font-bold text-[12pt] shrink min-w-0 text-left"
              style={{ textAlign: 'left', wordSpacing: 'normal' }}
            >
              Introduction Générale et Problématique Stratégique
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 3</span>
          </a>
        </div>

        {/* PARTIE 1 */}
        <div className="mb-2">
          <a
            href="#dossier-page-4"
            onClick={(e) => handleClick(e, 4)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 4"
          >
            <span
              className="font-bold text-[12pt] shrink min-w-0 text-left"
              style={{ textAlign: 'left', wordSpacing: 'normal' }}
            >
              Partie 1 — Présentation de l&apos;Organisation Choisie
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 4</span>
          </a>
          <div className="pl-5 space-y-0.5 text-[12pt] leading-[1.5] text-gray-800">
            <a
              href="#dossier-page-4"
              onClick={(e) => handleClick(e, 4)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                1.1 Genèse historique, statut juridique SAS et culture PME
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">4</span>
            </a>
            <a
              href="#dossier-page-5"
              onClick={(e) => handleClick(e, 5)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                1.2 Rapprochements clés : GM Sports Consulting, TV Sport Events et Dragons
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">5</span>
            </a>
            <a
              href="#dossier-page-6"
              onClick={(e) => handleClick(e, 6)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                1.3 Portefeuille multisport d&apos;événements (NBA, All Star Game, WTA, Marathon)
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">6</span>
            </a>
          </div>
        </div>

        {/* PARTIE 2 */}
        <div className="mb-2">
          <a
            href="#dossier-page-7"
            onClick={(e) => handleClick(e, 7)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 7"
          >
            <span
              className="font-bold text-[12pt] shrink min-w-0 text-left"
              style={{ textAlign: 'left', wordSpacing: 'normal' }}
            >
              Partie 2 — Analyse de l&apos;Environnement (Macro et Micro)
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 7</span>
          </a>
          <div className="pl-5 space-y-0.5 text-[12pt] leading-[1.5] text-gray-800">
            <a
              href="#dossier-page-7"
              onClick={(e) => handleClick(e, 7)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                2.1 Diagnostic PESTEL : facteurs politiques et économiques
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">7</span>
            </a>
            <a
              href="#dossier-page-8"
              onClick={(e) => handleClick(e, 8)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                2.2 Diagnostic PESTEL : facteurs socioculturels et technologiques
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">8</span>
            </a>
            <a
              href="#dossier-page-9"
              onClick={(e) => handleClick(e, 9)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                2.3 Diagnostic PESTEL : facteurs écologiques et légaux
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">9</span>
            </a>
            <a
              href="#dossier-page-10"
              onClick={(e) => handleClick(e, 10)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                2.4 Analyse sectorielle : le modèle des 5 forces (+1) de Michael Porter
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">10</span>
            </a>
            <a
              href="#dossier-page-11"
              onClick={(e) => handleClick(e, 11)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                2.5 Diagnostic stratégique croisé : matrice SWOT globale de l&apos;agence
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">11</span>
            </a>
          </div>
        </div>

        {/* PARTIE 3 */}
        <div className="mb-2">
          <a
            href="#dossier-page-12"
            onClick={(e) => handleClick(e, 12)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 12"
          >
            <span
              className="font-bold text-[12pt] shrink min-w-0 text-left"
              style={{ textAlign: 'left', wordSpacing: 'normal' }}
            >
              Partie 3 — Analyse du Modèle d&apos;Affaires (Business Model)
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 12</span>
          </a>
          <div className="pl-5 space-y-0.5 text-[12pt] leading-[1.5] text-gray-800">
            <a
              href="#dossier-page-12"
              onClick={(e) => handleClick(e, 12)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                3.1 Définition conceptuelle et spécificités des OS 2 (RCOV &amp; Magretta)
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">12</span>
            </a>
            <a
              href="#dossier-page-13"
              onClick={(e) => handleClick(e, 13)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                3.2 Cartographie des parties prenantes apporteuses de ressources (Freeman)
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">13</span>
            </a>
            <a
              href="#dossier-page-14"
              onClick={(e) => handleClick(e, 14)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                3.3 Provenance des ressources tangibles et intangibles (Théorie RBV)
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">14</span>
            </a>
            <a
              href="#dossier-page-15"
              onClick={(e) => handleClick(e, 15)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                3.4 Évaluation stratégique des ressources : le modèle VRIO de Barney
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">15</span>
            </a>
          </div>
        </div>

        {/* PARTIE 4 */}
        <div className="mb-2">
          <a
            href="#dossier-page-16"
            onClick={(e) => handleClick(e, 16)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 16"
          >
            <span
              className="font-bold text-[12pt] shrink min-w-0 text-left"
              style={{ textAlign: 'left', wordSpacing: 'normal' }}
            >
              Partie 4 — Analyse des Stratégies à l&apos;Œuvre
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 16</span>
          </a>
          <div className="pl-5 space-y-0.5 text-[12pt] leading-[1.5] text-gray-800">
            <a
              href="#dossier-page-16"
              onClick={(e) => handleClick(e, 16)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                4.1 Stratégie sportive : opérateur d&apos;élite et synergies Dragons (RHE 76)
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">16</span>
            </a>
            <a
              href="#dossier-page-17"
              onClick={(e) => handleClick(e, 17)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                4.2 Stratégie commerciale : régie, naming CDES et hospitalités B2B
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">17</span>
            </a>
            <a
              href="#dossier-page-18"
              onClick={(e) => handleClick(e, 18)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                4.3 Stratégie territoriale : attractivité métropolitaine et acteurs publics
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">18</span>
            </a>
            <a
              href="#dossier-page-19"
              onClick={(e) => handleClick(e, 19)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                4.4 Stratégie sociétale : parité (WTA 250) et écoresponsabilité RSE
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">19</span>
            </a>
          </div>
        </div>

        {/* PARTIE 5 */}
        <div className="mb-2">
          <a
            href="#dossier-page-20"
            onClick={(e) => handleClick(e, 20)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 20"
          >
            <span
              className="font-bold text-[12pt] shrink min-w-0 text-left"
              style={{ textAlign: 'left', wordSpacing: 'normal' }}
            >
              Partie 5 — Analyse Prospective (Valant Conclusion)
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[20px]" />
            <span className="font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 20</span>
          </a>
          <div className="pl-5 space-y-0.5 text-[12pt] leading-[1.5] text-gray-800">
            <a
              href="#dossier-page-20"
              onClick={(e) => handleClick(e, 20)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                5.1 Tendances prospectives du secteur : hybridation digitale et climat
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">20</span>
            </a>
            <a
              href="#dossier-page-20"
              onClick={(e) => handleClick(e, 20)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                5.2 La fable de Mintzberg et la vision stratégique holistique
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[20px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">20</span>
            </a>
          </div>
        </div>

        {/* PARTIE 6 */}
        <div className="mb-2">
          <a
            href="#dossier-page-21"
            onClick={(e) => handleClick(e, 21)}
            className="flex items-baseline justify-between w-full text-black hover:text-blue-800 transition-colors group cursor-pointer"
            title="Aller à la page 21"
          >
            <span
              className="font-bold text-[12pt] shrink min-w-0 text-left"
              style={{ textAlign: 'left', wordSpacing: 'normal' }}
            >
              Partie 6 — Sources et Bibliographie Académique Complète
            </span>
            <span className="flex-1 mx-2 border-b border-dotted border-gray-400 group-hover:border-blue-800 min-w-[16px]" />
            <span className="font-bold text-[12pt] shrink-0 whitespace-nowrap ml-2">Page 21</span>
          </a>
          <div className="pl-5 space-y-0.5 text-[12pt] leading-[1.5] text-gray-800">
            <a
              href="#dossier-page-21"
              onClick={(e) => handleClick(e, 21)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                6.1 Ouvrages fondamentaux et articles scientifiques de référence
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[16px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">21</span>
            </a>
            <a
              href="#dossier-page-21"
              onClick={(e) => handleClick(e, 21)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                6.2 Supports pédagogiques universitaires et cours magistraux
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[16px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">21</span>
            </a>
            <a
              href="#dossier-page-21"
              onClick={(e) => handleClick(e, 21)}
              className="flex items-baseline justify-between w-full hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline shrink min-w-0 text-left" style={{ textAlign: 'left' }}>
                6.3 Rapports institutionnels, observatoires et données d&apos;entreprise
              </span>
              <span className="flex-1 mx-2 border-b border-dotted border-gray-300 min-w-[16px]" />
              <span className="text-gray-700 shrink-0 whitespace-nowrap ml-2">21</span>
            </a>
          </div>
        </div>
      </div>

      {/* Pied de page académique centré */}
      <div className="pt-2 flex items-center justify-between text-[10pt] text-gray-700 border-t border-gray-400 shrink-0 mt-auto w-full relative">
        <span className="text-left whitespace-nowrap">Université de Rouen Normandie — UFR STAPS</span>
        <span className="absolute left-1/2 -translate-x-1/2 font-medium text-[10.5pt]">{pageNumber}</span>
        <span className="text-right italic whitespace-nowrap">Note collective de synthèse</span>
      </div>
    </div>
  )
}
