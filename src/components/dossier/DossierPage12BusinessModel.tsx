import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage12BusinessModel: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 3 : Modèle d&apos;Affaires dans les OS 2</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          3.1 Définition Conceptuelle du Business Model et Distinction avec la Stratégie
        </h2>

        <p>
          Au cœur de la théorie managériale, Michael Porter (2001) définit le modèle d&apos;affaires comme « la façon dont l&apos;entreprise génère des revenus et des profits ». Joan Magretta (2002) démontre qu&apos;un modèle d&apos;affaires valide doit surmonter deux épreuves : le <em>test narratif</em> (l&apos;histoire a-t-elle du sens pour les clients ?) et le <em>test des chiffres</em> (l&apos;équation financière dégage-t-elle des marges nettes positives ?). Cette approche est enrichie par le modèle RCOV de Xavier Lecocq, Benoît Demil et Vanessa Warnier (2006), articulant Ressources (R), Organisation (C), Offre (O) et Volume des revenus et coûts (V).
        </p>

        <p>
          Il convient de ne pas confondre modèle d&apos;affaires et stratégie, distinction centrale enseignée par Aurélien François : le modèle d&apos;affaires décrit l&apos;architecture de création et de captation de valeur interne ; la stratégie détermine les choix délibérés pour faire mieux que ses rivaux et instaurer un avantage concurrentiel défendable. Le modèle d&apos;affaires constitue ainsi la traduction opérationnelle des arbitrages stratégiques formulés par les dirigeants de l&apos;agence.
        </p>

        <h2 className="academic-h1">
          3.2 La Spécificité des Organisations Sportives de Niveau 2 (OS 2)
        </h2>

        <p>
          L&apos;application du modèle d&apos;affaires au sport spectacle impose de dissocier les organisations de niveau 1 de celles de niveau 2. Les OS de niveau 1 — fédérations internationales (CIO, FIFA), ligues et clubs — poursuivent une finalité sportive d&apos;intérêt général. Pour elles, générer des profits ne va pas de soi : la priorité réside dans l&apos;utilité sociale et l&apos;équilibre compétitif, la rentabilité n&apos;étant qu&apos;un moyen au service du jeu.
        </p>

        <p>
          À l&apos;inverse, Sport Plus Conseil se positionne clairement comme une organisation sportive de niveau 2 (OS 2). En tant qu&apos;agence privée et gestionnaire d&apos;événements, la captation de valeur marchande et la rentabilité financière sont des conditions de survie impérieuses. L&apos;agence engage ses capitaux propres, supporte le risque de billetterie et de régie publicitaire, et doit dégager une marge brute suffisante pour rémunérer ses salariés permanents, financer TV Sport Events et absorber les aléas du spectacle vivant.
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
