import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage09PestelEnvLeg: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 2 : PESTEL — Dimensions Écologique &amp; Légale</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.5 L&apos;Environnement Écologique : Éco-Responsabilité et Décarbonation des Événements
        </h2>

        <p>
          La dimension environnementale constitue aujourd&apos;hui un impératif stratégique incontournable pour les opérateurs événementiels. Sous l&apos;impulsion des recommandations de l&apos;Agenda Olympique 2020+5 du CIO et des cadres d&apos;analyse de la responsabilité sociétale (Jurisport n° 117), Sport Plus Conseil intègre la sobriété écologique et les principes de la norme ISO 26000 au cœur de sa conception opérationnelle. L&apos;empreinte carbone d&apos;une compétition sportive provient majoritairement des mobilités : l&apos;agence déploie des partenariats avec les réseaux de transport urbain (gratuité du réseau Astuce pour les inscrits du Seine-Marathon 76) et incite activement aux mobilités douces.
        </p>

        <p>
          Sur le plan de l&apos;économie circulaire, l&apos;agence a banni l&apos;usage des plastiques à usage unique sur ses ravitaillements de masse, remplaçant les bouteilles jetables par des rampes d&apos;eau courante, des gobelets réutilisables consignés et des contenants biodégradables. La gestion des biodéchets alimentaires générés dans les espaces d&apos;hospitalités VIP fait l&apos;objet de conventions avec des associations caritatives de redistribution et de compostage local. Cette démarche proactive d&apos;éco-conception est devenue un critère éliminatoire lors des consultations lancées par les métropoles et un argument de vente clé auprès des sponsors soucieux de leurs rapports extra-financiers RSE.
        </p>

        <h2 className="academic-h1">
          2.6 L&apos;Environnement Légal : Normes ERP, Sécurité Publique et Cahiers des Charges
        </h2>

        <p>
          Le cadre juridique régissant l&apos;organisation d&apos;événements sportifs en France figure parmi les plus exigeants au monde. L&apos;exploitation d&apos;arénas fermées telles que l&apos;Accor Arena ou le Kindarena impose le respect méticuleux des normes relatives aux Établissements Recevant du Public (ERP) de première catégorie : commission de sécurité préfectorale, dimensionnement des issues de secours, désenfumage et accessibilité des personnes à mobilité réduite (PMR). L&apos;agence doit en outre articuler ses dispositifs de sûreté avec le niveau d&apos;alerte Urgence Attentat du plan Vigipirate, mobilisant des sociétés de sécurité privée agréées par le CNAPS et coordonnant les postes médicaux avancés avec le SAMU et la Croix-Rouge.
        </p>

        <p>
          Au-delà du droit public national, Sport Plus Conseil est soumise aux règles contractuelles privées drastiques des ligues délégataires. Les cahiers des charges de la NBA et du circuit WTA imposent des protocoles juridiques extrêmement volumineux couvrant les droits d&apos;image des athlètes, l&apos;exclusion d&apos;ambush marketing dans les zones d&apos;exclusion commerciale, les normes d&apos;éclairage TV et la neutralité des aires de jeu. Enfin, l&apos;exploitation des bases de données de billetterie et des listes d&apos;invités d&apos;affaires requiert une conformité sans faille au Règlement Général sur la Protection des Données (RGPD), prévenant tout risque de contentieux juridique ou d&apos;atteinte à l&apos;image de l&apos;agence.
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
