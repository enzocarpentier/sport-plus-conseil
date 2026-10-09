import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage18TerritorialStrategy: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 4 : Stratégie Territoriale</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          4.5 Le Grand Événement comme Levier d&apos;Attractivité et de Marketing Territorial
        </h2>

        <p>
          La stratégie de Sport Plus Conseil s&apos;articule étroitement avec les politiques d&apos;attractivité des collectivités territoriales. Dans le management public contemporain, les métropoles régionales mobilisent les grands événements sportifs comme des instruments privilégiés de marketing territorial, visant à accroître leur notoriété, dynamiser leur fierté locale et attirer des flux touristiques et économiques extérieurs. L&apos;agence s&apos;est positionnée comme l&apos;opérateur de référence capable de traduire ces ambitions politiques en succès d&apos;organisation concrets.
        </p>

        <p>
          L&apos;ancrage de l&apos;Open Capfinances Rouen Métropole au sein du Kindarena illustre parfaitement cette symbiose. Diffusé dans plus de 130 pays à travers le réseau mondial des diffuseurs de la WTA, le tournoi confère à la Métropole de Rouen Normandie une visibilité médiatique internationale exceptionnelle, associant le nom de la ville à des championnes de stature planétaire. De même, le tracé du Seine-Marathon 76, serpentant le long des quais de Seine et devant les monuments historiques de la ville aux cent clochers, offre une carte postale sportive mettant en valeur le patrimoine architectural et les aménagements urbains récents.
        </p>

        <h2 className="academic-h1">
          4.6 Retombées Économiques Locales et Partenariats Public-Privé Vertueux
        </h2>

        <p>
          Au-delà de l&apos;image institutionnelle, les événements pilotés par Sport Plus Conseil injectent des retombées économiques directes massives dans le tissu économique normand. Durant la semaine de l&apos;Open de tennis et le week-end du Seine-Marathon, le taux d&apos;occupation des établissements hôteliers de l&apos;agglomération rouennaise dépasse les 90 %, alimenté par l&apos;hébergement des joueuses, des arbitres, des délégations officielles, des journalistes et de milliers de coureurs venus de toute la France et d&apos;Europe. La restauration de centre-ville, les commerces de détail et les transports urbains bénéficient directement de cette manne de consommation non délocalisable.
        </p>

        <p>
          Cette valeur créée fonde la légitimité d&apos;un partenariat public-privé équilibré. L&apos;agence ne se positionne pas comme un demandeur de subsides, mais comme un coproducteur d&apos;intérêt général optimisant l&apos;exploitation d&apos;équipements publics majeurs. En exploitant pleinement le Kindarena pour le tennis d&apos;élite ou la patinoire de l&apos;Île Lacroix pour le hockey sur glace, Sport Plus Conseil permet à la Métropole de rentabiliser socialement et médiatiquement ses investissements dans les grandes arénas sportives, créant un alignement d&apos;intérêts pérenne entre l&apos;opérateur privé et les élus du territoire.
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
