import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage04Intro: React.FC<DossierPageProps> = ({
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
        <span className="italic">Introduction Générale &amp; Problématique</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          Introduction Générale et Problématique Stratégique
        </h2>

        <p>
          Comme le formalisent Éric Barget et Patrick Vailleau (2008), le management stratégique d&apos;une organisation sportive répond à une triple exigence fondamentale : fixer une trajectoire claire en arbitrant entre opportunités environnementales et contraintes internes, concentrer l&apos;effort et les ressources rares au sein du collectif, et définir avec précision l&apos;identité et la raison d&apos;être de la structure face à ses parties prenantes. Dans un secteur du sport spectacle caractérisé par une médiatisation planétaire et une incertitude compétitive structurelle, la formulation d&apos;une stratégie cohérente constitue le garant indispensable de la pérennité organisationnelle.
        </p>

        <p>
          Au sein de cet écosystème, la typologie des organisations sportives établie par Emmanuel Bayle (2007) et enseignée par Aurélien François offre une grille d&apos;analyse particulièrement féconde en distinguant quatre niveaux d&apos;acteurs. Alors que les organisations de niveau 1 (fédérations internationales, ligues professionnelles, clubs affiliés) sont investies d&apos;une mission d&apos;intérêt général centrée sur la production du jeu et la régulation compétitive, les organisations de niveau 2 — au rang desquelles figurent les agences de conseil, les régies commerciales et les opérateurs d&apos;ingénierie événementielle — s&apos;inscrivent dans une logique marchande d&apos;entreprise de services. Pour ces dernières, la captation de valeur économique marchande, la rentabilité financière et la couverture des risques d&apos;exploitation ne sont pas accessoires : elles conditionnent leur existence même.
        </p>

        <p>
          Dans le paysage événementiel français, Sport Plus Conseil offre un cas d&apos;étude remarquable d&apos;organisation sportive de niveau 2. Fondée en 1996 par Pascal Biojout et présidée depuis 2015 par Gaëtan Muller, l&apos;agence a préservé un format de PME indépendante d&apos;une quinzaine de salariés permanents tout en pilotant des propriétés majeures : opérateur délégué des NBA Paris Games, coproducteur du All Star Game LNB à l&apos;Accor Arena, organisateur du Seine-Marathon 76 rassemblant plus de 10 000 coureurs, promoteur du tournoi de tennis Open Capfinances Rouen Métropole (WTA 250) et actionnaire majoritaire du club des Dragons de Rouen (RHE 76).
        </p>

        <p>
          Dès lors, la problématique centrale de cette étude s&apos;énonce ainsi : <em>comment une organisation sportive de niveau 2 à taille humaine parvient-elle à créer et capter une valeur marchande durable face à la concurrence des conglomérats mondiaux du divertissement, en articulant excellence opérationnelle, maillage territorial de proximité et engagement sociétal ?</em> Pour y répondre, notre analyse déploiera successivement la présentation de la firme (Partie 1), le diagnostic de son environnement (Partie 2), la modélisation de son modèle d&apos;affaires (Partie 3), l&apos;examen de ses stratégies à l&apos;œuvre (Partie 4), une prospective éclairée par la fable de Mintzberg (Partie 5) et notre corpus bibliographique (Partie 6).
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
