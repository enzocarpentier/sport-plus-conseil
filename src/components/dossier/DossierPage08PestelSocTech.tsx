import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage08PestelSocTech: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 2 : PESTEL — Sociale &amp; Technologique</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.3 L&apos;Environnement Sociologique : L&apos;Ère du Sportainment, Santé et Parité
        </h2>

        <p>
          Sur le plan socioculturel, les attentes des consommateurs ont profondément évolué. Le public ne se satisfait plus d&apos;une simple confrontation sportive : il exige une expérience immersive qualifiée de « sportainment ». Ce croisement entre performance sportive et spectacle de divertissement constitue l&apos;ADN des productions de Sport Plus Conseil, comme l&apos;illustrent les shows son et lumière, animations pyrotechniques et concerts intégrés au All Star Game de la LNB et aux NBA Paris Games.
        </p>

        <p>
          Simultanément, l&apos;engouement pour les pratiques de santé et de bien-être porte le succès populaire du Seine-Marathon 76. Le running répond à un besoin de dépassement personnel et de reconnexion au cœur de l&apos;espace urbain. Enfin, la valorisation des athlètes féminines constitue une tendance sociétale majeure. En hissant l&apos;Open de Rouen au rang de tournoi WTA 250, l&apos;agence offre une vitrine d&apos;excellence au sport féminin professionnel.
        </p>

        <h2 className="academic-h1">
          2.4 L&apos;Environnement Technologique : Maîtrise Audiovisuelle et Digitalisation In-Arena
        </h2>

        <p>
          L&apos;environnement technologique redéfinit la délivrance des événements sportifs. La diffusion en streaming OTT et sur les réseaux sociaux impose une réactivité instantanée pour produire des formats courts viraux. Grâce à l&apos;intégration de TV Sport Events, Sport Plus Conseil dispose d&apos;un avantage décisif en produisant en propre des flux vidéo conformes aux standards des diffuseurs nationaux (beIN Sports, L&apos;Équipe) et internationaux (WTA, NBA).
        </p>

        <p>
          Au sein des arénas, la digitalisation transforme le parcours du spectateur. La billetterie est intégralement dématérialisée, s&apos;appuyant sur un contrôle d&apos;accès mobile et fluide. Sur les courts, des outils de haute précision — caméras Hawk-Eye à l&apos;Open de Rouen, écrans géants LED synchronisés et sonorisation directionnelle — dramatisent le spectacle tout en assurant une équité sportive irréprochable.
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
