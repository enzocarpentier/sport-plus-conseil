import React from 'react'

interface DossierPresentationPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPresentationPage: React.FC<DossierPresentationPageProps> = ({
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
        <span className="italic">Parties 1 &amp; 2 : Présentation &amp; PESTEL</span>
      </div>

      {/* Corps du texte aux normes : Corps 12 pt, Interligne 1,5, Justifié, Alinéa 1 cm */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          1. Présentation de la Structure : Positionnement, Portefeuille Multi-Sport et Rapprochements
        </h2>

        <p>
          Fondée en 1996 par Pascal Biojout, Sport Plus Conseil est une agence pionnière de l&apos;événementiel et du marketing sportif, agissant comme une organisation sportive (OS) de niveau 2 au sens du management du sport. Constituée en Société par Actions Simplifiée (SAS), l&apos;agence s&apos;appuie sur un effectif permanent de 10 à 19 salariés répartis entre ses bureaux de Paris, Lyon, Limoges et Rouen. Cette structure de PME lui confère une grande réactivité et une agilité stratégique reconnue, tout en exigeant une polyvalence opérationnelle marquée de ses équipes lors des grands temps forts du calendrier sportif.
        </p>

        <p>
          Le développement de l&apos;agence repose sur deux rapprochements stratégiques déterminants : la fusion en 2015 avec GM Sports Consulting, dirigée par Gaëtan Muller (actuel Président du groupe), élargissant l&apos;offre commerciale et le réseau relationnel, puis l&apos;intégration en 2019 de TV Sport Events, dotant la structure d&apos;un pôle audiovisuel et d&apos;expertise média intégré. Sport Plus Conseil déploie aujourd&apos;hui un portefeuille d&apos;événements d&apos;envergure nationale et internationale : le basket-ball de très haut niveau avec les NBA Paris Games, le All Star Game LNB à l&apos;Accor Arena et la Leaders Cup, les courses de masse avec le Seine-Marathon 76 réunissant plus de 10 000 coureurs, le tennis mondial avec l&apos;Open Capfinances Rouen Métropole (WTA 250) dirigé par Charles Roche, ainsi que des opérations pour la Fédération Française de Handball et des synergies renforcées avec le club des Dragons de Rouen.
        </p>

        <h2 className="academic-h1">
          2. Analyse Macro-Environnementale : Diagnostic PESTEL de Sport Plus Conseil
        </h2>

        <p>
          L&apos;analyse PESTEL met en lumière les variables macro-environnementales qui conditionnent les activités multisports de Sport Plus Conseil. Sur le plan politique et économique, l&apos;agence évolue dans un secteur stimulé par la dynamique post-Jeux de Paris 2024, mais confronté à l&apos;inflation générale des coûts de location des arénas et de prestation technique. La dépendance aux arbitrages budgétaires des partenaires privés (sponsoring B2B) et des collectivités territoriales impose une sécurisation financière rigoureuse, accentuée par les risques de change monétaire Dollar/Euro sur les contrats et dotations internationales (NBA, WTA).
        </p>

        <p>
          Sur les plans sociologique et technologique, la demande du public s&apos;oriente vers le « sportainment » et des expériences immersives spectaculaires (All Star Game, shows NBA), conjuguée à l&apos;essor des pratiques santé et populaires (Seine-Marathon 76) et à la médiatisation du sport féminin. L&apos;intégration de TV Sport Events permet à l&apos;agence de maîtriser les standards technologiques de diffusion télévisuelle, de scoring en temps réel et de billetterie dématérialisée. Enfin, les dimensions environnementale et légale obligent à une transition écoresponsable stricte des événements (mobilité douce, zéro plastique) et au respect rigoureux des cahiers des charges des ligues mondiales (NBA, WTA), des normes ERP et du cadre RGPD.
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
