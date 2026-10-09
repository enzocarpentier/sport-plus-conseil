import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage20ProspectiveMintzberg: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 5 : Prospective &amp; Fable de Mintzberg</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          5.1 Tendances Prospectives du Secteur : Hybridation Digitale et Défis Climatiques
        </h2>

        <p>
          En guise d&apos;analyse prospective valant conclusion, le marché de l&apos;ingénierie événementielle sportive s&apos;apprête à vivre des mutations structurelles majeures d&apos;ici 2030. La première tendance réside dans l&apos;hybridation de la « fan experience ». Le spectacle ne débutera plus à l&apos;entrée de l&apos;arène pour s&apos;achever au coup de sifflet final : il s&apos;inscrira dans un continuum numérique interactif avant, pendant et après la compétition. Grâce aux capacités de production de TV Sport Events, Sport Plus Conseil est idéalement positionnée pour monétiser des flux d&apos;immersion en coulisses (<em>inside access</em>), des retransmissions augmentées sur second écran et des formats courts viraux captant les jeunes générations.
        </p>

        <p>
          Parallèlement, la décarbonation totale constituera le défi existentiel de la prochaine décennie. L&apos;éco-conditionnalité des aides publiques et des contrats de sponsoring imposera aux organisateurs de mesurer et de compenser l&apos;intégralité des scopes 1, 2 et 3 de leur bilan carbone. L&apos;agence devra accentuer la logistique verte du Seine-Marathon et optimiser la performance énergétique des installations temporaires au Kindarena et à l&apos;Accor Arena pour préserver sa légitimité auprès des collectivités.
        </p>

        <h2 className="academic-h1">
          5.2 La Fable de Mintzberg et la Vision Stratégique Holistique de l&apos;Organisation
        </h2>

        <p>
          Cette étude stratégique trouve son accomplissement théorique à travers la célèbre parabole des aveugles et de l&apos;éléphant, formalisée par Henry Mintzberg, Bruce Ahlstrand et Joseph Lampel (2009) dans <em>Safari en pays stratégie</em>. Dans cette fable indienne, plusieurs sages aveugles palpent un éléphant pour le décrire : celui qui touche la patte l&apos;assimile à un tronc d&apos;arbre, celui qui palpe la trompe y voit un serpent, et celui qui saisit la queue le compare à une corde. Chacun énonce une vérité parcellaire mais commet une erreur épistémologique fatale en ignorant la réalité organique de l&apos;animal dans sa totalité.
        </p>

        <p>
          Transposée au management d&apos;une organisation sportive de niveau 2, cette métaphore illustre parfaitement le piège du réductionnisme managérial. Réduire Sport Plus Conseil à sa seule machinerie logistique de terrain, à son bilan comptable d&apos;hospitalités B2B ou à son image de marque médiatique reviendrait à méconnaître l&apos;essence même de son modèle d&apos;affaires. Sa réussite exceptionnelle depuis 1996 et sa pérennité future résident précisément dans sa capacité à faire dialoguer l&apos;ensemble de ces composantes : une agilité de PME, une maîtrise technique de standard mondial, un modèle marchand autonome, un ancrage territorial normand sincère et un engagement citoyen assumé. C&apos;est cette vision holistique et intégrée qui assure à l&apos;agence un avantage concurrentiel durable au sommet du sport spectacle.
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
