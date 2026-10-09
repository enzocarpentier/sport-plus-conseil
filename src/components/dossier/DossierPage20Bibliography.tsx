import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage20Bibliography: React.FC<DossierPageProps> = ({
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
        <span className="italic">Partie 6 : Sources &amp; Bibliographie</span>
      </div>

      {/* Corps du texte bibliographique aux normes académiques */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          6. Sources et Bibliographie Académique de Référence (Normes APA / ISO 690)
        </h2>

        <p className="text-[11pt] italic mb-2">
          Le présent travail d&apos;analyse stratégique s&apos;appuie sur un corpus théorique croisant les ouvrages fondateurs du management stratégique, les enseignements universitaires en économie du sport et la documentation professionnelle du secteur :
        </p>

        <div className="space-y-1.5 text-[10pt] leading-tight text-gray-900">
          <p className="indent-0! text-justify">
            • <strong>ANDREFF, W. (2018).</strong> <em>Mondialisation économique du sport : Manuel d&apos;économie du sport</em>, Bruxelles, De Boeck Supérieur, 416 p.
          </p>

          <p className="indent-0! text-justify">
            • <strong>BARNEY, J. B. (1991).</strong> « Firm Resources and Sustained Competitive Advantage », <em>Journal of Management</em>, vol. 17, n° 1, p. 99–120.
          </p>

          <p className="indent-0! text-justify">
            • <strong>FRANÇOIS, A. (2026).</strong> <em>Stratégie des Organisations Sportives — Théories des OS, Diagnostic Macro et Business Model</em>, Supports de cours magistraux et études de cas, Master Management du Sport, UFR STAPS, Université de Rouen Normandie.
          </p>

          <p className="indent-0! text-justify">
            • <strong>FREEMAN, R. E. (1984).</strong> <em>Strategic Management: A Stakeholder Approach</em>, Boston, Pitman Publishing, 276 p.
          </p>

          <p className="indent-0! text-justify">
            • <strong>KIM, W. C., MAUBORGNE, R. (2005).</strong> <em>Stratégie Océan Bleu : Comment créer de nouveaux espaces stratégiques</em>, Paris, Pearson Village Mondial.
          </p>

          <p className="indent-0! text-justify">
            • <strong>MINTZBERG, H., AHLSTRAND, B., LAMPEL, J. (2009).</strong> <em>Safari en pays stratégie : L&apos;exploration des grands courants de la pensée stratégique</em>, Paris, Pearson Education France, 496 p.
          </p>

          <p className="indent-0! text-justify">
            • <strong>OSTERWALDER, A., PIGNEUR, Y. (2010).</strong> <em>Business Model Nouvelle Génération : Un guide pour visionnaires, révolutionnaires et novateurs</em>, Paris, Pearson, 288 p.
          </p>

          <p className="indent-0! text-justify">
            • <strong>PORTER, M. E. (2001).</strong> « Strategy and the Internet », <em>Harvard Business Review</em>, vol. 79, n° 3, p. 62–78.
          </p>

          <p className="indent-0! text-justify">
            • <strong>PORTER, M. E. (2008).</strong> « The Five Competitive Forces That Shape Strategy », <em>Harvard Business Review</em>, vol. 86, n° 1, p. 78–93.
          </p>

          <p className="indent-0! text-justify">
            • <strong>WERNERFELT, B. (1984).</strong> « A Resource-Based View of the Firm », <em>Strategic Management Journal</em>, vol. 5, n° 2, p. 171–180.
          </p>

          <p className="indent-0! text-justify">
            • <strong>DOCUMENTS PROFESSIONNELS ET INSTITUTIONNELS :</strong> Rapports annuels de la Ligue Nationale de Basket (LNB, 2024–2025) ; Délibérations et dossiers d&apos;impact économique de la Métropole de Rouen Normandie (2024–2025) ; Cahiers des charges officiels du WTA Tour (WTA Rulebook 2025) et de la National Basketball Association (NBA) ; Entretiens de presse spécialisée de Gaëtan Muller, Pascal Biojout, Charles Roche et Samir Boudjemaa parus dans <em>L&apos;Équipe</em>, <em>Sport Stratégies</em> et <em>SportBusiness.Club</em> (2022–2026).
          </p>
        </div>
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
