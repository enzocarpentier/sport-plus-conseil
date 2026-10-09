import React from 'react'

interface DossierOfferPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierOfferPage: React.FC<DossierOfferPageProps> = ({
  id,
  pageNumber
}) => {
  return (
    <div
      id={id}
      className="a4-page-container bg-white text-black shadow-md relative flex flex-col justify-between select-text"
      style={{
        boxSizing: 'border-box'
      }}
    >
      {/* En-tête courant académique (10 pt) */}
      <div className="pb-1 mb-3 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0">
        <span className="uppercase tracking-wider">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic">Parties 3 &amp; 4 : SWOT &amp; Modèle d&apos;Affaires</span>
      </div>

      {/* Corps du texte aux normes : Corps 12 pt, Interligne 1,5, Justifié, Alinéa 1 cm */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          3. Diagnostic Stratégique Croisé : Analyse SWOT Globale de Sport Plus Conseil
        </h2>

        <p>
          Le diagnostic interne révèle des forces structurelles de premier ordre : Sport Plus Conseil tire son avantage d&apos;un portefeuille d&apos;événements équilibré et multi-sport (basket d&apos;élite avec la NBA et la LNB, running de masse avec le Seine-Marathon 76, tennis WTA 250, handball), limitant l&apos;exposition à la saisonnalité d&apos;une seule discipline. L&apos;intégration complète de la chaîne de valeur — de l&apos;ingénierie commerciale à la production audiovisuelle via TV Sport Events — confère à l&apos;agence une autonomie rare. De plus, la légitimité reconnue de ses dirigeants (Pascal Biojout, Gaëtan Muller, Charles Roche) constitue une barrière à l&apos;entrée solide face aux rivaux régionaux.
        </p>

        <p>
          En contrepartie, les faiblesses internes résident dans la taille réduite de son effectif permanent (10 à 19 salariés), imposant une « agilité forcée » qui engendre une surcharge opérationnelle lors des pics d&apos;activité simultanés. L&apos;agence dépend lourdement de prestataires externes et de centaines de bénévoles mobilisés sur le terrain, tandis que certains événements régionaux demeurent tributaires des subventions publiques territoriales.
        </p>

        <p>
          Sur le plan externe, les opportunités résident dans l&apos;essor massif du « sportainment », la valorisation du sport féminin et l&apos;appétence des entreprises pour les hospitalités B2B haut de gamme, sans oublier les synergies locales nouées avec des clubs majeurs (Dragons de Rouen). À l&apos;inverse, les menaces proviennent de la concurrence agressive des multinationales de l&apos;événementiel (Live Nation, Infront, IMG), de la contraction budgétaire des collectivités locales et de l&apos;inflation persistante des coûts d&apos;exploitation des grandes arénas.
        </p>

        <h2 className="academic-h1">
          4. Analyse du Modèle d&apos;Affaires et Théorie des Ressources (VRIO)
        </h2>

        <p>
          Selon Michael Porter (2001), le modèle d&apos;affaires définit la façon dont l&apos;entreprise crée et capte de la valeur économique pour générer un profit durable. En tant qu&apos;organisation sportive de niveau 2, Sport Plus Conseil articule sa proposition de valeur autour de la délivrance d&apos;événements sportifs et de contenus audiovisuels d&apos;excellence pour les ayants droit (ligues, fédérations, collectivités) et de la monétisation d&apos;espaces de communication pour les annonceurs.
        </p>

        <p>
          Sous l&apos;angle de la théorie des ressources (RBV) et de la grille VRIO de Jay Barney (1991), les atouts de Sport Plus Conseil procurent un avantage concurrentiel tangible : la réputation institutionnelle et la maîtrise technique d&apos;événements complexes constituent des ressources d&apos;une grande valeur (V) et rares (R) pour une PME indépendante. Leur inimitabilité (I) s&apos;appuie sur plus de vingt-cinq ans de relations de confiance avec la NBA, la LNB et les métropoles régionales, tandis que l&apos;organisation (O) agile et décloisonnée de la structure permet de rentabiliser efficacement ce capital relationnel.
        </p>
      </div>

      {/* Pied de page académique : Numéro de page STRICTEMENT centré */}
      <div className="pt-2 grid grid-cols-3 items-center text-[10pt] text-gray-700 border-t border-gray-400 shrink-0 mt-auto w-full">
        <span className="text-left">Université de Rouen Normandie — UFR STAPS</span>
        <span className="text-center font-mono font-medium text-[10.5pt]">{pageNumber}</span>
        <span className="text-right italic">Note collective de synthèse</span>
      </div>
    </div>
  )
}
