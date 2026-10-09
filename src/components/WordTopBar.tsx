import React, { useState } from 'react'
import {
  Save,
  RotateCcw,
  RotateCw,
  Printer,
  Search,
  Share2,
  CheckCircle2,
  FileText,
  Download,
  Users
} from 'lucide-react'

interface WordTopBarProps {
  title: string
  onTitleChange: (newTitle: string) => void
  onPrint: () => void
  lastSavedText?: string
}

export const WordTopBar: React.FC<WordTopBarProps> = ({
  title,
  onTitleChange,
  onPrint,
  lastSavedText = 'Enregistré'
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [tempTitle, setTempTitle] = useState(title)
  const [showShareModal, setShowShareModal] = useState(false)

  const handleTitleSubmit = () => {
    if (tempTitle.trim()) {
      onTitleChange(tempTitle.trim())
    } else {
      setTempTitle(title)
    }
    setIsEditingTitle(false)
  }

  return (
    <header className="no-print bg-[#103f91] text-white flex flex-col select-none border-b border-[#0b2c66]">
      {/* Barre supérieure principale */}
      <div className="h-11 px-3 flex items-center justify-between gap-3 text-xs">
        {/* Gauche : Logo Word + Outils d'accès rapide */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center justify-center w-7 h-7 bg-[#0f4c81] hover:bg-[#185abd] text-white rounded font-bold text-sm tracking-wider shadow-inner cursor-pointer" title="Microsoft Word">
            W
          </div>

          <div className="h-4 w-px bg-white/20 mx-1" />

          {/* Outils d'accès rapide */}
          <button
            onClick={() => alert('Document enregistré avec succès !')}
            title="Enregistrer (Ctrl+S)"
            className="p-1.5 hover:bg-white/15 rounded transition text-white/90 hover:text-white"
          >
            <Save size={15} />
          </button>
          <button
            title="Annuler (Ctrl+Z)"
            className="p-1.5 hover:bg-white/15 rounded transition text-white/90 hover:text-white"
          >
            <RotateCcw size={15} />
          </button>
          <button
            title="Rétablir (Ctrl+Y)"
            className="p-1.5 hover:bg-white/15 rounded transition text-white/90 hover:text-white"
          >
            <RotateCw size={15} />
          </button>
          <button
            onClick={onPrint}
            title="Imprimer / Exporter PDF (Ctrl+P)"
            className="p-1.5 hover:bg-white/15 rounded transition text-white/90 hover:text-white"
          >
            <Printer size={15} />
          </button>
        </div>

        {/* Centre : Titre du document & Recherche Word */}
        <div className="flex items-center gap-3 flex-1 max-w-2xl justify-center">
          {/* Nom du document éditable */}
          <div className="flex items-center gap-2 group cursor-pointer bg-black/15 hover:bg-black/25 px-2.5 py-1 rounded-md transition border border-transparent hover:border-white/20">
            <FileText size={14} className="text-white/80" />
            {isEditingTitle ? (
              <input
                type="text"
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                onBlur={handleTitleSubmit}
                onKeyDown={(e) => e.key === 'Enter' && handleTitleSubmit()}
                autoFocus
                className="bg-white text-gray-900 px-2 py-0.5 rounded text-xs outline-none font-medium w-64 shadow"
              />
            ) : (
              <span
                onClick={() => setIsEditingTitle(true)}
                className="font-medium tracking-wide truncate max-w-xs sm:max-w-md text-white group-hover:underline"
                title="Cliquer pour renommer"
              >
                {title}
              </span>
            )}
            <span className="flex items-center gap-1 text-[10px] text-white/70 bg-white/10 px-1.5 py-0.2 rounded font-normal">
              <CheckCircle2 size={11} className="text-emerald-400" />
              {lastSavedText}
            </span>
          </div>

          {/* Barre de recherche style Word / Tell me what to do */}
          <div className="hidden lg:flex items-center bg-white/10 hover:bg-white/20 focus-within:bg-white focus-within:text-gray-900 text-white/80 rounded-md px-2.5 py-1 gap-2 text-xs w-60 transition border border-white/10 focus-within:border-white">
            <Search size={13} className="text-current" />
            <input
              type="text"
              placeholder="Rechercher (Alt+Q)"
              className="bg-transparent border-none outline-none w-full text-xs placeholder:text-white/60 focus:placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Droite : Profil & Partager & Export PDF */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 bg-white text-[#103f91] hover:bg-blue-50 px-3 py-1 rounded font-semibold text-xs transition shadow-sm"
            title="Exporter directement le dossier au format A4 PDF"
          >
            <Download size={13} />
            <span>Exporter PDF</span>
          </button>

          <button
            onClick={() => setShowShareModal(true)}
            className="hidden sm:flex items-center gap-1.5 bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded transition text-xs font-medium"
          >
            <Share2 size={13} />
            <span>Partager</span>
          </button>

          <div
            className="w-7 h-7 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white/30 ml-1 cursor-pointer"
            title="Enzo - Sport Plus Conseil"
          >
            E
          </div>
        </div>
      </div>

      {/* Modal Partage simple */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-gray-800 rounded-lg shadow-2xl max-w-md w-full p-6 animate-in fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                <Users size={18} className="text-blue-700" />
                Partager le dossier Word
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                &times;
              </button>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              Ce dossier est prêt pour consultation ou impression au format A4 officiel de Sport Plus Conseil.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={window.location.href}
                className="flex-1 border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-gray-50 text-gray-700 select-all"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Lien copié dans le presse-papier !')
                  setShowShareModal(false)
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded font-medium"
              >
                Copier
              </button>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowShareModal(false)}
                className="px-4 py-1.5 border border-gray-300 rounded text-xs hover:bg-gray-100"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
