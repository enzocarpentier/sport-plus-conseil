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
      <div className="pb-1 mb-2.5 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0">
        <span className="uppercase tracking-wider">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic">Partie 6 : Sources &amp; Bibliographie</span>
      </div>

      {/* Corps du texte bibliographique aux normes académiques */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          6. Sources et Bibliographie Académique de Référence (Normes APA / ISO 690)
        </h2>

        <p className="text-[10.5pt] italic mb-1.5">
          Corpus théorique croisant les ouvrages fondamentaux du management stratégique, les références obligatoires du cours de M. François et les documents professionnels du secteur :
        </p>

        <div className="space-y-1 text-[9pt] leading-tight text-gray-900">
          <p className="indent-0! text-justify">
            • <strong>BARGET, E., VAILLEAU, P. (2008).</strong> « Management stratégique des organisations sportives », dans <em>Management du sport</em>, Paris, De Boeck Supérieur.
          </p>

          <p className="indent-0! text-justify">
            • <strong>BARNEY, J. B. (1991).</strong> « Firm Resources and Sustained Competitive Advantage », <em>Journal of Management</em>, vol. 17, n° 1, p. 99–120.
          </p>

          <p className="indent-0! text-justify">
            • <strong>BAYLE, E. (2007, 2014).</strong> <em>Les grands dirigeants du sport. 23 portraits de stratégies de management</em>, Bruxelles, De Boeck Éditions.
          </p>

          <p className="indent-0! text-justify">
            • <strong>DETCHENIQUE, G., CEZAR, F. (2023).</strong> « La remise en cause d’un business model dominant : le cas du football français », <em>Innovations</em>, vol. 71, p. 151–178.
          </p>

          <p className="indent-0! text-justify">
            • <strong>FRANÇOIS, A. (2026).</strong> <em>Stratégie des Organisations Sportives — Théories des OS, PESTEL, Porter, VRIO et Business Models</em>, Support de cours magistral et séminaire, UFR STAPS, Université de Rouen Normandie.
          </p>

          <p className="indent-0! text-justify">
            • <strong>FREEMAN, R. E. (1984).</strong> <em>Strategic Management: A Stakeholder Approach</em>, Boston, Pitman Publishing, 276 p.
          </p>

          <p className="indent-0! text-justify">
            • <strong>LECOCQ, X., DEMIL, B., WARNIER, V. (2006).</strong> « Le business model, un outil d&apos;analyse stratégique », <em>L&apos;Expansion Management Review</em>, n° 123, p. 96–109.
          </p>

          <p className="indent-0! text-justify">
            • <strong>MAGRETTA, J. (2002).</strong> « Why Business Models Matter », <em>Harvard Business Review</em>, vol. 80, n° 5, p. 86–92.
          </p>

          <p className="indent-0! text-justify">
            • <strong>MALTESE, L., DANGLADE, J-P. (2014).</strong> <em>Marketing du sport et évènementiel sportif</em>, Paris, Dunod.
          </p>

          <p className="indent-0! text-justify">
            • <strong>MINTZBERG, H., AHLSTRAND, B., LAMPEL, J. (2009).</strong> <em>Safari en pays stratégie</em>, Paris, Pearson Education France, 496 p.
          </p>

          <p className="indent-0! text-justify">
            • <strong>OSTERWALDER, A., PIGNEUR, Y. (2010).</strong> <em>Business Model Nouvelle Génération</em>, Paris, Pearson, 288 p.
          </p>

          <p className="indent-0! text-justify">
            • <strong>PORTER, M. E. (2001, 2008).</strong> « Strategy and the Internet » et « The Five Competitive Forces That Shape Strategy », <em>Harvard Business Review</em>.
          </p>

          <p className="indent-0! text-justify">
            • <strong>RAPPORTS &amp; INSTITUTIONS :</strong> CIO (2021), <em>Agenda Olympique 2020+5</em> ; LNB (2024–2025), <em>Rapports annuels d&apos;exploitation du All Star Game</em> ; CDES Limoges (2018), <em>Observatoire du Naming des stades et arénas</em> ; Métropole de Rouen Normandie (2024–2025), <em>Dossiers d&apos;impact de l&apos;Open WTA et du Seine-Marathon</em> ; Jurisport n° 117 (2012) ; Déclarations de G. Muller, P. Biojout et C. Roche dans <em>L&apos;Équipe</em> et <em>SportBusiness.Club</em>.
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
