import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage16SportStrategy: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 4 : Stratégie Sportive de l&apos;Agence</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          4.1 Opérateur d&apos;Élite pour Ayants Droit Mondiaux et Ingénierie de la Performance
        </h2>

        <p>
          L&apos;analyse des stratégies délibérées de Sport Plus Conseil débute par sa stratégie sportive. Contrairement à une idée reçue réduisant l&apos;agence d&apos;événementiel à un simple distributeur de billets ou animateur commercial, le positionnement de l&apos;entreprise repose sur une expertise pointue des conditions de la haute performance athlétique. L&apos;agence se positionne comme l&apos;opérateur technique de confiance des ligues les plus exigeantes de la planète, capable de garantir l&apos;intégrité physique des athlètes et l&apos;équité absolue des compétitions.
        </p>

        <p>
          Cette exigence sportive s&apos;illustre par des réalisations techniques remarquables : à l&apos;Open de Rouen, l&apos;agence relève chaque année le défi logistique d&apos;installer et de stabiliser en quelques jours une terre battue indoor chauffée aux normes internationales de la WTA au sein du Kindarena. Pour les NBA Paris Games et le All Star Game à l&apos;Accor Arena, elle supervise la pose de parquets en bois franc amortissants certifiés par la NBA et la FIBA. Sur le plan de l&apos;accueil, Sport Plus Conseil gère une chaîne logistique haut de gamme dédiée aux stars mondiales (hôtellerie cinq étoiles, régimes nutritionnels individualisés, navettes blindées sous escorte, conciergerie privée, espaces de récupération cryothérapeutique), instaurant un climat de confiance réciproque avec les joueuses WTA et les franchises NBA.
        </p>

        <h2 className="academic-h1">
          4.2 La Passerelle Club : L&apos;Intégration des Dragons de Rouen (RHE 76)
        </h2>

        <p>
          La stratégie sportive de l&apos;agence a franchi un palier décisif à travers l&apos;entrée au capital puis le rachat majoritaire du Rouen Hockey Élite 76 (les Dragons de Rouen) par Gaëtan Muller et Charles Roche en 2024–2025. Cette opération matérialise une stratégie d&apos;hybridation inédite entre l&apos;activité d&apos;organisateur d&apos;événements ponctuels et la gestion quotidienne d&apos;un club professionnel d&apos;élite évoluant au sommet du hockey français et européen (Champions Hockey League).
        </p>

        <p>
          Cette convergence stratégique génère de puissantes fertilisations croisées : les compétences de Sport Plus Conseil en matière de « sportainment », de scénographie lumineuse et de captation vidéo (TV Sport Events) sont injectées dans les matchs réguliers à la patinoire de l&apos;Île Lacroix, transformant chaque rencontre de Ligue Magnus en un show événementiel attractif. Réciproquement, le club apporte à l&apos;agence un ancrage communautaire permanent et une base de supporters fidélisés toute l&apos;année, permettant de tester de nouvelles activations commerciales et de consolider le statut de référence sportive du groupe auprès des pouvoirs publics normands.
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
