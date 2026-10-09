import React from 'react'
import {
  CheckCheck,
  BookOpen,
  FileText,
  Globe,
  Minus,
  Plus
} from 'lucide-react'

interface WordStatusBarProps {
  currentPage: number
  totalPages: number
  wordCount: number
  zoom: number
  onZoomChange: (zoom: number) => void
}

export const WordStatusBar: React.FC<WordStatusBarProps> = ({
  currentPage,
  totalPages,
  wordCount,
  zoom,
  onZoomChange
}) => {
  const handleZoomIn = () => {
    onZoomChange(Math.min(zoom + 10, 160))
  }

  const handleZoomOut = () => {
    onZoomChange(Math.max(zoom - 10, 50))
  }

  return (
    <footer className="no-print h-6 bg-[#103f91] text-white flex items-center justify-between px-3 text-[11px] select-none border-t border-[#0b2c66] flex-shrink-0 z-30">
      {/* Gauche : Indicateurs document */}
      <div className="flex items-center gap-3">
        <button
          className="hover:bg-white/15 px-1.5 py-0.5 rounded transition font-medium"
          title="Cliquez pour naviguer entre les pages"
        >
          Page {currentPage} sur {totalPages}
        </button>

        <div className="h-3 w-px bg-white/20" />

        <button
          className="hover:bg-white/15 px-1.5 py-0.5 rounded transition"
          title="Statistiques du document"
        >
          {wordCount} mots
        </button>

        <div className="h-3 w-px bg-white/20 hidden sm:block" />

        <div className="hidden sm:flex items-center gap-1 text-white/90">
          <CheckCheck size={12} className="text-emerald-400" />
          <span>Français (France)</span>
        </div>
      </div>

      {/* Droite : Modes d'affichage & Curseur Zoom */}
      <div className="flex items-center gap-2">
        {/* Modes d'affichage */}
        <div className="hidden md:flex items-center gap-0.5 mr-2">
          <button
            title="Mode Lecture"
            className="p-1 hover:bg-white/15 rounded text-white/80 hover:text-white"
          >
            <BookOpen size={12} />
          </button>
          <button
            title="Mode Page (Actuel)"
            className="p-1 bg-white/20 rounded text-white font-bold"
          >
            <FileText size={12} />
          </button>
          <button
            title="Mode Web"
            className="p-1 hover:bg-white/15 rounded text-white/80 hover:text-white"
          >
            <Globe size={12} />
          </button>
        </div>

        {/* Zoom */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleZoomOut}
            title="Zoom arrière"
            className="p-0.5 hover:bg-white/15 rounded text-white"
          >
            <Minus size={12} />
          </button>

          <input
            type="range"
            min="50"
            max="150"
            step="5"
            value={zoom}
            onChange={(e) => onZoomChange(Number(e.target.value))}
            className="w-16 sm:w-24 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
          />

          <button
            onClick={handleZoomIn}
            title="Zoom avant"
            className="p-0.5 hover:bg-white/15 rounded text-white"
          >
            <Plus size={12} />
          </button>

          <button
            onClick={() => onZoomChange(100)}
            className="w-9 text-right hover:bg-white/15 px-1 py-0.5 rounded font-mono text-[10px]"
            title="Réinitialiser à 100%"
          >
            {zoom}%
          </button>
        </div>
      </div>
    </footer>
  )
}
