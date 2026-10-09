import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage14VrioModel: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 3 : Modèle VRIO de Jay Barney</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          3.7 Le Modèle VRIO de Jay Barney (1991) Appliqué à l&apos;Agence Sport Plus Conseil
        </h2>

        <p>
          Pour déterminer si les ressources identifiées génèrent un avantage concurrentiel temporaire ou soutenable, Jay Barney (1991) propose la grille VRIO, structurée autour de quatre interrogations cumulatives : la Valeur (V), la Rareté (R), l&apos;Inimitabilité (I) et l&apos;Organisation (O). L&apos;application systématique de ce prisme théorique à Sport Plus Conseil permet d&apos;objectiver la solidité de sa position stratégique.
        </p>

        <p>
          Le critère de la Valeur (V) est pleinement validé : les compétences logistiques et le réseau d&apos;affaires de l&apos;agence lui permettent de saisir des opportunités de forte croissance — telles que l&apos;obtention de la licence WTA 250 pour Rouen ou la pérennisation du match NBA à Paris — tout en neutralisant la menace d&apos;éviction par des concurrents régionaux. Le critère de la Rareté (R) est également satisfait : sur le marché français de l&apos;événementiel sportif, très peu de structures indépendantes détiennent à la fois la maîtrise opérationnelle d&apos;arénas de standard international et une filiale audiovisuelle intégrée (TV Sport Events) capable d&apos;assurer le signal international en direct.
        </p>

        <h2 className="academic-h1">
          3.8 Inimitabilité Historique, Organisation Interne et Avantage Concurrentiel Durable
        </h2>

        <p>
          L&apos;Inimitabilité (I) constitue la clé de voûte de l&apos;avantage concurrentiel de Sport Plus Conseil. Selon Barney, l&apos;inimitabilité repose sur la dépendance de sentier (<em>path dependency</em>) et la complexité sociale. Le capital de confiance accumulé depuis 1996 par Pascal Biojout auprès des ligues et des métropoles ne peut être répliqué rapidement par un rival, même doté d&apos;importants moyens financiers. De même, la légitimité sportive et politique de Gaëtan Muller au sein des instances du basket mondial résulte d&apos;un parcours d&apos;athlète de haut niveau et de dirigeant d&apos;EuroLeague impossible à acheter sur étagère.
        </p>

        <p>
          Enfin, la dimension de l&apos;Organisation (O) examine si l&apos;entreprise est structurée pour exploiter le plein potentiel de ses ressources. Avec son management horizontal, ses circuits de décision ultra-courts et sa forte culture de subsidiarité, la PME Sport Plus Conseil évite la lourdeur procédurale qui paralyse fréquemment les filiales des grands groupes de communication. Les compétences individuelles y sont instantanément mobilisées et coordonnées en temps réel. En validant l&apos;ensemble des quatre dimensions du modèle VRIO (V, R, I, O), l&apos;agence dispose d&apos;un avantage concurrentiel soutenable et durable sur son segment d&apos;ingénierie événementielle sportive premium.
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
