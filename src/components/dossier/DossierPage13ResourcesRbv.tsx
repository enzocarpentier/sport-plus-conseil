import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage13ResourcesRbv: React.FC<DossierPageProps> = ({
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
      <div className="pb-1 mb-3 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0">
        <span className="uppercase tracking-wider">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic">Partie 3 : Théorie des Ressources (RBV)</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          3.5 Les Fondements de la Resource-Based View (RBV) dans les Entreprises de Services
        </h2>

        <p>
          Initiée par Birger Wernerfelt (1984) et théorisée par Jay Barney (1991), la théorie des ressources et compétences (<em>Resource-Based View</em> ou RBV) déplace la focale de l&apos;analyse stratégique : l&apos;avantage concurrentiel durable d&apos;une firme ne provient pas exclusivement du positionnement externe sur un marché attractif, mais repose fondamentalement sur la détention, le développement et l&apos;agencement optimal d&apos;un stock interne de facteurs de production uniques et difficilement reproductibles.
        </p>

        <p>
          Pour une organisation sportive de niveau 2 dont l&apos;activité est immatérielle et événementielle, l&apos;analyse des ressources impose une distinction rigoureuse entre les actifs matériels directement tangibles et les ressources intangibles, souvent invisibles dans le bilan comptable mais constitutives de la valeur marchande réelle de l&apos;agence.
        </p>

        <h2 className="academic-h1">
          3.6 Cartographie des Ressources Tangibles et Intangibles de Sport Plus Conseil
        </h2>

        <p>
          Sur le plan des ressources tangibles, Sport Plus Conseil se distingue par ses équipements techniques de pointe. Grâce à l&apos;intégration de TV Sport Events, l&apos;agence est propriétaire d&apos;unités de régie audiovisuelle mobile, de caméras haute définition de standard broadcast et de stations de montage numérique. S&apos;y ajoutent des systèmes d&apos;information robustes (logiciels de billetterie en temps réel, interfaces CRM, serveurs de contrôle des flux d&apos;accès) et des bases de données qualifiées regroupant des dizaines de milliers de profils de coureurs et de spectateurs. Enfin, l&apos;agence dispose d&apos;une assise financière solide et d&apos;une trésorerie éprouvée, lui permettant de fournir les cautions bancaires de plusieurs centaines de milliers d&apos;euros exigées par la NBA ou la WTA avant toute signature.
        </p>

        <p>
          Toutefois, ce sont les ressources intangibles qui fondent la supériorité compétitive de l&apos;agence. Le capital réputationnel accumulé depuis 1996 par Pascal Biojout confère à la marque un label de sérieux et de probité reconnu par l&apos;ensemble du microcosme sportif national. Ce socle est démultiplié par le capital relationnel exceptionnel de Gaëtan Muller, dont le statut de dirigeant en EuroLeague (LDLC ASVEL) ouvre des portes inaccessibles aux agences concurrentes régionales. S&apos;y ajoutent des compétences collectives tacites : un savoir-faire d&apos;orfèvre dans la gestion du stress en direct, la synchronisation millimétrée des protocoles de match et la coordination de centaines d&apos;intervenants sur le terrain.
        </p>
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
