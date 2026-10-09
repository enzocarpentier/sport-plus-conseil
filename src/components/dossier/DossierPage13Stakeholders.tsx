import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage13Stakeholders: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 3 : Cartographie des Parties Prenantes</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          3.3 Fondements Théoriques de Freeman (1984) et Parties Prenantes Primaires
        </h2>

        <p>
          Développée par R. Edward Freeman (1984), la théorie des parties prenantes (<em>Stakeholder Theory</em>) postule que la performance et la légitimité d&apos;une entreprise dépendent de sa capacité à équilibrer les intérêts de l&apos;ensemble des acteurs pouvant affecter ou être affectés par son activité. Pour une OS de niveau 2 comme Sport Plus Conseil, cette cartographie constitue un outil indispensable de pilotage relationnel et de sécurisation contractuelle.
        </p>

        <p>
          Au premier rang figurent les parties prenantes primaires, analysées par Aurélien François comme de véritables <em>apporteuses de ressources</em> : les ligues délégataires (NBA, LNB, WTA) concèdent des droits d&apos;exploitation d&apos;élite ; les collectivités publiques (Métropole de Rouen, Région, Ville de Paris) apportent subventions, caution institutionnelle et arénas (Kindarena, Accor Arena) ; les partenaires privés (Capfinances, sponsors B2B) fournissent le flux de trésorerie ; et les spectateurs apportent les recettes de billetterie.
        </p>

        <h2 className="academic-h1">
          3.4 Parties Prenantes Secondaires et Régulation des Tensions d&apos;Intérêts
        </h2>

        <p>
          Les parties prenantes secondaires rassemblent les acteurs qui, sans lien contractuel direct, influencent l&apos;exploitation. La composante la plus critique est la communauté des bénévoles : sans l&apos;engagement de 800 volontaires sur le Seine-Marathon et 200 à l&apos;Open de Rouen (accueil, orientation, ramasseurs de balles), l&apos;équation économique de l&apos;agence serait intenable. S&apos;y ajoutent les services de l&apos;État (préfectures, police, SAMU), dont les autorisations conditionnent les épreuves, ainsi que les médias régionaux et les riverains.
        </p>

        <p>
          Le management consiste à concilier des attentes parfois divergentes : les collectivités exigent des tarifs populaires et des retombées inclusives, tandis que la rentabilité marchande et les sponsors réclament une montée en gamme des hospitalités VIP. Sport Plus Conseil y parvient par une segmentation tarifaire soignée, préservant des accès très accessibles pour les familles et les scolaires tout en développant des salons d&apos;affaires privatifs à haute rentabilité unitaire.
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
