import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage05Mergers: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 1 : Rapprochements &amp; Alliances Clés</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          1.3 La Fusion avec GM Sports Consulting (2015) et le Renouvellement du Leadership
        </h2>

        <p>
          L&apos;année 2015 marque un tournant capital dans la trajectoire de l&apos;agence avec la fusion opérée entre Sport Plus Conseil et GM Sports Consulting, fondée et dirigée par Gaëtan Muller. Ancien basketteur professionnel, figure entrepreneuriale montante du sport business français et Président délégué du club d&apos;EuroLeague LDLC ASVEL, Gaëtan Muller accède à la présidence du groupe unifié. Classé premier du palmarès Choiseul Sport &amp; Business, son arrivée dote l&apos;agence d&apos;un capital relationnel de premier ordre, décloisonnant les accès vers le monde corporate et les instances sportives internationales.
        </p>

        <p>
          Cette alliance a permis de conjuguer l&apos;expertise logistique historique forgée par Pascal Biojout avec une vision commerciale offensive axée sur le développement de partenariats premium et la monétisation des hospitalités B2B. La gouvernance bicéphale ainsi instaurée a insufflé une dynamique d&apos;expansion maîtrisée, renforçant la stature de Sport Plus Conseil en tant qu&apos;interlocuteur de confiance auprès de la Ligue Nationale de Basket et de la Fédération Française de Basket-Ball.
        </p>

        <h2 className="academic-h1">
          1.4 L&apos;Intégration de TV Sport Events (2019) et les Synergies Territoriales Récentes
        </h2>

        <p>
          Consciente que la valeur d&apos;un événement sportif contemporain réside autant dans sa diffusion médiatique que dans son déroulement physique, l&apos;agence réalise en 2019 l&apos;intégration stratégique de TV Sport Events, sous la direction de Samir Boudjemaa. Cette opération a permis d&apos;internaliser la chaîne de valeur audiovisuelle : production en direct, réalisation multicaméras haute définition, captation pour les diffuseurs officiels et habillage graphique des arénas. En s&apos;appropriant ces compétences technologiques, Sport Plus Conseil s&apos;est affranchie des surcoûts liés à la sous-traitance audiovisuelle tout en renforçant son offre de « sportainment » immersif.
        </p>

        <p>
          Cette stratégie de renforcement territorial a franchi une étape supplémentaire en 2024–2025 avec la prise de participation puis le rachat majoritaire du Rouen Hockey Élite 76 (les Dragons de Rouen), club le plus titré de l&apos;histoire de la Ligue Magnus, par Gaëtan Muller et Charles Roche. Cette opération ancre définitivement l&apos;agence dans le tissu sportif normand, créant une passerelle unique entre la gestion événementielle ponctuelle et l&apos;administration pérenne d&apos;une franchise sportive professionnelle à l&apos;année, tout en maximisant les synergies commerciales avec la Métropole de Rouen Normandie.
        </p>
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
