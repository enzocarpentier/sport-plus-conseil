import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage16CommercialStrategy: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 4 : Stratégie Commerciale &amp; B2B</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          4.3 Architecture des Revenus Marchands et Valorisation des Espaces Publicitaires
        </h2>

        <p>
          La stratégie commerciale de Sport Plus Conseil repose sur une diversification méticuleuse de ses flux de monétisation. L&apos;agence a structuré une chaîne de revenus reposant sur trois piliers marchands : la billetterie grand public, le sponsoring paritaire et la commercialisation d&apos;espaces publicitaires. En matière de ticketing, l&apos;agence applique des techniques de tarification dynamique (<em>yield management</em>), ajustant les tarifs selon les sessions diurnes ou nocturnes et l&apos;attractivité des affiches, tout en préservant des tarifs d&apos;appel abordables pour maximiser les taux d&apos;occupation des tribunes.
        </p>

        <p>
          Sur le versant des partenariats privés, Sport Plus Conseil a su négocier des contrats de naming structurants, à l&apos;image du partenariat pluriannuel conclu avec le courtier financier Capfinances pour le tournoi WTA de Rouen. Au-delà du naming, l&apos;agence opère une régie publicitaire intégrée exploitant l&apos;ensemble des supports visuels : panneautique LED dynamique en bord de court ou de parquet, marquages au sol haute adhérence et incrustations publicitaires virtuelles lors des retransmissions télévisées produites par TV Sport Events, offrant aux marques une exposition multi-supports à forte rentabilité.
        </p>

        <h2 className="academic-h1">
          4.4 Le Moteur Stratégique des Hospitalités VIP B2B et l&apos;Autonomie Financière
        </h2>

        <p>
          Le véritable moteur de rentabilité économique de Sport Plus Conseil réside dans la commercialisation d&apos;offres d&apos;hospitalités B2B haut de gamme. Les entreprises locales et nationales ne recherchent plus de simples places assises, mais de véritables plateformes de relations publiques destinées à séduire leurs clients stratégiques ou récompenser leurs collaborateurs. L&apos;agence a donc conçu des packages exclusifs : loges privatives avec vue plongeante, salons réceptifs valorisant la gastronomie régionale signée par des chefs réputés, accès privilégié aux coulisses et fauteuils « courtside » au ras du court ou du parquet.
        </p>

        <p>
          Cette excellence dans les prestations d&apos;hospitalités dégage des marges brutes substantielles qui poursuivent un objectif stratégique explicite : l&apos;émancipation progressive vis-à-vis des subventions publiques. Alors que de nombreuses manifestations sportives régionales restent tributaires à plus de 50 % des concours financiers des collectivités, Sport Plus Conseil a méthodiquement augmenté la part des revenus marchands privés (sponsoring et hospitalités d&apos;affaires) dans le budget global de ses événements. Cette désensibilisation protège le modèle économique de l&apos;agence contre les aléas de l&apos;austérité budgétaire publique et assure son autonomie décisionnelle.
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
