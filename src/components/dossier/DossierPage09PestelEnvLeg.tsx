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
      <div className="page-header pb-1 mb-3 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0 w-full overflow-hidden">
        <span className="uppercase tracking-wide whitespace-nowrap shrink-0">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic whitespace-nowrap shrink-0">Partie 2 : PESTEL — Écologique &amp; Légale</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.5 L&apos;Environnement Écologique : Éco-Responsabilité et Décarbonation des Événements
        </h2>

        <p>
          La dimension environnementale constitue aujourd&apos;hui un impératif stratégique majeur. Sous l&apos;impulsion de l&apos;Agenda Olympique 2020+5 du CIO et des cadres de responsabilité sociétale (Jurisport n° 117), Sport Plus Conseil intègre la sobriété écologique et les principes de la norme ISO 26000 au cœur de son ingénierie. L&apos;empreinte carbone d&apos;une compétition sportive provenant essentiellement des transports, l&apos;agence noue des partenariats avec les réseaux urbains (gratuité du réseau Astuce pour les coureurs du Seine-Marathon 76) et incite aux mobilités douces.
        </p>

        <p>
          Sur le plan de l&apos;économie circulaire, l&apos;agence a banni le plastique à usage unique sur ses ravitaillements de masse, remplaçant les bouteilles jetables par des rampes d&apos;eau courante et des gobelets réutilisables consignés. La valorisation des biodéchets des salons VIP fait l&apos;objet de conventions avec des associations locales de redistribution et de compostage. Cette éco-conception proactive est devenue un critère éliminatoire lors des appels d&apos;offres des métropoles et un argument de vente décisif auprès des sponsors soucieux de leurs indicateurs RSE.
        </p>

        <h2 className="academic-h1">
          2.6 L&apos;Environnement Légal : Normes ERP, Sécurité Publique et Cahiers des Charges
        </h2>

        <p>
          Le cadre juridique régissant l&apos;événementiel sportif en France figure parmi les plus stricts au monde. L&apos;exploitation d&apos;arénas fermées (Accor Arena, Kindarena) impose le respect des normes des Établissements Recevant du Public (ERP) de 1ère catégorie : commissions de sécurité, dimensionnement des issues de secours, désenfumage et accessibilité PMR. L&apos;agence doit en outre articuler ses dispositifs avec le niveau Urgence Attentat de Vigipirate, mobilisant des agents cynophiles et de sécurité agréés CNAPS, tout en coordonnant les postes médicaux avec le SAMU et la Croix-Rouge.
        </p>

        <p>
          Au-delà du droit public, l&apos;agence se conforme aux cahiers des charges rigoureux des ligues délégataires (NBA, WTA) : droits à l&apos;image des athlètes, protection contre l&apos;<em>ambush marketing</em> dans les périmètres d&apos;exclusion commerciale et normes d&apos;éclairage TV. Enfin, la gestion des billetteries et listes d&apos;invités d&apos;affaires impose une stricte conformité au RGPD, écartant tout risque de contentieux ou d&apos;atteinte réputationnelle.
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
