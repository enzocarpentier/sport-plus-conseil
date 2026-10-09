import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage06Portfolio: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 1 : Portefeuille Multisport d&apos;Événements</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          1.5 Le Basket-Ball d&apos;Élite : Du Sommet Américain de la NBA aux Bastions Nationaux
        </h2>

        <p>
          Le portefeuille d&apos;activités de Sport Plus Conseil se caractérise par une forte diversité disciplinaire, structurée autour de piliers emblématiques. Le premier de ces piliers est le basket-ball de très haut niveau, discipline dans laquelle l&apos;agence dispose d&apos;une légitimité historique inégalée. Sur le plan international, Sport Plus Conseil opère la logistique et l&apos;encadrement protocolaire des NBA Paris Games à l&apos;Accor Arena, match officiel de saison régulière nord-américaine exigeant le strict respect des standards nord-américains les plus stricts en matière de sécurité, de parquet démontable, d&apos;accueil des franchises et d&apos;hospitalités corporate de prestige.
        </p>

        <p>
          À l&apos;échelle nationale, l&apos;agence produit le All Star Game de la Ligue Nationale de Basket, rassemblant annuellement plus de 15 000 spectateurs à guichets fermés au sein de l&apos;Accor Arena. Cet événement référence du sportainment français associe concours de dunks, shows pyrotechniques et match des étoiles. Sport Plus Conseil pilote également la Leaders Cup LNB, tournoi de mi-saison réunissant le top 8 de Betclic Élite, ainsi que diverses étapes du circuit FIBA 3x3, démontrant sa capacité à couvrir les déclinaisons académiques et urbaines du basket contemporain.
        </p>

        <h2 className="academic-h1">
          1.6 Le Running Populaire de Masse et le Tennis International Féminin
        </h2>

        <p>
          Le deuxième pilier repose sur la course à pied grand public à travers l&apos;organisation du Seine-Marathon 76. Rassemblant plus de 10 000 participants à travers cinq épreuves (marathon individuel et relais, semi-marathon, 10 km, 5 km et courses enfants), cet événement populaire de masse co-organisé avec la Métropole de Rouen Normandie et le Département de la Seine-Maritime témoigne d&apos;une maîtrise logistique complexe : gestion des flux sur voie publique, sécurisation préfectorale, ravitaillements éco-conçus et mobilisation de plus de 800 bénévoles.
        </p>

        <p>
          Enfin, le troisième pilier s&apos;incarne dans le tennis professionnel avec l&apos;Open Capfinances Rouen Métropole. Créé en 2022 sous pavillon WTA 125 et promu dès 2024 au rang de tournoi WTA 250, l&apos;événement dirigé par Charles Roche s&apos;est imposé comme le seul tournoi mondial sur terre battue indoor en France, servant de préparation officielle pour Roland-Garros. Distingué comme Meilleur Tournoi International Féminin Français 2025, il a attiré des têtes d&apos;affiche de calibre mondial (Sloane Stephens victorieuse en 2024, Elina Svitolina en 2025). Ce portefeuille est complété par des missions pour la Fédération Française de Handball (FFHB), attestant d&apos;un savoir-faire multisport transversal.
        </p>
      </div>

      {/* Pied de page académique centré */}
      <div className="pt-2 flex items-center justify-between text-[10pt] text-gray-700 border-t border-gray-400 shrink-0 mt-auto w-full relative">
        <span className="text-left whitespace-nowrap">Université de Rouen Normandie — UFR STAPS</span>
        <span className="absolute left-1/2 -translate-x-1/2 font-mono font-medium text-[10.5pt]">{pageNumber}</span>
        <span className="text-right italic whitespace-nowrap">Note collective de synthèse</span>
      </div>
    </div>
  )
}
