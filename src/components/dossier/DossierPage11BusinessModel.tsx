import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage11BusinessModel: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 3 : Modèle d&apos;Affaires dans les OS 2</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          3.1 Définition Conceptuelle du Business Model et Distinction avec la Stratégie
        </h2>

        <p>
          Au cœur de la théorie managériale, Michael Porter (2001) définit le modèle d&apos;affaires comme « une façon d&apos;expliquer comment l&apos;entreprise génère des revenus et des profits ». Dans un article de référence (<em>Why Business Models Matter</em>, 2002), Joan Magretta démontre qu&apos;un modèle d&apos;affaires valide doit surmonter deux épreuves : le <em>test narratif</em> (l&apos;histoire racontée aux clients a-t-elle du sens ?) et le <em>test des chiffres</em> (l&apos;équation financière dégage-t-elle des marges nettes positives ?). Cette approche est complétée par le modèle RCOV de Xavier Lecocq, Benoît Demil et Vanessa Warnier (2006), articulant Ressources et compétences (R), Organisation et coordination (C), Offre (O) et Volume des revenus et coûts (V).
        </p>

        <p>
          Il convient de ne pas commettre l&apos;erreur épistémologique de confondre le modèle d&apos;affaires avec la stratégie, distinction centrale du cours d&apos;Aurélien François : le modèle d&apos;affaires ne se focalise pas directement sur la concurrence, mais décrit l&apos;architecture de création et de captation de valeur interne ; la stratégie, quant à elle, détermine les choix directeurs délibérés pour faire mieux que ses rivaux et instaurer un avantage concurrentiel défendable. Le modèle d&apos;affaires constitue ainsi la traduction opérationnelle et financière des arbitrages stratégiques formulés par les dirigeants de l&apos;agence.
        </p>

        <h2 className="academic-h1">
          3.2 La Spécificité des Organisations Sportives de Niveau 2 (OS 2)
        </h2>

        <p>
          L&apos;application du modèle d&apos;affaires au sport spectacle impose de dissocier les organisations sportives de niveau 1 des organisations de niveau 2. Les OS de niveau 1 — comprenant les fédérations internationales (CIO, FIFA), les ligues professionnelles et les clubs sportifs — poursuivent historiquement une finalité associative ou sportive d&apos;intérêt général. Pour ces institutions, générer des profits ne va pas de soi : la priorité réside dans l&apos;utilité sociale, le rayonnement de la discipline et l&apos;équilibre compétitif, la recherche d&apos;excédents financiers n&apos;étant qu&apos;un moyen au service du projet sportif.
        </p>

        <p>
          À l&apos;inverse, Sport Plus Conseil se positionne de manière indiscutable comme une organisation sportive de niveau 2 (OS 2). En tant qu&apos;agence commerciale privée, gestionnaire d&apos;événements et prestataire de conseil, la captation de valeur économique marchande et la rentabilité financière sont des conditions de survie impérieuses. L&apos;agence engage ses capitaux propres, supporte le risque entrepreneurial de billetterie et de commercialisation publicitaire, et doit impérativement dégager une marge brute suffisante pour rémunérer ses salariés permanents, financer ses investissements technologiques (TV Sport Events) et absorber les aléas inhérents au spectacle vivant.
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
