import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage10PorterForces: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 2 : Analyse Interne &amp; Externe (SWOT 1/2)</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.7 Justification Épistémologique : Choix du PESTEL et du SWOT face aux Limites de Porter
        </h2>

        <p>
          L&apos;analyse stratégique de l&apos;environnement d&apos;une organisation sportive de niveau 2 requiert une vigilance méthodologique fondamentale quant au choix des cadres conceptuels mobilisés. Si le modèle des 5 forces de Michael Porter (1980) constitue une référence classique pour apprécier la dynamique concurrentielle des marchés industriels conventionnels, son application directe au cas de Sport Plus Conseil se heurte à des limites théoriques majeures soulevées par la littérature contemporaine du management du sport (Bayle, 2007 ; Desbordes, 2019).
        </p>

        <p>
          En effet, Sport Plus Conseil se caractérise par une forte intégration verticale et un modèle de co-production hybride qui estompent les frontières catégorielles étanches du schéma porterien. L&apos;agence dispose en interne de sa propre filiale de production audiovisuelle (TV Sport Events), détient en propre la majorité du capital d&apos;un club d&apos;élite (les Dragons de Rouen en Ligue Magnus) et opère comme régisseur délégué d&apos;arénas publiques. Dès lors, les acteurs de son écosystème ne se cantonnent pas à un rôle univoque : les ayants droit mondiaux (NBA, WTA, LNB) agissent simultanément comme des concédants de licences, des clients prescripteurs et des partenaires opérationnels au sein d&apos;un marché biface. Face à cet effacement des clivages entre fournisseurs, clients et concurrents, l&apos;articulation entre un diagnostic macro-environnemental PESTEL approfondi et une matrice SWOT stratégique croisée s&apos;avère scientifiquement bien plus féconde et robuste pour appréhender le positionnement de la firme.
        </p>

        <h2 className="academic-h1">
          2.8 Diagnostic Interne Détaillé : Forces Compétitives et Vulnérabilités de la PME
        </h2>

        <p>
          Le versant interne de l&apos;analyse SWOT met en lumière un socle de forces distinctives rares. La première réside dans la diversification équilibrée de son portefeuille multisport (sport-spectacle NBA, tournoi WTA 250, All Star Game LNB, running populaire du Seine-Marathon 76 et club professionnel de hockey sur glace), immunisant l&apos;entreprise contre les aléas conjoncturels d&apos;une discipline isolée. La deuxième force découle de la maîtrise complète de la chaîne de valeur événementielle, de la conception à la diffusion audiovisuelle. Enfin, le capital social et relationnel exceptionnel de ses dirigeants (Pascal Biojout, Gaëtan Muller) constitue un actif immatériel déterminant pour remporter la confiance des ligues mondiales et des décideurs économiques régionaux.
        </p>

        <p>
          À l&apos;inverse, les faiblesses organisationnelles procèdent principalement de sa structure de PME resserrée d&apos;une quinzaine de collaborateurs permanents. Cette taille humaine génère une forte intensité de charge lors des pics calendaires et implique une dépendance critique envers des prestataires techniques externalisés ainsi qu&apos;envers un vivier de centaines de bénévoles indispensables à l&apos;équilibre économique des courses sur route.
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
