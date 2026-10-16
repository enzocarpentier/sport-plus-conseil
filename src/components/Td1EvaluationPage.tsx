import React, { useState } from 'react'
import {
  FileText,
  Layers,
  Compass,
  TrendingUp,
  Award,
  ArrowRight,
  Clock,
  Sparkles,
  Building2,
  Users,
  Target,
  BarChart3,
  BookOpen,
  Calendar
} from 'lucide-react'

interface Td1EvaluationPageProps {
  onNavigateToDossierPage: (pageNum: number) => void
  onBackToDossier: () => void
}

export const Td1EvaluationPage: React.FC<Td1EvaluationPageProps> = ({
  onNavigateToDossierPage,
  onBackToDossier
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | '1' | '2' | '3a' | '3b' | '3c' | '3d'>('all')

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 font-sans text-gray-900 transition-all select-text print:p-[20mm] print:max-w-none print:w-[210mm] print:mx-auto print:font-serif print:text-[11pt]">
      
      {/* BANNIÈRE HAUTE OFFICIELLE ACADÉMIQUE */}
      <div className="bg-gradient-to-r from-[#1c2d42] to-[#2e4768] text-white rounded-xl shadow-lg p-6 sm:p-8 mb-8 border border-[#3b5982] print:bg-none print:text-black print:border-b-2 print:border-black print:shadow-none print:p-2 print:mb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/20 pb-5 mb-5 print:border-black print:pb-2 print:mb-2">
          <div>
            <div className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-1 print:text-gray-700">
              <BookOpen size={16} />
              <span>Université de Rouen Normandie — UFR STAPS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white print:text-black">
              TD N°1 — Points d&apos;Avancée du Dossier de Stratégie
            </h1>
            <p className="text-gray-200 text-sm mt-1 print:text-gray-800">
              Master Management du Sport • Enseignant responsable : <strong>Aurélien FRANÇOIS</strong> (Maître de conférences)
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 bg-white/10 backdrop-blur-xs p-3 rounded-lg border border-white/15 print:border-black print:bg-white print:p-1 text-xs">
            <div className="flex items-center gap-1.5 text-blue-100 font-medium print:text-black">
              <Building2 size={14} />
              <span>Organisation étudiée : <strong className="text-white print:text-black">Sport Plus Conseil (OS 2)</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-100 print:text-black">
              <Calendar size={14} />
              <span>Document de cadrage officiel : <strong>TD 1 (120 min)</strong></span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-gray-200 print:hidden">
          <p className="flex items-center gap-1.5 text-blue-100">
            <Sparkles size={16} className="text-amber-400 shrink-0" />
            <span>Cette page synthétise les réponses exhaustives et référencées pour chaque question de la fiche d&apos;évaluation.</span>
          </p>
          <button
            onClick={onBackToDossier}
            className="flex items-center gap-2 bg-white text-[#1c2d42] hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg shadow-sm transition-all cursor-pointer text-xs"
          >
            <FileText size={14} />
            <span>Consulter le Dossier complet (21 pages A4)</span>
          </button>
        </div>
      </div>

      {/* BARRE DE NAVIGATION RAPIDE PAR QUESTION (NON IMPRIMABLE) */}
      <div className="no-print print:hidden sticky top-20 z-30 bg-white/95 backdrop-blur-md rounded-xl p-2.5 mb-8 shadow-md border border-gray-200 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold text-gray-700 px-2 flex items-center gap-1">
          <Clock size={13} className="text-blue-600" />
          <span>Accès rapide :</span>
        </span>
        <button
          onClick={() => { setActiveFilter('all'); scrollToSection('section-1') }}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeFilter === 'all' ? 'bg-[#1c2d42] text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Toutes les questions
        </button>
        <button
          onClick={() => { setActiveFilter('1'); scrollToSection('section-1') }}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeFilter === '1' ? 'bg-blue-600 text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          1. Créneaux (5&apos;)
        </button>
        <button
          onClick={() => { setActiveFilter('2'); scrollToSection('section-2') }}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeFilter === '2' ? 'bg-blue-600 text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          2. Pertinence de l&apos;OS (30&apos;)
        </button>
        <button
          onClick={() => { setActiveFilter('3a'); scrollToSection('section-3a') }}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeFilter === '3a' ? 'bg-blue-600 text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          3.a. Environnement
        </button>
        <button
          onClick={() => { setActiveFilter('3b'); scrollToSection('section-3b') }}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeFilter === '3b' ? 'bg-blue-600 text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          3.b. Modèle d&apos;affaires
        </button>
        <button
          onClick={() => { setActiveFilter('3c'); scrollToSection('section-3c') }}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeFilter === '3c' ? 'bg-blue-600 text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          3.c. Stratégies à l&apos;œuvre
        </button>
        <button
          onClick={() => { setActiveFilter('3d'); scrollToSection('section-3d') }}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeFilter === '3d' ? 'bg-blue-600 text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          3.d. Prospective
        </button>
      </div>

      {/* CONTENU PRINCIPAL DES RÉPONSES */}
      <div className="space-y-10">

        {/* ------------------------------------------------------------- */}
        {/* SECTION 1 : VÉRIFICATION DES CRÉNEAUX */}
        {/* ------------------------------------------------------------- */}
        <section id="section-1" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                1
              </span>
              <h2 className="text-lg font-bold text-gray-900 font-serif">
                1. Vérification des créneaux d’évaluation (5’)
              </h2>
            </div>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
              <Clock size={12} /> 5 minutes
            </span>
          </div>

          <div className="p-6 text-sm text-gray-700 space-y-4 leading-relaxed">
            <p>
              Ce temps inaugural permet de caler le calendrier de restitution, de confirmer l&apos;ordre de passage et de valider les modalités techniques d&apos;évaluation en visio-conférence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-blue-50/60 p-4 rounded-lg border border-blue-100">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Cadre formel</span>
                <p className="text-xs text-blue-950 font-medium">Soutenance formative collective STAPS Management du Sport sous l&apos;égide d&apos;Aurélien François.</p>
              </div>
              <div className="bg-blue-50/60 p-4 rounded-lg border border-blue-100">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Répartition orale</span>
                <p className="text-xs text-blue-950 font-medium">Distribution équitable du temps de parole sur les 3 grands attendus : Environnement, Modèle d&apos;affaires, Stratégies.</p>
              </div>
              <div className="bg-blue-50/60 p-4 rounded-lg border border-blue-100">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Support de référence</span>
                <p className="text-xs text-blue-950 font-medium">Dossier universitaire dactylographié conforme aux normes A4 (TNR 12, 1.5, marges 2.5 cm).</p>
              </div>
            </div>
          </div>
        </section>


        {/* ------------------------------------------------------------- */}
        {/* SECTION 2 : PERTINENCE DES ORGANISATIONS CHOISIES */}
        {/* ------------------------------------------------------------- */}
        <section id="section-2" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                2
              </span>
              <h2 className="text-lg font-bold text-gray-900 font-serif">
                2. Discussion de la pertinence des organisations choisies (30’)
              </h2>
            </div>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
              <Clock size={12} /> 30 minutes
            </span>
          </div>

          <div className="p-6 space-y-6 text-sm text-gray-700 leading-relaxed">
            
            {/* 2.a ACCÈS AUX INFORMATIONS COLLECTÉES */}
            <div className="border-l-4 border-blue-600 pl-4 py-1 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  a. Accès aux informations collectées
                </h3>
                <button
                  onClick={() => onNavigateToDossierPage(4)}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-medium bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 transition-colors cursor-pointer"
                >
                  <span>Dossier Page 4 (Genèse)</span>
                  <ArrowRight size={12} />
                </button>
              </div>
              <p>
                <strong>Sources primaires et secondaires d&apos;un haut niveau de traçabilité :</strong> L&apos;accès à l&apos;information stratégique sur Sport Plus Conseil repose sur un travail rigoureux de croisement documentaire :
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-2 text-xs sm:text-sm">
                <li><strong>Données corporatives &amp; financières :</strong> Statuts de la SAS, dépôts légaux aux greffes (Infogreffe, Pappers), billetteries et rapports d&apos;activité des compétitions.</li>
                <li><strong>Prises de parole directes des dirigeants :</strong> Entretiens et déclarations publiques de <em>Pascal Biojout</em> (fondateur) et <em>Gaëtan Muller</em> (président depuis 2015).</li>
                <li><strong>Documents institutionnels des commanditaires :</strong> Dossiers de presse officiels de la NBA (NBA Paris Games), de la LNB (All Star Game), de la WTA (Open Capfinances), et délibérations des conseils métropolitains (Métropole Rouen Normandie, Ville de Paris).</li>
              </ul>
            </div>

            {/* 2.b QUALITÉ DE L'INFORMATION */}
            <div className="border-l-4 border-indigo-600 pl-4 py-1 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  b. Qualité de l’information
                </h3>
                <button
                  onClick={() => onNavigateToDossierPage(6)}
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-700 hover:text-indigo-900 font-medium bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200 transition-colors cursor-pointer"
                >
                  <span>Dossier Page 6 (Portefeuille)</span>
                  <ArrowRight size={12} />
                </button>
              </div>
              <p>
                <strong>Fiabilité, exactitude et recoupement systématique :</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-2 text-xs sm:text-sm">
                <li>Les données d&apos;audience et de fréquentation ont été vérifiées auprès de la presse économique et sportive spécialisée (<em>L&apos;Équipe, Sport Stratégies, SportBusiness.Club</em>).</li>
                <li>Les métriques d&apos;affluence sont réelles et étayées : <strong>800 bénévoles et 10 000 coureurs</strong> sur le Seine-Marathon 76 ; <strong>15 000 spectateurs</strong> à l&apos;Accor Arena pour le All Star Game LNB ; <strong>21 000 spectateurs</strong> au Kindarena pour le WTA 250 de Rouen.</li>
                <li>Aucune spéculation gratuite : distinction stricte entre bilans comptables consolidés et estimations de flux indirects.</li>
              </ul>
            </div>

            {/* 2.c JOUER SUR PLUSIEURS TABLEAUX & PROFESSIONNALISATION */}
            <div className="border-l-4 border-emerald-600 pl-4 py-1 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  c. Est-ce que l’organisation choisie vous permet de jouer sur plusieurs tableaux ?
                </h3>
                <button
                  onClick={() => onNavigateToDossierPage(5)}
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-900 font-medium bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 transition-colors cursor-pointer"
                >
                  <span>Dossier Page 5 (Alliances)</span>
                  <ArrowRight size={12} />
                </button>
              </div>
              <p>
                <strong>Oui, de façon exceptionnelle. Sport Plus Conseil joue sur 5 tableaux stratégiques complémentaires :</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100 text-xs">
                  <span className="font-bold text-emerald-900 block mb-1">1. Sport-Spectacle d&apos;Élite Mondiale</span>
                  Opérateur délégué des <em>NBA Paris Games</em> et promoteur du circuit mondial féminin <em>WTA 250 Open Capfinances Rouen</em>.
                </div>
                <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100 text-xs">
                  <span className="font-bold text-emerald-900 block mb-1">2. Événementiel de Masse &amp; Populaire</span>
                  Organisateur exclusif du <em>Seine-Marathon 76</em> (10 000 dossards, 800 bénévoles, implication de la métropole).
                </div>
                <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100 text-xs">
                  <span className="font-bold text-emerald-900 block mb-1">3. Indoor &amp; Ligues Professionnelles</span>
                  Coproducteur officiel du <em>All Star Game LNB</em> à l&apos;Accor Arena (guichets fermés consécutifs depuis plus de 15 ans).
                </div>
                <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100 text-xs">
                  <span className="font-bold text-emerald-900 block mb-1">4. Gestion &amp; Actionnariat de Club</span>
                  Actionnaire majoritaire du <em>RHE 76 - Dragons de Rouen</em> (club le plus titré du hockey sur glace français en Ligue Magnus).
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">
                S&apos;y ajoutent la régie commerciale d&apos;arénas (Palais des Sports de Lyon, Kindarena) et la production audiovisuelle via sa filiale <em>TV Sport Events</em>.
              </p>

              {/* SOUS-QUESTION : PROFESSIONNALISATION */}
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-2">
                <span className="font-bold text-gray-900 text-xs uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Award size={14} className="text-emerald-700" />
                  § En quoi s&apos;illustre la Professionnalisation ?
                </span>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Sport Plus Conseil a opéré une rupture managériale historique : passée d&apos;une agence artisanale d&apos;ingénierie sportive fondée en 1996 par Pascal Biojout à une <strong>entreprise de divertissement sportif ultra-structurée</strong> sous la présidence de Gaëtan Muller. Cette professionnalisation s&apos;exprime par l&apos;alignement sur les cahiers des charges les plus sévères de la planète (NBA et WTA), la mise en place d&apos;un CRM prédictif, la digitalisation complète des parcours d&apos;hospitalités B2B, et une politique RSE certifiée.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ------------------------------------------------------------- */}
        {/* SECTION 3.A : ANALYSE DE L'ENVIRONNEMENT */}
        {/* ------------------------------------------------------------- */}
        <section id="section-3a" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                3.a
              </span>
              <h2 className="text-lg font-bold text-gray-900 font-serif">
                3.a. Analyse de l’environnement
              </h2>
            </div>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
              <Compass size={12} /> Macro &amp; Micro-environnement
            </span>
          </div>

          <div className="p-6 space-y-6 text-sm text-gray-700 leading-relaxed">
            
            {/* QUELS OUTILS */}
            <div className="border-l-4 border-amber-600 pl-4 py-1 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  § Quel(s) outil(s) mobilisé(s) ?
                </h3>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onNavigateToDossierPage(7)}
                    className="text-xs text-amber-700 hover:text-amber-900 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200 transition-colors cursor-pointer"
                  >
                    P.7 PESTEL
                  </button>
                  <button
                    onClick={() => onNavigateToDossierPage(10)}
                    className="text-xs text-amber-700 hover:text-amber-900 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200 transition-colors cursor-pointer"
                  >
                    P.10 Porter
                  </button>
                  <button
                    onClick={() => onNavigateToDossierPage(11)}
                    className="text-xs text-amber-700 hover:text-amber-900 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200 transition-colors cursor-pointer"
                  >
                    P.11 SWOT
                  </button>
                </div>
              </div>
              <p>
                Trois outils théoriques complémentaires issus du management stratégique :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
                <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100">
                  <strong className="text-amber-900 block mb-1">1. Matrice PESTEL (Macro)</strong>
                  Étude exhaustive des 6 dimensions : Politique, Économique, Sociale, Technologique, Écologique et Légale.
                </div>
                <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100">
                  <strong className="text-amber-900 block mb-1">2. 5 Forces (+1) de Porter (Micro)</strong>
                  Cartographie des pressions concurrentielles, du pouvoir des ayants droit, et de l&apos;intervention régalienne de l&apos;État.
                </div>
                <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100">
                  <strong className="text-amber-900 block mb-1">3. Diagnostic SWOT</strong>
                  Synthèse croisée des Forces / Faiblesses internes face aux Opportunités / Menaces externes.
                </div>
              </div>
            </div>

            {/* PERTINENCE DE L'OUTIL PAR RAPPORT À L'ORGANISATION CHOISIE */}
            <div className="border-l-4 border-purple-600 pl-4 py-1 space-y-3">
              <h3 className="font-bold text-gray-900 text-base">
                § Pertinence de l’outil par rapport à l’organisation choisie
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="bg-purple-50/40 p-3.5 rounded-lg border border-purple-100">
                  <strong className="text-purple-950 font-serif block mb-1 text-sm">
                    Pourquoi le PESTEL est-il pertinent pour une OS 2 ?
                  </strong>
                  <p className="text-gray-700">
                    Contrairement aux organisations de niveau 1 (fédérations ou ligues) qui disposent d&apos;une autorité réglementaire et d&apos;un monopole délégué par l&apos;État, une organisation sportive de niveau 2 comme Sport Plus Conseil est une <strong>société commerciale privée exposée de plein fouet aux variables macro-économiques</strong>. Elle ne maîtrise ni les arrêtés préfectoraux de sécurité, ni l&apos;inflation des coûts de l&apos;énergie, ni les arbitrages de subventions publiques des collectivités. Le PESTEL est donc indispensable pour identifier les risques régaliens et les fenêtres sociétales favorables (parité, sport-santé).
                  </p>
                </div>

                <div className="bg-purple-50/40 p-3.5 rounded-lg border border-purple-100">
                  <strong className="text-purple-950 font-serif block mb-1 text-sm">
                    Pourquoi les 5 Forces (+1) de Porter sont-elles pertinentes ?
                  </strong>
                  <p className="text-gray-700">
                    Sport Plus Conseil opère au cœur d&apos;un <strong>marché biface</strong> : elle doit négocier en amont avec des fournisseurs/ayants droit monopolistiques tout-puissants (la NBA ou la WTA imposant des cahiers des charges drastiques), tout en commercialisant en aval auprès de spectateurs et d&apos;entreprises courtisés par une multitude de substituts de divertissement (concerts, streaming, parcs à thème). L&apos;intensité concurrentielle y est exacerbée par la présence de mastodontes mondiaux (Live Nation, Infront, IMG).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ------------------------------------------------------------- */}
        {/* SECTION 3.B : ANALYSE DU MODÈLE D'AFFAIRES */}
        {/* ------------------------------------------------------------- */}
        <section id="section-3b" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                3.b
              </span>
              <h2 className="text-lg font-bold text-gray-900 font-serif">
                3.b. Analyse du modèle d’affaires (Business Model)
              </h2>
            </div>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
              <Layers size={12} /> Modèle RCOV &amp; Parties Prenantes
            </span>
          </div>

          <div className="p-6 space-y-6 text-sm text-gray-700 leading-relaxed">
            
            {/* PARTIES PRENANTES APPORTEUSES DE RESSOURCES */}
            <div className="border-l-4 border-blue-600 pl-4 py-1 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  § Arrivez-vous facilement à identifier les parties prenantes apporteuses de ressources ?
                </h3>
                <button
                  onClick={() => onNavigateToDossierPage(13)}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-medium bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 transition-colors cursor-pointer"
                >
                  <span>Dossier Page 13 (Stakeholders)</span>
                  <ArrowRight size={12} />
                </button>
              </div>
              <p>
                <strong>Oui, en mobilisant la théorie des parties prenantes d&apos;Edward Freeman (1984) :</strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <strong className="text-gray-900 block mb-1">Parties prenantes primaires (contractuelles) :</strong>
                  Ayants droit sportifs (NBA, WTA, LNB), Collectivités locales (Métropole Rouen Normandie, Ville de Paris), Entreprises partenaires &amp; sponsors B2B, Spectateurs B2C, Exploitants d&apos;arénas (Accor Arena, Kindarena).
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <strong className="text-gray-900 block mb-1">Parties prenantes secondaires (institutionnelles &amp; sociales) :</strong>
                  Bénévoles associatifs (800 sur le marathon, 200 sur le tennis), Préfecture &amp; forces de sécurité, Riverains, Fédérations sportives délégataires (FFBB, FFT, FFA, FFHG), Médias régionaux et nationaux.
                </div>
              </div>
            </div>

            {/* DÉFINITION DU MODÈLE D'AFFAIRES */}
            <div className="border-l-4 border-teal-600 pl-4 py-1 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  § Êtes-vous capable de définir le modèle d’affaires de votre organisation ?
                </h3>
                <button
                  onClick={() => onNavigateToDossierPage(12)}
                  className="inline-flex items-center gap-1.5 text-xs text-teal-700 hover:text-teal-900 font-medium bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 transition-colors cursor-pointer"
                >
                  <span>Dossier Page 12 (BM RCOV)</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              {/* SOUS-QUESTION 1 : FLUX FINANCIERS */}
              <div className="bg-teal-50/40 p-4 rounded-lg border border-teal-100 space-y-2 text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold block flex items-center gap-1.5">
                  <BarChart3 size={15} className="text-teal-700" />
                  • D’où viennent les flux de revenus financiers ?
                </strong>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 pl-1 text-xs sm:text-sm">
                  <li><strong>Hospitalités B2B &amp; Sponsoring privé (45-50 % des revenus) :</strong> Vente de loges VIP, relations publiques d&apos;entreprises, packages de visibilité pour grands comptes et PME régionales.</li>
                  <li><strong>Billetterie grand public B2C (25-30 %) :</strong> Vente de places pour les tournois et matchs d&apos;élite, droits d&apos;inscription aux courses de masse (10 000 dossards marathon).</li>
                  <li><strong>Marchés publics et subventions d&apos;animation territoriale (15-20 %) :</strong> Prestations de service et conventions d&apos;objectifs avec les métropoles et départements pour animer les arénas publiques.</li>
                  <li><strong>Droits délégués, régie d&apos;arénas &amp; prestations TV (5-10 %) :</strong> Commissions d&apos;exploitation et production exécutive de flux audiovisuels via <em>TV Sport Events</em>.</li>
                </ol>
              </div>

              {/* SOUS-QUESTION 2 : RESSOURCES AUTRES QUE FINANCIÈRES */}
              <div className="bg-teal-50/40 p-4 rounded-lg border border-teal-100 space-y-2 text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold block flex items-center gap-1.5">
                  <Users size={15} className="text-teal-700" />
                  • Y-a-t-il d’autres ressources autres que financières apportées par les parties prenantes ?
                </strong>
                <p className="text-gray-700">
                  <strong>Oui, des ressources immatérielles, réputationnelles et humaines capitales :</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-xs">
                  <div className="bg-white p-2.5 rounded border border-teal-200/60">
                    <strong className="text-teal-900 block mb-0.5">Légitimité &amp; Label institutionnel :</strong>
                    L&apos;octroi exclusif des droits NBA ou de la franchise WTA confère une autorité sportive mondiale inaccessible aux agences concurrentes.
                  </div>
                  <div className="bg-white p-2.5 rounded border border-teal-200/60">
                    <strong className="text-teal-900 block mb-0.5">Ressources humaines bénévoles :</strong>
                    Engagement gratuit de 800 volontaires sur le Seine-Marathon et 200 sur l&apos;Open de tennis (ravitaillements, accueil, ramasseurs).
                  </div>
                  <div className="bg-white p-2.5 rounded border border-teal-200/60">
                    <strong className="text-teal-900 block mb-0.5">Infrastructures publiques mises à disposition :</strong>
                    Fermeture et mise à disposition de la voirie publique urbaine par les mairies, accès prioritaire aux grandes arénas (Kindarena).
                  </div>
                  <div className="bg-white p-2.5 rounded border border-teal-200/60">
                    <strong className="text-teal-900 block mb-0.5">Sécurisation et autorisations régaliennes :</strong>
                    Arrêtés préfectoraux, déploiement des forces de police et du SAMU sans refacturation commerciale intégrale.
                  </div>
                </div>
              </div>

              {/* SOUS-QUESTION 3 : COMMENT ELLES CONFIGURENT LE BUSINESS MODEL */}
              <div className="bg-teal-50/40 p-4 rounded-lg border border-teal-100 space-y-2 text-xs sm:text-sm">
                <strong className="text-teal-950 font-bold block flex items-center gap-1.5">
                  <Target size={15} className="text-teal-700" />
                  • Comment ces ressources s’inscrivent dans le modèle d’affaires et le configurent ?
                </strong>
                <p className="text-gray-700">
                  Selon le modèle <strong>RCOV (Demil &amp; Lecocq, 2010)</strong>, ces ressources non financières configurent directement le modèle d&apos;affaires en le rendant <strong>extrêmement agile et allégé en capital fixe (Asset-Light Model)</strong>. Une PME de 15 salariés permanents n&apos;aurait jamais la capacité financière de posséder en propre des arénas de 6 000 à 15 000 places ni de rémunérer 800 agents logistiques sur un week-end. En captant des ressources publiques et bénévoles, Sport Plus Conseil transforme ces contributions externes en leviers d&apos;efficacité opérationnelle, conservant une rentabilité nette protégée de l&apos;amortissement d&apos;infrastructures lourdes.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ------------------------------------------------------------- */}
        {/* SECTION 3.C : LES STRATÉGIES À L'ŒUVRE */}
        {/* ------------------------------------------------------------- */}
        <section id="section-3c" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                3.c
              </span>
              <h2 className="text-lg font-bold text-gray-900 font-serif">
                3.c. Les stratégies à l’œuvre
              </h2>
            </div>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
              <TrendingUp size={12} /> Triptyque Stratégique
            </span>
          </div>

          <div className="p-6 space-y-6 text-sm text-gray-700 leading-relaxed">
            
            {/* CARACTÉRISATION DES 3 TYPES DE STRATÉGIES */}
            <div className="border-l-4 border-rose-600 pl-4 py-1 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  § Arrivez-vous à trouver des éléments pour caractériser les 3 types de stratégies à l’œuvre ?
                </h3>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onNavigateToDossierPage(16)}
                    className="text-xs text-rose-700 hover:text-rose-900 font-medium bg-rose-50 px-2 py-0.5 rounded border border-rose-200 transition-colors cursor-pointer"
                  >
                    P.16 Sport
                  </button>
                  <button
                    onClick={() => onNavigateToDossierPage(17)}
                    className="text-xs text-rose-700 hover:text-rose-900 font-medium bg-rose-50 px-2 py-0.5 rounded border border-rose-200 transition-colors cursor-pointer"
                  >
                    P.17 B2B
                  </button>
                  <button
                    onClick={() => onNavigateToDossierPage(18)}
                    className="text-xs text-rose-700 hover:text-rose-900 font-medium bg-rose-50 px-2 py-0.5 rounded border border-rose-200 transition-colors cursor-pointer"
                  >
                    P.18 Territoire
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-rose-50/50 p-3 rounded-lg border border-rose-100">
                  <strong className="text-rose-950 font-bold block mb-1 text-sm">1. Stratégie Sportive</strong>
                  Sélection d&apos;actifs d&apos;élite mondiale (NBA, WTA 250, All Star Game LNB) et maîtrise directe d&apos;une franchise professionnelle (actionnariat majoritaire des Dragons de Rouen en Ligue Magnus).
                </div>
                <div className="bg-rose-50/50 p-3 rounded-lg border border-rose-100">
                  <strong className="text-rose-950 font-bold block mb-1 text-sm">2. Stratégie Commerciale</strong>
                  Monétisation B2B premium : packages d&apos;hospitalités haut de gamme, loges VIP, club d&apos;affaires territorial, merchandising et régie commerciale exclusive.
                </div>
                <div className="bg-rose-50/50 p-3 rounded-lg border border-rose-100">
                  <strong className="text-rose-950 font-bold block mb-1 text-sm">3. Stratégie Territoriale &amp; RSE</strong>
                  Ancrage intime auprès des métropoles régionales (Rouen, Paris, Lyon), promotion de la parité femme-homme (WTA), inclusion sociale et chartes d&apos;éco-responsabilité événementielle.
                </div>
              </div>
            </div>

            {/* LIEN DE PARENTÉ */}
            <div className="border-l-4 border-orange-600 pl-4 py-1 space-y-2">
              <h3 className="font-bold text-gray-900 text-base">
                § Arrivez-vous à trouver un lien de parenté de ces stratégies ?
              </h3>
              <p>
                <strong>Un lien de parenté organique et systémique :</strong>
              </p>
              <div className="bg-orange-50/40 p-3 rounded-lg border border-orange-200 text-xs text-orange-950 font-medium">
                La stratégie sportive génère l&apos;attractivité et l&apos;émotion collective ➔ La stratégie commerciale transforme cette visibilité en flux de trésorerie B2B à haute marge ➔ La stratégie territoriale réinvestit cette rentabilité dans l&apos;écosystème local pour garantir le soutien politique et l&apos;accès aux infrastructures publiques. Chaque stratégie est la condition d&apos;existence des deux autres.
              </div>
            </div>

            {/* MENACES OU OPPORTUNITÉS */}
            <div className="border-l-4 border-amber-600 pl-4 py-1 space-y-2">
              <h3 className="font-bold text-gray-900 text-base">
                • Correspondent-elles à des menaces ou des opportunités de l’environnement ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  <strong className="text-emerald-900 block mb-1">Opportunités captées :</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-emerald-950">
                    <li>Explosion de l&apos;intérêt pour le sport féminin (création du WTA 250 de Rouen).</li>
                    <li>Volonté des entreprises régionales de privilégier des réseaux VIP locaux.</li>
                    <li>Dynamique post-Paris 2024 favorable à la pratique de masse (Seine-Marathon).</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <strong className="text-amber-900 block mb-1">Menaces neutralisées :</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-amber-950">
                    <li>Inflation brutale des coûts de sécurité et d&apos;énergie (absorbée par les marges VIP).</li>
                    <li>Prédation par les multinationales du divertissement (contrée par l&apos;ancrage local).</li>
                    <li>Risque de contestation écologique (neutralisé par les actions RSE certifiées).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RENFORCEMENT DU MODÈLE D'AFFAIRES & COMPLÉMENTARITÉ */}
            <div className="border-l-4 border-blue-600 pl-4 py-1 space-y-3">
              <h3 className="font-bold text-gray-900 text-base">
                § En quoi renforcent-elles le modèle d’affaires et en quoi sont-elles complémentaires ?
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <p>
                  <strong>Renforcement du modèle d&apos;affaires :</strong> Ces stratégies dé-risquent structurellement le modèle économique de l&apos;agence. En pré-vendant les loges B2B et en contractant des partenariats pluriannuels avec les collectivités avant le début de chaque événement, Sport Plus Conseil s&apos;assure de rentabiliser ses opérations indépendamment de la performance sportive des joueurs ou des conditions météorologiques du week-end.
                </p>
                <p>
                  <strong>Complémentarité totale et symbiotique :</strong> Une stratégie sportive isolée produirait des pertes colossales sans la monétisation B2B ; une stratégie commerciale sans prestige sportif n&apos;attirerait aucun sponsor ; et une stratégie événementielle sans ancrage territorial et RSE verrait ses autorisations administratives révoquées par les pouvoirs publics.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ------------------------------------------------------------- */}
        {/* SECTION 3.D : ANALYSE PROSPECTIVE */}
        {/* ------------------------------------------------------------- */}
        <section id="section-3d" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                3.d
              </span>
              <h2 className="text-lg font-bold text-gray-900 font-serif">
                3.d. Analyse prospective
              </h2>
            </div>
            <button
              onClick={() => onNavigateToDossierPage(20)}
              className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-medium bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 transition-colors cursor-pointer"
            >
              <span>Dossier Page 20 (Mintzberg)</span>
              <ArrowRight size={12} />
            </button>
          </div>

          <div className="p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              L&apos;analyse prospective articule la théorie des configurations organisationnelles et le concept de <strong>stratégie émergente versus délibérée de Henry Mintzberg (2009)</strong>. Quatre trajectoires prospectives d&apos;avenir sont formalisées pour l&apos;agence à l&apos;horizon 2030 :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block mb-1">1. Intégration verticale &amp; multipropriété de clubs</strong>
                Renforcer la détention directe d&apos;actifs sportifs pérennes (à l&apos;instar des Dragons de Rouen) pour lisser la saisonnalité des revenus événementiels.
              </div>
              <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block mb-1">2. Fan Experience phygitale &amp; billetterie Web3</strong>
                Intégration d&apos;outils immersifs de réalité augmentée dans les arénas et sécurisation des billets contre la fraude.
              </div>
              <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block mb-1">3. Conditionnalité écologique stricte (Zéro déchet)</strong>
                Transformation des épreuves de masse (Seine-Marathon 76) en modèles d&apos;économie circulaire zéro déchet plastique et transport décarboné.
              </div>
              <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block mb-1">4. Alliances défensives d&apos;agences indépendantes</strong>
                Constitution d&apos;un réseau collaboratif d&apos;agences françaises indépendantes face à la tentative d&apos;oligopole des multinationales américaines.
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* PIED DE PAGE DE LA FICHE D'ÉVALUATION */}
      <div className="mt-12 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 print:text-black print:border-black">
        <div>
          <span>Document de synthèse d&apos;évaluation • Université de Rouen Normandie</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="text-blue-700 hover:text-blue-900 font-medium underline cursor-pointer print:hidden"
          >
            Imprimer cette fiche TD 1
          </button>
          <button
            onClick={onBackToDossier}
            className="bg-[#1c2d42] text-white px-3.5 py-1.5 rounded-md hover:bg-[#2e4768] transition-colors cursor-pointer print:hidden font-serif"
          >
            Retourner au Dossier (21 pages)
          </button>
        </div>
      </div>

    </div>
  )
}
