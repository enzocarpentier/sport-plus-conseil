import React from 'react'

interface DossierCoverPageProps {
  id?: string
  pageNumber?: number
  totalPages?: number
}

export const DossierCoverPage: React.FC<DossierCoverPageProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="a4-page-container bg-white text-black shadow-md relative flex flex-col justify-between select-text"
      style={{
        boxSizing: 'border-box'
      }}
    >
      {/* En-tête universitaire officiel conforme à la fiche d'évaluation */}
      <div className="text-center space-y-0.5">
        <p className="text-[12pt] font-bold uppercase tracking-wider">
          Université de Rouen Normandie
        </p>
        <p className="text-[10.5pt] text-gray-800">
          UFR STAPS • Master Management du Sport
        </p>
        <p className="text-[10pt] text-gray-700 italic">
          UE Stratégie des Organisations Sportives — Enseignant : M. Aurélien FRANÇOIS
        </p>
        <div className="w-20 h-px bg-black mx-auto mt-2" />
      </div>

      {/* Centre : Titre, nature et objet d'étude concret */}
      <div className="text-center space-y-4 py-4">
        <p className="text-[10pt] uppercase tracking-[0.2em] text-gray-600 font-medium">
          Dossier d&apos;Évaluation Continue — Note Stratégique (75 %)
        </p>

        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-[15.5pt] font-bold leading-snug uppercase max-w-xl mx-auto outline-none"
        >
          Analyse Stratégique et Modèle d&apos;Affaires d&apos;une Organisation Sportive de Niveau 2 : Le Cas de Sport Plus Conseil et de l&apos;Open Capfinances (WTA 250)
        </h1>

        <div className="w-12 h-px bg-black mx-auto" />

        <p
          contentEditable
          suppressContentEditableWarning
          className="text-[11pt] italic leading-relaxed max-w-lg mx-auto outline-none text-gray-800"
        >
          Étude empirique de l&apos;agence (culture, fusions, portefeuille), diagnostics PESTEL et SWOT, modélisation des ressources et compétences (VRIO), cartographie des parties prenantes (Freeman) et prospective stratégique.
        </p>
      </div>

      {/* Bas de page compact : Les 5 étudiants, encadrement et mention */}
      <div className="space-y-3 pt-3 border-t border-black text-[11pt]">
        <div className="grid grid-cols-2 gap-6 items-start text-left">
          {/* Auteurs du dossier formatés de manière compacte */}
          <div>
            <p className="font-bold text-[10pt] uppercase tracking-wider mb-1.5">
              Dossier rédigé et présenté par :
            </p>
            <div
              contentEditable
              suppressContentEditableWarning
              className="outline-none text-[10.5pt] leading-snug space-y-0.5 font-medium"
            >
              <p>• Louis LIEURY &amp; Romain LAVICE</p>
              <p>• Kilian LECOMTE &amp; Clément USUBELLI</p>
              <p>• Enzo CARPENTIER</p>
              <p className="text-[9.5pt] text-gray-600 font-normal pt-1">
                Promotion Master Management du Sport — UFR STAPS
              </p>
            </div>
          </div>

          {/* Enseignant référent */}
          <div className="text-right">
            <p className="font-bold text-[10pt] uppercase tracking-wider mb-1.5">
              À l&apos;attention de :
            </p>
            <div
              contentEditable
              suppressContentEditableWarning
              className="outline-none text-[10.5pt] leading-snug"
            >
              <p className="font-semibold">M. Aurélien FRANÇOIS</p>
              <p className="text-[9.5pt] text-gray-700">Maître de conférences en Management du Sport</p>
              <p className="text-[9.5pt] text-gray-600 italic mt-1">Remise officielle : Décembre 2026</p>
            </div>
          </div>
        </div>

        {/* Ligne finale d'archivage sur une seule ligne */}
        <div className="flex justify-between items-center text-[9.5pt] text-gray-700 pt-2 border-t border-gray-300">
          <span>Organisation étudiée : Sport Plus Conseil &amp; Open Capfinances</span>
          <span className="italic">Année 2026–2027</span>
          <span>Mont-Saint-Aignan, Rouen</span>
        </div>
      </div>
    </div>
  )
}
