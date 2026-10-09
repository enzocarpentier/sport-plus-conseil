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
      <div className="pb-1 mb-3 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0">
        <span className="uppercase tracking-wider">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic">Partie 2 : PESTEL — Dimensions Sociale &amp; Technologique</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.3 L&apos;Environnement Sociologique : L&apos;Ère du Sportainment, Santé et Parité
        </h2>

        <p>
          Sur le plan socioculturel, les attentes des consommateurs de sport ont connu une mutation profonde au cours de la dernière décennie. Le public ne se satisfait plus d&apos;une simple confrontation sportive linéaire : il exige une expérience globale et immersive, qualifiée dans l&apos;industrie de « sportainment ». Ce croisement entre performance sportive pure et show de divertissement à l&apos;américaine constitue l&apos;ADN des productions de Sport Plus Conseil, comme l&apos;illustrent les spectacles son et lumière, les animations pyrotechniques et les concerts intégrés au All Star Game de la LNB ou aux NBA Paris Games.
        </p>

        <p>
          Simultanément, la société manifeste un engouement croissant pour les pratiques physiques de santé et de bien-être, expliquant le succès phénoménal des courses sur route telles que le Seine-Marathon 76. Le running répond à un besoin de dépassement personnel, de convivialité et de reconnexion collective au cœur de l&apos;espace urbain. Enfin, la sensibilité sociétale en faveur de l&apos;égalité hommes-femmes et la mise en lumière des athlètes féminines constituent une tendance de fond majeure. En hissant l&apos;Open de Rouen au rang de WTA 250, l&apos;agence répond directement à cette aspiration collective en offrant une vitrine d&apos;excellence au sport féminin professionnel.
        </p>

        <h2 className="academic-h1">
          2.4 L&apos;Environnement Technologique : Maîtrise Audiovisuelle et Digitalisation In-Arena
        </h2>

        <p>
          L&apos;environnement technologique redéfinit radicalement les standards de délivrance des événements sportifs. La généralisation de la diffusion en continu (streaming OTT), des plateformes numériques et des réseaux sociaux impose aux organisateurs une réactivité instantanée pour la génération de contenus courts et percutants. Grâce à l&apos;intégration de TV Sport Events, Sport Plus Conseil dispose d&apos;un avantage technologique décisif en produisant en propre des flux vidéo conformes aux exigences des chaînes nationales (beIN Sports, L&apos;Équipe) et des flux internationaux des circuits WTA et NBA.
        </p>

        <p>
          Au sein des enceintes sportives, la digitalisation transforme également le parcours du spectateur. La billetterie est désormais intégralement dématérialisée, s&apos;appuyant sur des protocoles de contrôle d&apos;accès sécurisés et mobiles qui fluidifient l&apos;entrée de milliers de personnes en quelques minutes. Sur les courts et les parquets, l&apos;intégration d&apos;outils technologiques de haute précision — tels que les caméras haute fréquence du système d&apos;arbitrage Hawk-Eye à l&apos;Open de Rouen, les écrans géants LED synchronisés et les systèmes de sonorisation directionnelle — contribue à dramatiser le spectacle tout en assurant une équité sportive irréprochable.
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
