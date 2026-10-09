import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage03Intro: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Introduction Générale &amp; Problématique</span>
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
          Au sein de cet écosystème, la typologie des organisations sportives établie par Emmanuel Bayle (2007) et enseignée par Aurélien François distingue quatre niveaux d&apos;acteurs. Alors que le niveau 1 (fédérations, ligues, clubs) assure la régulation compétitive et la production du jeu sous mandat d&apos;intérêt général, les organisations de niveau 2 — agences de conseil, régies et opérateurs événementiels — relèvent d&apos;une logique marchande de prestation de services. Pour ces dernières, la captation de valeur économique, l&apos;équilibre financier et la maîtrise des risques d&apos;exploitation conditionnent directement leur survie et leur autonomie stratégique.
        </p>

        <p>
          Dans le paysage événementiel français, Sport Plus Conseil offre un cas d&apos;étude remarquable d&apos;organisation sportive de niveau 2. Fondée en 1996 par Pascal Biojout et présidée depuis 2015 par Gaëtan Muller, l&apos;agence a préservé un format de PME indépendante d&apos;une quinzaine de salariés permanents tout en pilotant des propriétés majeures : opérateur délégué des NBA Paris Games, coproducteur du All Star Game LNB à l&apos;Accor Arena, organisateur du Seine-Marathon 76 rassemblant plus de 10 000 coureurs, promoteur du tournoi de tennis Open Capfinances Rouen Métropole (WTA 250) et actionnaire majoritaire du club des Dragons de Rouen (RHE 76).
        </p>

        <p>
          Dès lors, la problématique centrale de cette étude s&apos;énonce ainsi : <em>comment une organisation sportive de niveau 2 à taille humaine parvient-elle à capter une valeur marchande durable face aux conglomérats du divertissement, en articulant excellence opérationnelle, ancrage territorial et engagement sociétal ?</em> Notre démarche articulera la présentation de la firme (Partie 1), son diagnostic macro et micro-environnemental (Partie 2), son modèle d&apos;affaires (Partie 3), ses orientations stratégiques opérationnelles (Partie 4), sa prospective holistique selon Mintzberg (Partie 5) et son appareil bibliographique universitaire (Partie 6).
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
