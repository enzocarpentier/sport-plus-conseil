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
      <div className="pb-1 mb-3 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0">
        <span className="uppercase tracking-wider">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic">Partie 2 : PESTEL — Dimensions Politique &amp; Économique</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.1 L&apos;Environnement Politique : Dynamiques Post-Paris 2024 et Commande Publique
        </h2>

        <p>
          L&apos;analyse macro-environnementale par la méthode PESTEL débute par l&apos;examen des facteurs politiques, qui exercent une influence prépondérante sur le secteur événementiel sportif français. L&apos;organisation des Jeux Olympiques et Paralympiques de Paris 2024 a insufflé un élan étatique sans précédent en faveur de la pratique sportive et de la valorisation des grands rassemblements populaires. Toutefois, dans cette phase post-olympique, les politiques publiques font face à de fortes restrictions budgétaires, obligeant l&apos;État et les collectivités territoriales à réévaluer leurs priorités d&apos;attribution de subventions.
        </p>

        <p>
          Pour Sport Plus Conseil, la dimension politique s&apos;exprime par une relation étroite avec les pouvoirs locaux, notamment la Métropole de Rouen Normandie et la Région Normandie pour le Seine-Marathon 76 et l&apos;Open de tennis. Les collectivités n&apos;agissent plus seulement comme de simples bailleurs de fonds, mais comme de véritables partenaires institutionnels exigeant des retombées mesurables en matière d&apos;animation territoriale, d&apos;inclusion sociale et de rayonnement d&apos;image. L&apos;agence doit ainsi se conformer aux règles strictes de la commande publique et aux conventions pluriannuelles d&apos;objectifs, tout en anticipant les aléas liés aux alternances électorales locales.
        </p>

        <h2 className="academic-h1">
          2.2 L&apos;Environnement Économique : Arbitrages B2B, Inflation et Risque de Change
        </h2>

        <p>
          Sur le plan économique, le marché du spectacle sportif est marqué par une polarisation des investissements publicitaires. Si les marques maintiennent des budgets conséquents pour des opérations à forte valeur ajoutée expérientielle (hospitalités VIP, loges d&apos;entreprises, opérations de relations publiques ciblées), elles rationalisent leurs dépenses de sponsoring classique. Sport Plus Conseil doit ainsi concevoir des offres d&apos;hospitalités très segmentées pour convaincre les directions générales et marketing de s&apos;engager dans la durée, notamment au All Star Game et à l&apos;Open Capfinances.
        </p>

        <p>
          Parallèlement, l&apos;environnement économique subit une inflation structurelle des coûts de production événementielle : hausse des tarifs de location des grandes salles (Accor Arena, Kindarena), renchérissement des coûts énergétiques (chauffage de la terre battue indoor), augmentation des coûts logistiques et des salaires de la sécurité privée. À cette tension s&apos;ajoute un risque financier méconnu : le risque de change monétaire Dollar américain / Euro. En effet, les contrats de production de la NBA et les dotations financières officielles du circuit WTA (Prize Money fixé contractuellement en dollars américains) exposent l&apos;agence aux fluctuations des devises, imposant une gestion financière rigoureuse de couverture de change.
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
