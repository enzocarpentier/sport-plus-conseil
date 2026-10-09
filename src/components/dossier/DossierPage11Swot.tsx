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
          Le diagnostic interne de Sport Plus Conseil met en évidence des forces compétitives de premier rang. La première réside dans son portefeuille d&apos;actifs équilibré et multisport (basket-ball d&apos;élite avec la NBA et la LNB, running populaire avec le Seine-Marathon 76, tennis professionnel WTA 250, handball fédéral), prémunissant l&apos;entreprise contre les aléas sectoriels ou la désaffection d&apos;une discipline unique. La deuxième force est son intégration verticale complète : de l&apos;ingénierie commerciale à la production audiovisuelle via TV Sport Events, l&apos;agence maîtrise toute la chaîne de valeur du spectacle sportif. Enfin, la notoriété et le réseau d&apos;influence de ses dirigeants (Gaëtan Muller, Pascal Biojout, Charles Roche) constituent un accélérateur d&apos;affaires décisif.
        </p>

        <p>
          À l&apos;opposé, les vulnérabilités internes découlent directement de son modèle de PME. Avec un effectif permanent de 10 à 19 salariés, l&apos;agence subit une tension humaine intense lors de la concomitance de grands rendez-vous dans le calendrier (par exemple le All Star Game en décembre ou l&apos;Open de Rouen au printemps). Cette taille critique modeste génère une forte dépendance envers des prestataires techniques externalisés et un réseau de centaines de bénévoles non rémunérés, dont la fidélisation demeure un enjeu constant. Enfin, certaines manifestations régionales conservent une dépendance marquée envers le maintien des subventions publiques des collectivités locales.
        </p>

        <h2 className="academic-h1">
          2.10 Diagnostic Externe : Opportunités de Croissance et Menaces du Marché
        </h2>

        <p>
          Sur le versant externe, les opportunités de marché sont particulièrement porteuses. L&apos;appétence des entreprises pour les hospitalités d&apos;affaires et les espaces VIP offre des marges unitaires très attractives pour les événements à fort prestige. L&apos;essor continu du « sportainment », la médiatisation croissante du sport féminin professionnel et la sensibilité sociétale pour la responsabilité écologique constituent des leviers puissants pour capter de nouveaux budgets d&apos;annonceurs soucieux de valoriser leur politique RSE. De surcroît, le rachat du Rouen Hockey Élite 76 (les Dragons de Rouen) ouvre un champ fertile de mutualisations commerciales et d&apos;abonnements croisés au sein de la métropole rouennaise.
        </p>

        <p>
          Cependant, les menaces environnementales exigent une vigilance managériale permanente. La concurrence exercée par les multinationales de l&apos;événementiel (Live Nation, Infront, IMG), capables d&apos;absorber des déficits initiaux pour remporter des appels d&apos;offres d&apos;ayants droit, exerce une pression baissière sur les marges de l&apos;agence. S&apos;y ajoutent le resserrement prévisible des budgets des collectivités territoriales dans un contexte de désendettement public, ainsi que l&apos;inflation persistante des coûts d&apos;exploitation des grandes enceintes (Accor Arena, Kindarena), de la sécurité et des dépenses énergétiques, rognant la rentabilité nette des opérations.
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
