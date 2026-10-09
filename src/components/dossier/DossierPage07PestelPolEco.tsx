import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage07PestelPolEco: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 2 : PESTEL — Politique &amp; Économique</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.1 L&apos;Environnement Politique : Dynamiques Post-Paris 2024 et Commande Publique
        </h2>

        <p>
          L&apos;analyse macro-environnementale par la méthode PESTEL débute par l&apos;examen des facteurs politiques, qui exercent une influence prépondérante sur le secteur événementiel sportif français. L&apos;organisation des Jeux Olympiques et Paralympiques de Paris 2024 a insufflé un élan étatique en faveur de la pratique sportive et des grands rassemblements populaires. Toutefois, dans cette phase post-olympique, les politiques publiques font face à de fortes restrictions budgétaires, contraignant l&apos;État et les collectivités territoriales à réévaluer leurs priorités d&apos;attribution de subventions aux projets événementiels privés.
        </p>

        <p>
          Pour Sport Plus Conseil, la dimension politique s&apos;exprime par une relation étroite avec les pouvoirs locaux, notamment la Métropole de Rouen Normandie et la Région Normandie pour le Seine-Marathon 76 et l&apos;Open de tennis. Les collectivités agissent comme des partenaires institutionnels exigeant des retombées mesurables en animation territoriale, inclusion sociale et rayonnement d&apos;image. L&apos;agence doit se conformer aux règles strictes de la commande publique et aux conventions pluriannuelles d&apos;objectifs, tout en anticipant les aléas des alternances électorales locales.
        </p>

        <h2 className="academic-h1">
          2.2 L&apos;Environnement Économique : Arbitrages B2B, Inflation et Risque de Change
        </h2>

        <p>
          Sur le plan économique, le marché du spectacle sportif connaît une polarisation marquée des investissements publicitaires. Si les entreprises maintiennent des budgets conséquents pour des opérations d&apos;hospitalités VIP et de relations publiques à forte valeur expérientielle, elles rationalisent leurs dépenses de sponsoring classique. L&apos;agence conçoit ainsi des offres hautement segmentées pour fidéliser les décideurs économiques au All Star Game et à l&apos;Open Capfinances, sécurisant des marges unitaires substantielles indispensables à son modèle d&apos;affaires.
        </p>

        <p>
          Parallèlement, le secteur subit une inflation structurelle des coûts d&apos;exploitation : hausse des loyers des grandes enceintes (Accor Arena, Kindarena), renchérissement énergétique (chauffage de la terre battue indoor), logistique et sécurité privée agréée CNAPS. À cette tension s&apos;ajoute un risque financier méconnu : le risque de change Dollar américain / Euro. En effet, les contrats de production NBA et les dotations officielles du circuit WTA (Prize Money contractuel en dollars américains) exposent l&apos;agence aux fluctuations des devises, imposant une gestion financière rigoureuse de couverture de change à terme pour préserver ses marges d&apos;exploitation.
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
