import React from 'react'

interface DossierBudgetPageProps {
  id?: string
  pageNumber: number
  totalPages: number
}

export const DossierBudgetPage: React.FC<DossierBudgetPageProps> = ({
  id,
  pageNumber
}) => {
  return (
    <div
      id={id}
      className="a4-page-container bg-white text-black shadow-md relative flex flex-col justify-between select-text"
      style={{
        boxSizing: 'border-box'
      }}
    >
      {/* En-tête courant académique (10 pt) */}
      <div className="pb-1 mb-3 flex items-center justify-between text-[10pt] text-gray-700 border-b border-gray-400">
        <span className="uppercase tracking-wider">Stratégie des OS — Cas Sport Plus Conseil</span>
        <span className="italic">Parties 5 &amp; 6 : Parties Prenantes, Prospective &amp; Sources</span>
      </div>

      {/* Corps du texte aux normes : Corps 12 pt, Interligne 1,5, Justifié, Alinéa 1 cm */}
      <div className="academic-body flex-1 flex flex-col justify-start">
        <h2 className="academic-h1">
          5. Théorie des Parties Prenantes (Freeman) et Stratégies à l&apos;Œuvre
        </h2>

        <p>
          Suivant la définition de R. Edward Freeman (1984), qui définit les parties prenantes comme tout groupe ou individu pouvant affecter ou être affecté par la réalisation des objectifs de la firme, Sport Plus Conseil orchestre un écosystème hautement interdépendant. Ses parties prenantes clés regroupent les ligues et fédérations délégataires (NBA, LNB, WTA, FFHB), les collectivités territoriales partenaires (Métropole de Rouen, Région Normandie, Ville de Paris), les entreprises partenaires et sponsors (annonceurs nationaux, acheteurs d&apos;hospitalités VIP), les médias et diffuseurs TV, ainsi que le grand public (plus de 10 000 participants au Seine-Marathon, spectateurs de l&apos;Accor Arena et du Kindarena) et les réseaux de bénévoles.
        </p>

        <p>
          Face aux évolutions du marché, Sport Plus Conseil déploie une triple dynamique stratégique : une <em>stratégie sportive</em> visant à demeurer le partenaire opérationnel de référence des grandes institutions mondiales ; une <em>stratégie commerciale</em> axée sur la diversification des revenus (régie de sponsoring, commercialisation d&apos;hospitalités B2B sur-mesure et billetterie grand public) afin de minimiser la dépendance aux subventions publiques ; et une <em>stratégie sociétale et RSE</em> tournée vers l&apos;éco-responsabilité des rassemblements de masse, la promotion de la santé par le running et la valorisation du sport féminin.
        </p>

        <h2 className="academic-h1">
          6. Analyse Prospective (Fable de Mintzberg) et Sources Bibliographiques
        </h2>

        <p>
          En guise d&apos;analyse prospective valant conclusion, l&apos;avenir de Sport Plus Conseil repose sur sa capacité à hybrider l&apos;accueil de méga-événements mondiaux (NBA), l&apos;ancrage d&apos;épreuves régionales propriétaires (Seine-Marathon 76, Open Capfinances) et l&apos;expertise audiovisuelle de TV Sport Events. Comme le rappelle la métaphore des aveugles et des éléphants formalisée par Henry Mintzberg et ses coauteurs (2009) dans <em>Safari en pays stratégie</em>, la gouvernance d&apos;une agence sportive ne peut se limiter à une perception cloisonnée : l&apos;équilibre pérenne de son modèle d&apos;affaires exige une vision stratégique intégrée, unissant rigueur économique, logistique de terrain et responsabilité citoyenne.
        </p>

        <div className="academic-biblio">
          <p>
            • <strong>BARNEY, J. B. (1991).</strong> « Firm Resources and Sustained Competitive Advantage », <em>Journal of Management</em>, vol. 17, n° 1, p. 99–120.
          </p>
          <p>
            • <strong>FRANÇOIS, A. (2026).</strong> <em>Stratégie des organisations sportives</em>, Support de cours magistral et séminaire, UFR STAPS Rouen.
          </p>
          <p>
            • <strong>FREEMAN, R. E. (1984).</strong> <em>Strategic Management: A Stakeholder Approach</em>, Boston, Pitman Publishing.
          </p>
          <p>
            • <strong>MINTZBERG, H., AHLSTRAND, B., LAMPEL, J. (2009).</strong> <em>Safari en pays stratégie</em>, Paris, Pearson Education France.
          </p>
          <p>
            • <strong>PORTER, M. E. (2001).</strong> « Strategy and the Internet », <em>Harvard Business Review</em>, vol. 79, n° 3, p. 62–78.
          </p>
          <p>
            • <strong>OSTERWALDER, A., PIGNEUR, Y. (2010).</strong> <em>Business Model Nouvelle Génération</em>, Paris, Pearson.
          </p>
        </div>
      </div>

      {/* Pied de page académique : Numéro de page STRICTEMENT centré */}
      <div className="pt-2 grid grid-cols-3 items-center text-[10pt] text-gray-700 border-t border-gray-400 shrink-0 mt-auto w-full">
        <span className="text-left">Université de Rouen Normandie — UFR STAPS</span>
        <span className="text-center font-mono font-medium text-[10.5pt]">{pageNumber}</span>
        <span className="text-right italic">Note collective de synthèse</span>
      </div>
    </div>
  )
}
