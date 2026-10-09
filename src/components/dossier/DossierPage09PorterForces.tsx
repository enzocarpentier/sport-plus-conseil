import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage09PorterForces: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 2 : Modèle des 5 Forces de Porter</span>
      </div>

      {/* Corps du texte */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          2.7 Rivalité Sectorielle et Pouvoir de Négociation des Clients et Fournisseurs
        </h2>

        <p>
          L&apos;application du modèle des cinq forces de Michael Porter permet de cartographier la dynamique concurrentielle de l&apos;industrie événementielle sportive dans laquelle opère Sport Plus Conseil. L&apos;intensité de la rivalité sectorielle y est particulièrement vive : l&apos;agence se trouve en compétition frontale avec des conglomérats transnationaux aux capitaux gigantesques, tels que Live Nation Entertainment, IMG Events (groupe Endeavor), Infront Sports &amp; Media ou encore le consortium AEG / Lagardère. Face à ces géants capables d&apos;injecter des garanties financières massives, Sport Plus Conseil fait prévaloir sa réactivité de PME indépendante, son ancrage territorial intime et son savoir-faire d&apos;orfèvre opérationnel.
        </p>

        <p>
          Le pouvoir de négociation des clients est très élevé, qu&apos;il s&apos;agisse des ayants droit propriétaires de compétitions (NBA, LNB, WTA) ou des collectivités locales délégantes. Ces institutions disposent d&apos;un choix alternatif étendu et imposent des procédures d&apos;appel d&apos;offres d&apos;une extrême rigueur. À l&apos;autre extrémité de la chaîne, le pouvoir de négociation des fournisseurs est également substantiel : les exploitants d&apos;arénas sportives de premier plan (Accor Arena à Paris-Bercy, Kindarena de Rouen) exercent une situation de quasi-monopole d&apos;infrastructure couverte dans leurs bassins respectifs. Les prestataires de sécurité privée agréés CNAPS et les spécialistes techniques d&apos;installation de parquets démontables certifiés FIBA bénéficient également d&apos;un levier tarifaire important du fait de la rareté de leurs compétences certifiées.
        </p>

        <h2 className="academic-h1">
          2.8 Menaces des Entrants Potentiels et des Produits de Substitution
        </h2>

        <p>
          La menace des nouveaux entrants est contenue par des barrières à l&apos;entrée structurelles majeures : cautionnements bancaires de plusieurs millions d&apos;euros, certifications de ligues mondiales et réputation historique depuis 1996. De surcroît, comme le formalise le modèle des 5 forces (+1) enseigné par Aurélien François, la sixième force déterminante réside dans l&apos;intervention des pouvoirs publics et des autorités régaliennes (État, préfectures, commissions de sécurité ERP) dont les agréments et arrêtés de circulation conditionnent l&apos;existence même des épreuves sur voie publique ou en aréna.
        </p>

        <p>
          En revanche, la menace des produits de substitution s&apos;avère prégnante. Les événements sportifs ne rivalisent pas uniquement entre eux : ils sont en compétition directe pour capter le budget loisir des ménages et les investissements de relations publiques des entreprises. Les concerts musicaux en arénas, les festivals urbains, les compétitions d&apos;e-sport de grande envergure ainsi que les offres de divertissement audiovisuel domestique (plateformes de streaming diffusant le sport en très haute définition) constituent des substituts puissants. Pour contrer cette menace, Sport Plus Conseil mise sur l&apos;exclusivité de l&apos;émotion vécue « en présentiel » et sur le prestige unique des salons VIP, impossibles à expérimenter derrière un écran domestique.
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
