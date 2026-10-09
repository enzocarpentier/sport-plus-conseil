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
          Développée par R. Edward Freeman dans son ouvrage séminal de 1984, la théorie des parties prenantes (<em>Stakeholder Theory</em>) postule que la performance et la légitimité d&apos;une entreprise dépendent de sa capacité à équilibrer les intérêts de l&apos;ensemble des acteurs « pouvant affecter ou être affectés par la réalisation des objectifs de l&apos;organisation ». Dans le cadre d&apos;une OS de niveau 2 opérant dans l&apos;événementiel comme Sport Plus Conseil, cette cartographie constitue un outil indispensable de pilotage relationnel et de sécurisation contractuelle.
        </p>

        <p>
          Au premier rang figurent les parties prenantes primaires, analysées dans le cours d&apos;Aurélien François comme de véritables <em>apporteuses de ressources</em> indispensables : les ligues délégataires (NBA, LNB, WTA) concèdent des droits d&apos;exploitation d&apos;élite ; les collectivités publiques (Métropole de Rouen, Région, Ville de Paris) apportent subventions territoriales, caution institutionnelle et mise à disposition d&apos;arénas (Kindarena, Accor Arena) ; les partenaires privés (Capfinances, sponsors B2B) fournissent le flux de trésorerie marchande ; et les spectateurs et coureurs finaux apportent les recettes directes de billetterie.
        </p>

        <h2 className="academic-h1">
          3.4 Parties Prenantes Secondaires et Régulation des Tensions d&apos;Intérêts
        </h2>

        <p>
          Les parties prenantes secondaires rassemblent les acteurs qui, sans lien contractuel marchand direct, exercent une influence déterminante sur le climat d&apos;exploitation de l&apos;événement. La composante la plus critique est constituée par la communauté des bénévoles : sans l&apos;engagement désintéressé de plus de 800 volontaires sur le Seine-Marathon et de 200 à l&apos;Open de Rouen pour l&apos;accueil, l&apos;orientation, les ramasseurs de balles et le contrôle, l&apos;équation économique de l&apos;agence deviendrait intenable. S&apos;y ajoutent les services de l&apos;État (préfectures, forces de police, SAMU), dont les autorisations conditionnent l&apos;ouverture des épreuves, ainsi que les médias régionaux et les riverains impactés par les fermetures de voirie.
        </p>

        <p>
          L&apos;exercice du management consiste dès lors à concilier des attentes souvent antagonistes : les collectivités publiques exigent des tarifs populaires accessibles à toutes les bourses et des retombées sociales inclusives, tandis que la rentabilité de l&apos;agence et les attentes des sponsors imposent une montée en gamme des prestations d&apos;hospitalités et des prix de billetterie ciblés. Sport Plus Conseil y parvient par une segmentation tarifaire soignée, maintenant des accès gratuits ou très accessibles pour les familles et les scolaires tout en développant des salons d&apos;affaires privatifs à haute rentabilité unitaire.
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
