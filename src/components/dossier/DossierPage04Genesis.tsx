import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage04Genesis: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 1 : Genèse &amp; Identité de la Structure</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          1.1 Genèse Historique et Statut Juridique d&apos;Organisation Sportive de Niveau 2
        </h2>

        <p>
          Fondée en 1996 sous l&apos;impulsion de Pascal Biojout, Sport Plus Conseil s&apos;est constituée avec l&apos;ambition de combler le déficit de professionnalisme dans la commercialisation et l&apos;exploitation opérationnelle des spectacles sportifs en France. Évoluant sous la forme d&apos;une Société par Actions Simplifiée (SAS), l&apos;agence incarne de manière archétypale le concept d&apos;organisation sportive de niveau 2 développé dans la littérature académique du management du sport : elle ne produit pas directement la performance athlétique mais structure les conditions logistiques, marchandes et médiatiques nécessaires à sa valorisation.
        </p>

        <p>
          Depuis près de trois décennies, l&apos;entreprise a traversé les mutations successives du spectacle sportif hexagonal, passant de simples prestations d&apos;animation à l&apos;ingénierie globale de méga-événements. Sa culture d&apos;entreprise, marquée par l&apos;amour du jeu et une exigence maniaque du détail sur le terrain, puise ses racines dans le parcours de ses fondateurs, pour qui chaque rendez-vous sportif constitue une œuvre éphémère devant concilier émotions collectives et rigueur protocolaire.
        </p>

        <h2 className="academic-h1">
          1.2 Modèle PME, Flexibilité Opérationnelle et Maillage Territorial
        </h2>

        <p>
          Contrairement aux conglomérats multinationaux cotés en bourse, Sport Plus Conseil a préservé un modèle d&apos;affaires à dimension humaine, s&apos;appuyant sur un effectif stable de 10 à 19 salariés permanents. Cette structure légère confère à l&apos;organisation une agilité stratégique décisive : les circuits de validation hiérarchique y sont courts, favorisant une réactivité immédiate face aux aléas de terrain ou aux requêtes urgentes des ayants droit. En contrepartie, ce dimensionnement impose une forte polyvalence interne, chaque collaborateur occupant des responsabilités croisées allant de la négociation commerciale à la coordination des flux de sécurité.
        </p>

        <p>
          Afin de concilier la proximité avec les grands centres décisionnels et l&apos;ancrage au sein des bassins de population régionaux, l&apos;agence a déployé son activité à travers quatre bureaux stratégiques : Paris (siège social et interface avec les fédérations internationales, les ligues et les diffuseurs télévisuels), Lyon (pôle commercial et événementiel au cœur de la région Auvergne-Rhône-Alpes), Limoges (bastion historique lié aux racines du basket français) et Rouen (pôle normand dédié à l&apos;organisation de l&apos;Open de tennis WTA et du Seine-Marathon). Cette présence multipolaire garantit une immersion intime dans les écosystèmes institutionnels locaux tout en maintenant une surface de contact nationale.
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
