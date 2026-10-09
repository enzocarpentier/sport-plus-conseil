import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage20RseStrategy: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 4 : Stratégie Sociétale &amp; RSE</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          4.7 Promotion du Sport Féminin et Engagement Pionnier pour la Parité
        </h2>

        <p>
          Au-delà des dimensions sportives et économiques, Sport Plus Conseil a placé la Responsabilité Sociétale des Entreprises (RSE) au centre de son projet stratégique. Le marqueur le plus emblématique de cet engagement sociétal réside dans son investissement audacieux en faveur du tennis féminin professionnel. Alors que le calendrier français des tournois d&apos;élite demeurait historiquement écrasé par les épreuves masculines (Rolex Paris Masters, tournois ATP 250 de Marseille, Montpellier ou Metz), l&apos;agence a pris le pari d&apos;implanter et de financer l&apos;Open Capfinances Rouen Métropole, propulsé au statut de WTA 250 dès 2024.
        </p>

        <p>
          En garantissant un niveau de dotation financière élevé et des conditions d&apos;accueil dignes des plus grands tournois du Grand Chelem, l&apos;agence contribue activement à la revalorisation du sport féminin d&apos;élite. L&apos;événement sert de caisse de résonance pour sensibiliser le grand public et le tissu économique à la parité sportive, proposant des tables rondes thématiques sur le leadership féminin dans le sport business et organisant des séances de dédicaces exclusives avec des championnes internationales (Sloane Stephens, Elina Svitolina) afin de susciter des vocations auprès des jeunes licenciées des clubs régionaux.
        </p>

        <h2 className="academic-h1">
          4.8 Éco-Conception des Événements et Démocratisation Sociale
        </h2>

        <p>
          Sur le plan environnemental, Sport Plus Conseil applique une charte d&apos;éco-responsabilité stricte sur l&apos;ensemble de ses productions. Le Seine-Marathon 76 fait figure de modèle : l&apos;agence a éradiqué les bouteilles en plastique à usage unique sur l&apos;ensemble des ravitaillements du parcours de 42 km, distribuant l&apos;eau via des rampes connectées au réseau public d&apos;eau potable et des gobelets réutilisables consignés. Les denrées alimentaires non consommées à l&apos;issue des épreuves sont systématiquement collectées et données le jour même à la Banque Alimentaire et aux associations d&apos;aide aux sans-abri de la métropole rouennaise, évitant tout gaspillage.
        </p>

        <p>
          Enfin, l&apos;agence développe une politique volontariste d&apos;ouverture sociale. Pour chaque journée de compétition à l&apos;Open de Rouen ou lors des étapes de basket 3x3, des contingents de places gratuites sont attribués aux collèges et lycées situés en Réseau d&apos;Éducation Prioritaire (REP), ainsi qu&apos;aux associations de quartier. Des ateliers d&apos;initiation au basket fauteuil et au tennis handisport sont intégrés aux villages d&apos;animation, démontrant que l&apos;agence conçoit le spectacle sportif comme un vecteur fondamental d&apos;émancipation citoyenne et de cohésion sociale au cœur de la cité.
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
