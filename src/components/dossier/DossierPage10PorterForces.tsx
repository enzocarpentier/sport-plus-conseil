import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage10PorterForces: React.FC<DossierPageProps> = ({
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
        <span className="italic whitespace-nowrap shrink-0">Partie 2 : Modèle des 5 Forces de Porter</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.7 Rivalité Sectorielle et Pouvoir de Négociation des Clients et Fournisseurs
        </h2>

        <p>
          L&apos;application du modèle des cinq forces de Michael Porter permet de cartographier la dynamique concurrentielle de l&apos;industrie événementielle sportive dans laquelle opère Sport Plus Conseil. L&apos;intensité de la rivalité sectorielle y est particulièrement vive : l&apos;agence affronte des conglomérats transnationaux aux capitaux massifs (Live Nation Entertainment, IMG Events, Infront Sports &amp; Media, consortium AEG / Lagardère). Face à ces géants capables d&apos;injecter des garanties financières considérables, Sport Plus Conseil fait prévaloir sa réactivité de PME indépendante, son ancrage territorial intime et son savoir-faire d&apos;ingénierie opérationnelle.
        </p>

        <p>
          Le pouvoir de négociation des clients est très élevé, qu&apos;il s&apos;agisse des ayants droit (NBA, LNB, WTA) ou des collectivités locales délégantes, qui imposent des procédures d&apos;appel d&apos;offres d&apos;une extrême rigueur. Côté fournisseurs, le pouvoir de négociation est également substantiel : les exploitants d&apos;arénas sportives de premier plan (Accor Arena à Paris-Bercy, Kindarena de Rouen) exercent une situation de quasi-monopole d&apos;infrastructure couverte dans leurs bassins respectifs. Les prestataires de sécurité privée agréés CNAPS et les techniciens spécialisés dans les parquets homologués FIBA bénéficient aussi d&apos;un levier tarifaire lié à la rareté de leurs compétences certifiées.
        </p>

        <h2 className="academic-h1">
          2.8 Menaces des Entrants Potentiels et des Produits de Substitution
        </h2>

        <p>
          La menace des nouveaux entrants est contenue par de fortes barrières structurelles : cautionnements bancaires de plusieurs millions d&apos;euros, certifications de ligues mondiales et réputation historique depuis 1996. De surcroît, comme le formalise le modèle des 5 forces (+1) enseigné par Aurélien François, la sixième force déterminante réside dans l&apos;intervention des pouvoirs publics et autorités régaliennes (État, préfectures, commissions ERP) dont les agréments conditionnent l&apos;existence même des épreuves sur voie publique ou en aréna.
        </p>

        <p>
          Enfin, la menace des produits de substitution s&apos;avère prégnante. Les événements sportifs rivalisent directement pour capter le budget loisir des ménages et les investissements de relations publiques B2B face aux concerts en arénas, festivals, compétitions d&apos;e-sport et plateformes de streaming haute définition. Pour contrer cette concurrence, Sport Plus Conseil mise sur l&apos;exclusivité de l&apos;émotion vécue en présentiel et sur le prestige relationnel des salons VIP, inimitables à distance.
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
