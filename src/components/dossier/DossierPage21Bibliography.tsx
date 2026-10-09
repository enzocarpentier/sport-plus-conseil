import React from 'react'

interface DossierPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierPage21Bibliography: React.FC<DossierPageProps> = ({
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
      <div className="page-header pb-1 mb-2 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400 shrink-0 w-full overflow-hidden">
        <span className="uppercase tracking-wide whitespace-nowrap shrink-0">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic whitespace-nowrap shrink-0">Partie 6 : Sources &amp; Bibliographie</span>
      </div>

      {/* Corps du texte bibliographique en strict TNR 12pt, interligne 1,5 */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          6. Sources et Bibliographie Académique de Référence (Normes APA / ISO 690)
        </h2>

        <p className="italic mb-2 indent-0!">
          Corpus théorique croisant les ouvrages fondamentaux du management stratégique, les références obligatoires du cours de M. François et les sources professionnelles du secteur :
        </p>

        {/* 6.1 Ouvrages fondamentaux */}
        <h3 className="font-bold text-black mb-1 border-b border-gray-300 pb-0.5 text-[12pt]">
          6.1 Ouvrages Fondamentaux et Articles Scientifiques de Référence
        </h3>
        <div className="space-y-1 mb-2 text-[12pt] leading-[1.5]">
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
            • <strong>FREEMAN, R. E. (1984).</strong> <em>Strategic Management: A Stakeholder Approach</em>, Boston, Pitman Publishing, 276 p.
          </p>
          <p className="indent-0! text-justify">
            • <strong>LECOCQ, X., DEMIL, B., WARNIER, V. (2006).</strong> « Le business model, un outil d&apos;analyse stratégique », <em>L&apos;Expansion Management Review</em>, n° 123, p. 96–109.
          </p>
          <p className="indent-0! text-justify">
            • <strong>MAGRETTA, J. (2002).</strong> « Why Business Models Matter », <em>Harvard Business Review</em>, vol. 80, n° 5, p. 86–92.
          </p>
          <p className="indent-0! text-justify">
            • <strong>MINTZBERG, H., AHLSTRAND, B., LAMPEL, J. (2009).</strong> <em>Safari en pays stratégie</em>, Paris, Pearson Education France, 496 p.
          </p>
          <p className="indent-0! text-justify">
            • <strong>PORTER, M. E. (2001, 2008).</strong> « Strategy and the Internet » et « The Five Competitive Forces That Shape Strategy », <em>Harvard Business Review</em>.
          </p>
        </div>

        {/* 6.2 Supports universitaires */}
        <h3 className="font-bold text-black mb-1 border-b border-gray-300 pb-0.5 text-[12pt]">
          6.2 Supports Pédagogiques Universitaires et Cours Magistraux
        </h3>
        <div className="space-y-1 mb-2 text-[12pt] leading-[1.5]">
          <p className="indent-0! text-justify">
            • <strong>FRANÇOIS, A. (2026).</strong> <em>Stratégie des Organisations Sportives — Théories des OS, PESTEL, Porter, VRIO et Business Models</em>, Support de cours magistral et séminaire, UFR STAPS, Université de Rouen Normandie.
          </p>
        </div>

        {/* 6.3 Rapports et sources d'entreprise */}
        <h3 className="font-bold text-black mb-1 border-b border-gray-300 pb-0.5 text-[12pt]">
          6.3 Rapports Institutionnels, Observatoires Sectoriels et Sources d&apos;Entreprise
        </h3>
        <div className="space-y-1 text-[12pt] leading-[1.5]">
          <p className="indent-0! text-justify">
            • <strong>RAPPORTS &amp; INSTITUTIONS :</strong> CIO (2021), <em>Agenda Olympique 2020+5</em> ; LNB (2024–2025), <em>Rapports d&apos;exploitation du All Star Game</em> ; CDES Limoges (2018), <em>Observatoire du Naming</em> ; Métropole de Rouen Normandie (2024–2025), <em>Dossiers d&apos;impact Open WTA et Seine-Marathon</em> ; Jurisport n° 117 (2012) ; Entretiens de G. Muller et P. Biojout dans <em>L&apos;Équipe</em> et <em>SportBusiness.Club</em>.
          </p>
        </div>
      </div>

      {/* Pied de page académique centré */}
      <div className="page-footer pt-2 flex items-center justify-between text-[10pt] text-gray-700 border-t border-gray-400 shrink-0 mt-auto w-full relative">
        <span className="text-left whitespace-nowrap">Université de Rouen Normandie — UFR STAPS</span>
        <span className="absolute left-1/2 -translate-x-1/2 font-medium text-[10.5pt]">{pageNumber}</span>
        <span className="text-right italic whitespace-nowrap">Note collective de synthèse</span>
      </div>
    </div>
  )
}
