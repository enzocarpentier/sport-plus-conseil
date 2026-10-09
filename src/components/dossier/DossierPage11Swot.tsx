import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage11Swot: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 2 : Diagnostic SWOT Global</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.9 Diagnostic Interne : Forces Distinctives et Vulnérabilités Organisationnelles
        </h2>

        <p>
          Le diagnostic interne de Sport Plus Conseil met en évidence des forces compétitives de premier rang. La première réside dans son portefeuille multisport équilibré (basket-ball d&apos;élite avec la NBA et la LNB, running populaire avec le Seine-Marathon 76, tennis WTA 250, handball fédéral), prémunissant l&apos;entreprise contre les aléas d&apos;une discipline unique. La deuxième force est son intégration verticale : de l&apos;ingénierie commerciale à la captation audiovisuelle via TV Sport Events, l&apos;agence maîtrise toute la chaîne de valeur. Enfin, la notoriété et le réseau d&apos;influence de ses dirigeants (Gaëtan Muller, Pascal Biojout, Charles Roche) constituent un accélérateur d&apos;affaires décisif.
        </p>

        <p>
          À l&apos;opposé, les vulnérabilités découlent de son modèle de PME. Avec 10 à 19 salariés permanents, l&apos;agence subit une tension opérationnelle intense lors de la concomitance de grands rendez-vous (All Star Game en décembre, Open de Rouen au printemps). Cette taille modeste induit une dépendance envers des prestataires techniques externalisés et un vivier de centaines de bénévoles dont la fidélisation demeure un enjeu constant. Enfin, certaines manifestations régionales restent sensibles au maintien des subventions publiques des collectivités locales.
        </p>

        <h2 className="academic-h1">
          2.10 Diagnostic Externe : Opportunités de Croissance et Menaces du Marché
        </h2>

        <p>
          Sur le versant externe, les opportunités de marché sont particulièrement attractives. L&apos;appétence des entreprises pour les hospitalités VIP offre des marges unitaires élevées sur les événements de prestige. L&apos;essor du « sportainment », la médiatisation du sport féminin et l&apos;exigence écologique constituent des leviers puissants pour séduire de nouveaux annonceurs soucieux de valoriser leur politique RSE. De surcroît, le rachat des Dragons de Rouen (RHE 76) ouvre un champ fertile de mutualisations commerciales et d&apos;abonnements croisés dans la métropole rouennaise.
        </p>

        <p>
          Cependant, les menaces environnementales imposent une vigilance managériale soutenue. La concurrence des multinationales de l&apos;événementiel (Live Nation, Infront, IMG), capables d&apos;absorber des déficits initiaux pour remporter des appels d&apos;offres, exerce une pression sur les marges de l&apos;agence. S&apos;y ajoutent le resserrement prévisible des budgets des collectivités territoriales et l&apos;inflation persistante des coûts d&apos;exploitation des grandes arénas (Accor Arena, Kindarena), de la sécurité et de l&apos;énergie, rognant la rentabilité nette des opérations.
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
