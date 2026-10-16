import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage11Swot: React.FC<DossierPageProps> = ({
  id,
  pageNumber
}) => {
  return (
    <div
      id={id}
      className="a4-page-container bg-white text-black shadow-md relative flex flex-col justify-between select-text"
      style={{ boxSizing: 'border-box' }}
    >
      {/* En-tête courant académique */}
      <div className="page-header pb-1 mb-3 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0 w-full overflow-hidden">
        <span className="uppercase tracking-wide whitespace-nowrap shrink-0">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic whitespace-nowrap shrink-0">Partie 2 : Diagnostic SWOT Croisé (SWOT 2/2)</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.9 Diagnostic Externe : Opportunités de Croissance et Menaces Environnementales
        </h2>

        <p>
          Sur le versant externe, les opportunités issues du macro-environnement confortent la trajectoire d&apos;expansion de Sport Plus Conseil. L&apos;appétence renouvelée des entreprises pour les relations publiques expérientielles et les hospitalités VIP permet de dégager des marges unitaires substantielles sur les événements d&apos;élite. L&apos;essor continu du « sportainment », la médiatisation accélérée du sport féminin (WTA) et l&apos;exigence sociétale de décarbonation constituent des leviers puissants pour séduire de nouveaux commanditaires privés sensibles aux engagements RSE. Par ailleurs, la détention des Dragons de Rouen ouvre des perspectives fécondes de synergies territoriales et de fidélisation d&apos;abonnés dans le bassin normand.
        </p>

        <p>
          Néanmoins, les menaces externes imposent une vigilance managériale permanente. La concurrence des groupes mondiaux du spectacle (Live Nation, Infront, IMG), capables d&apos;engager des garanties financières considérables, exerce une pression concurrentielle sur les droits d&apos;exploitation. À cela s&apos;ajoutent l&apos;inflation persistante des coûts opérationnels (sécurité agréée CNAPS, énergie pour le chauffage de la terre battue indoor, loyers d&apos;arénas) et le risque de rationalisation des subventions des collectivités publiques dans le contexte budgétaire post-olympique.
        </p>

        <h2 className="academic-h1">
          2.10 Matrice Stratégique Croisée (TOWS) et Alignement des Orientations
        </h2>

        <p>
          La confrontation des forces et faiblesses internes avec les opportunités et menaces externes (matrice stratégique TOWS de Weihrich, 1982) permet de dégager quatre orientations opérationnelles majeures pour Sport Plus Conseil :
        </p>

        <p>
          Premièrement, l&apos;axe <em>Forces-Opportunités (Maxi-Maxi)</em> consiste à exploiter l&apos;expertise technique de l&apos;agence et ses labels prestigieux (NBA, WTA) pour capter la demande croissante d&apos;hospitalités B2B régionales. Deuxièmement, l&apos;axe <em>Faiblesses-Opportunités (Mini-Maxi)</em> vise à compenser la taille resserrée de la PME en nouant des alliances pluriannuelles avec les collectivités et les associations de bénévoles, convertissant les ressources territoriales en leviers d&apos;agilité. Troisièmement, l&apos;axe <em>Forces-Menaces (Maxi-Mini)</em> mobilise l&apos;intégration verticale (TV Sport Events, régie) et l&apos;ancrage local pour résister aux tentatives de prédation des multinationales du divertissement. Enfin, l&apos;axe <em>Faiblesses-Menaces (Mini-Mini)</em> impose de pré-financer systématiquement les productions événementielles par des contrats de partenariat amont, sanctuarisant la rentabilité face aux risques d&apos;inflation des coûts.
        </p>
      </div>

      {/* Pied de page académique centré */}
      <div className="page-footer pt-2 flex items-center justify-between text-[10pt] text-gray-700 border-t border-gray-400 shrink-0">
        <span className="text-left whitespace-nowrap">Université de Rouen Normandie — UFR STAPS</span>
        <span className="absolute left-1/2 -translate-x-1/2 font-medium text-[10.5pt]">{pageNumber}</span>
        <span className="text-right italic whitespace-nowrap">Note collective de synthèse</span>
      </div>
    </div>
  )
}
