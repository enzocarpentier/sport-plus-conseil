import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage02Intro: React.FC<DossierPageProps> = ({
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
        <span className="italic">Sommaire Général &amp; Introduction</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">Sommaire Général du Dossier</h2>

        <p>
          Le présent dossier académique s&apos;articule autour de six parties analytiques fondamentales : la <em>Partie 1</em> (pages 3 à 5) expose la présentation institutionnelle de Sport Plus Conseil, son historique depuis 1996, ses fusions stratégiques et son portefeuille multisport ; la <em>Partie 2</em> (pages 6 à 10) déploie un diagnostic approfondi de l&apos;environnement à travers le modèle PESTEL, l&apos;analyse concurrentielle des cinq forces de Michael Porter et la matrice SWOT croisée ; la <em>Partie 3</em> (pages 11 à 14) formalise l&apos;analyse du modèle d&apos;affaires en mobilisant la théorie des parties prenantes de Freeman, la théorie des ressources (RBV) et le modèle VRIO de Barney ; la <em>Partie 4</em> (pages 15 à 18) décrypte les dynamiques stratégiques sportive, commerciale, territoriale et sociétale à l&apos;œuvre ; la <em>Partie 5</em> (page 19) propose une analyse prospective valant conclusion sous le prisme de la fable de Mintzberg ; enfin, la <em>Partie 6</em> (page 20) recense les sources et la bibliographie académique de référence.
        </p>

        <h2 className="academic-h1">Introduction Générale et Problématique</h2>

        <p>
          Dans le champ du management du sport, l&apos;analyse des organisations sportives requiert une distinction conceptuelle rigoureuse entre les structures institutionnelles de régulation et de compétition directe, désignées comme les organisations sportives de niveau 1 (fédérations internationales et nationales, ligues professionnelles, clubs sportifs), et les acteurs marchands prestataires de services, qualifiés d&apos;organisations sportives de niveau 2. Ces dernières, au sein desquelles s&apos;inscrivent les agences de conseil, les régies commerciales et les opérateurs d&apos;ingénierie événementielle, exercent une fonction névralgique d&apos;intermédiation et de captation de valeur au cœur du spectacle sportif contemporain.
        </p>

        <p>
          Au sein du paysage événementiel français, Sport Plus Conseil offre un cas d&apos;étude particulièrement stimulant. Fondée en 1996 et demeurée une PME indépendante d&apos;une quinzaine de collaborateurs permanents, la structure s&apos;est imposée comme le partenaire opérationnel privilégié d&apos;ayants droit mondiaux aussi exigeants que la NBA pour ses matchs parisiens ou la Ligue Nationale de Basket pour le All Star Game, tout en développant des propriétés régionales majeures telles que l&apos;Open Capfinances Rouen Métropole (WTA 250) et le Seine-Marathon 76. La problématique centrale de ce dossier consiste dès lors à comprendre comment une organisation sportive de niveau 2 à taille humaine parvient à sécuriser un avantage concurrentiel soutenable face aux géants mondiaux du divertissement, en articulant excellence opérationnelle, maillage territorial de proximité et rentabilité de son modèle d&apos;affaires.
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
