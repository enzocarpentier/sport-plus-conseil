import React from 'react'
import type {
  RibbonTab,
  PageOrientation
} from '../types/word'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  FilePlus,
  Table,
  Image as ImageIcon,
  Columns,
  Copy,
  Scissors,
  ClipboardPaste,
  FileSpreadsheet,
  PieChart,
  Palette,
  Maximize2
} from 'lucide-react'

interface WordRibbonProps {
  activeTab: RibbonTab
  onTabChange: (tab: RibbonTab) => void
  fontFamily: string
  onFontFamilyChange: (font: string) => void
  fontSize: number
  onFontSizeChange: (size: number) => void
  isBold: boolean
  onToggleBold: () => void
  isItalic: boolean
  onToggleItalic: () => void
  isUnderline: boolean
  onToggleUnderline: () => void
  alignment: 'left' | 'center' | 'right' | 'justify'
  onAlignmentChange: (align: 'left' | 'center' | 'right' | 'justify') => void
  showRuler: boolean
  onToggleRuler: () => void
  showNavPane: boolean
  onToggleNavPane: () => void
  zoom: number
  onZoomChange: (zoom: number) => void
  orientation: PageOrientation
  onOrientationChange: (orientation: PageOrientation) => void
  onAddPage: () => void
  onApplyStyle: (styleName: string) => void
}

export const WordRibbon: React.FC<WordRibbonProps> = ({
  activeTab,
  onTabChange,
  fontFamily,
  onFontFamilyChange,
  fontSize,
  onFontSizeChange,
  isBold,
  onToggleBold,
  isItalic,
  onToggleItalic,
  isUnderline,
  onToggleUnderline,
  alignment,
  onAlignmentChange,
  showRuler,
  onToggleRuler,
  showNavPane,
  onToggleNavPane,
  zoom,
  onZoomChange,
  orientation,
  onOrientationChange,
  onAddPage,
  onApplyStyle
}) => {
  const tabs: { id: RibbonTab; label: string }[] = [
    { id: 'fichier', label: 'Fichier' },
    { id: 'accueil', label: 'Accueil' },
    { id: 'insertion', label: 'Insertion' },
    { id: 'mise-en-page', label: 'Mise en page' },
    { id: 'affichage', label: 'Affichage' }
  ]

  const fontOptions = ['Calibri', 'Aptos', 'Arial', 'Times New Roman', 'Segoe UI', 'Georgia']
  const sizeOptions = [9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 36]

  return (
    <div className="no-print bg-[#f3f2f1] border-b border-[#d1d1d1] select-none text-gray-800">
      {/* Barre d'onglets du Ruban Word */}
      <div className="flex items-center px-2 pt-0.5 border-b border-[#e1dfdd] bg-[#103f91] text-white">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-t transition-all relative ${
                isActive
                  ? 'bg-[#f3f2f1] text-[#103f91] font-semibold shadow-sm'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#103f91]" />
              )}
            </button>
          )
        })}
      </div>

      {/* Contenu de l'onglet actif du Ruban */}
      <div className="min-h-[92px] px-3 py-1.5 flex items-stretch gap-3 overflow-x-auto text-xs bg-[#f3f2f1]">
        {/* ONGLET ACCUEIL */}
        {activeTab === 'accueil' && (
          <>
            {/* Groupe Presse-papiers */}
            <div className="flex items-center gap-1 pr-3 border-r border-[#d1d1d1]">
              <button
                onClick={() => alert('Contenu collé')}
                className="flex flex-col items-center justify-center p-1.5 hover:bg-[#e1dfdd] rounded transition w-12 text-center"
              >
                <ClipboardPaste size={20} className="text-[#103f91]" />
                <span className="text-[10px] mt-1 text-gray-600">Coller</span>
              </button>
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => alert('Copié')}
                  className="flex items-center gap-1 px-1.5 py-0.5 hover:bg-[#e1dfdd] rounded text-[11px]"
                >
                  <Copy size={12} className="text-gray-600" />
                  <span>Copier</span>
                </button>
                <button
                  onClick={() => alert('Coupé')}
                  className="flex items-center gap-1 px-1.5 py-0.5 hover:bg-[#e1dfdd] rounded text-[11px]"
                >
                  <Scissors size={12} className="text-gray-600" />
                  <span>Couper</span>
                </button>
              </div>
            </div>

            {/* Groupe Police */}
            <div className="flex flex-col justify-between pr-3 border-r border-[#d1d1d1]">
              <div className="flex items-center gap-1 mb-1">
                <select
                  value={fontFamily}
                  onChange={(e) => onFontFamilyChange(e.target.value)}
                  className="h-6 bg-white border border-[#c8c6c4] hover:border-[#8a8886] rounded px-1.5 text-xs text-gray-800 outline-none w-28"
                >
                  {fontOptions.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>

                <select
                  value={fontSize}
                  onChange={(e) => onFontSizeChange(Number(e.target.value))}
                  className="h-6 bg-white border border-[#c8c6c4] hover:border-[#8a8886] rounded px-1 text-xs text-gray-800 outline-none w-14"
                >
                  {sizeOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={onToggleBold}
                  className={`p-1.5 rounded transition ${
                    isBold ? 'bg-[#c7e0f4] text-[#103f91] font-bold' : 'hover:bg-[#e1dfdd] text-gray-700'
                  }`}
                  title="Gras (Ctrl+G)"
                >
                  <Bold size={14} />
                </button>
                <button
                  onClick={onToggleItalic}
                  className={`p-1.5 rounded transition ${
                    isItalic ? 'bg-[#c7e0f4] text-[#103f91]' : 'hover:bg-[#e1dfdd] text-gray-700'
                  }`}
                  title="Italique (Ctrl+I)"
                >
                  <Italic size={14} />
                </button>
                <button
                  onClick={onToggleUnderline}
                  className={`p-1.5 rounded transition ${
                    isUnderline ? 'bg-[#c7e0f4] text-[#103f91]' : 'hover:bg-[#e1dfdd] text-gray-700'
                  }`}
                  title="Souligné (Ctrl+U)"
                >
                  <Underline size={14} />
                </button>
                <div className="h-4 w-px bg-gray-300 mx-0.5" />
                <button
                  onClick={() => onApplyStyle('highlight')}
                  className="p-1.5 hover:bg-[#e1dfdd] rounded text-yellow-600 font-semibold"
                  title="Couleur de surbrillance du texte"
                >
                  <Palette size={14} />
                </button>
              </div>
            </div>

            {/* Groupe Paragraphe */}
            <div className="flex flex-col justify-between pr-3 border-r border-[#d1d1d1]">
              <div className="flex items-center gap-1 mb-1">
                <button
                  onClick={() => alert('Liste à puces')}
                  className="p-1.5 hover:bg-[#e1dfdd] rounded text-gray-700"
                  title="Puces"
                >
                  <List size={14} />
                </button>
                <button
                  onClick={() => alert('Numérotation')}
                  className="p-1.5 hover:bg-[#e1dfdd] rounded text-gray-700"
                  title="Numérotation"
                >
                  <ListOrdered size={14} />
                </button>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onAlignmentChange('left')}
                  className={`p-1.5 rounded transition ${
                    alignment === 'left' ? 'bg-[#c7e0f4] text-[#103f91]' : 'hover:bg-[#e1dfdd] text-gray-700'
                  }`}
                  title="Aligner à gauche"
                >
                  <AlignLeft size={14} />
                </button>
                <button
                  onClick={() => onAlignmentChange('center')}
                  className={`p-1.5 rounded transition ${
                    alignment === 'center' ? 'bg-[#c7e0f4] text-[#103f91]' : 'hover:bg-[#e1dfdd] text-gray-700'
                  }`}
                  title="Centrer"
                >
                  <AlignCenter size={14} />
                </button>
                <button
                  onClick={() => onAlignmentChange('right')}
                  className={`p-1.5 rounded transition ${
                    alignment === 'right' ? 'bg-[#c7e0f4] text-[#103f91]' : 'hover:bg-[#e1dfdd] text-gray-700'
                  }`}
                  title="Aligner à droite"
                >
                  <AlignRight size={14} />
                </button>
                <button
                  onClick={() => onAlignmentChange('justify')}
                  className={`p-1.5 rounded transition ${
                    alignment === 'justify' ? 'bg-[#c7e0f4] text-[#103f91]' : 'hover:bg-[#e1dfdd] text-gray-700'
                  }`}
                  title="Justifier"
                >
                  <AlignJustify size={14} />
                </button>
              </div>
            </div>

            {/* Groupe Galerie de Styles Word */}
            <div className="flex items-center gap-1.5 pr-3 border-r border-[#d1d1d1]">
              <div
                onClick={() => onApplyStyle('Normal')}
                className="w-16 h-14 bg-white border border-[#c8c6c4] hover:border-[#103f91] rounded p-1 cursor-pointer flex flex-col justify-between shadow-xs transition"
              >
                <span className="text-[11px] text-gray-800">AaBbCc</span>
                <span className="text-[9px] text-gray-500 font-medium">Normal</span>
              </div>

              <div
                onClick={() => onApplyStyle('Titre 1')}
                className="w-16 h-14 bg-white border border-[#c8c6c4] hover:border-[#103f91] rounded p-1 cursor-pointer flex flex-col justify-between shadow-xs transition"
              >
                <span className="text-[12px] text-[#103f91] font-bold">AaBb</span>
                <span className="text-[9px] text-[#103f91] font-medium">Titre 1</span>
              </div>

              <div
                onClick={() => onApplyStyle('Titre 2')}
                className="w-16 h-14 bg-white border border-[#c8c6c4] hover:border-[#103f91] rounded p-1 cursor-pointer flex flex-col justify-between shadow-xs transition"
              >
                <span className="text-[11px] text-[#2b579a] font-semibold">AaBb</span>
                <span className="text-[9px] text-[#2b579a] font-medium">Titre 2</span>
              </div>

              <div
                onClick={() => onApplyStyle('Sous-titre')}
                className="w-16 h-14 bg-white border border-[#c8c6c4] hover:border-[#103f91] rounded p-1 cursor-pointer flex flex-col justify-between shadow-xs transition hidden sm:flex"
              >
                <span className="text-[10px] text-gray-500 italic">AaBbCc</span>
                <span className="text-[9px] text-gray-500 font-medium">Sous-titre</span>
              </div>
            </div>
          </>
        )}

        {/* ONGLET INSERTION */}
        {activeTab === 'insertion' && (
          <>
            <div className="flex items-center gap-2 pr-3 border-r border-[#d1d1d1]">
              <button
                onClick={onAddPage}
                className="flex flex-col items-center justify-center p-2 hover:bg-[#e1dfdd] rounded transition w-20 text-center"
              >
                <FilePlus size={20} className="text-[#103f91]" />
                <span className="text-[10px] mt-1 font-medium">Page A4 +</span>
              </button>
            </div>

            <div className="flex items-center gap-2 pr-3 border-r border-[#d1d1d1]">
              <button
                onClick={() => alert('Tableau Word ajouté')}
                className="flex flex-col items-center justify-center p-2 hover:bg-[#e1dfdd] rounded transition w-16 text-center"
              >
                <Table size={20} className="text-[#103f91]" />
                <span className="text-[10px] mt-1">Tableau</span>
              </button>
              <button
                onClick={() => alert('Insérer une illustration ou un logo de Sport Plus Conseil')}
                className="flex flex-col items-center justify-center p-2 hover:bg-[#e1dfdd] rounded transition w-16 text-center"
              >
                <ImageIcon size={20} className="text-emerald-600" />
                <span className="text-[10px] mt-1">Image</span>
              </button>
              <button
                onClick={() => alert('Graphique de performances')}
                className="flex flex-col items-center justify-center p-2 hover:bg-[#e1dfdd] rounded transition w-16 text-center"
              >
                <PieChart size={20} className="text-amber-600" />
                <span className="text-[10px] mt-1">Graphique</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => alert('En-tête et pied de page automatiques pour A4')}
                className="flex flex-col items-center justify-center p-2 hover:bg-[#e1dfdd] rounded transition w-24 text-center"
              >
                <FileSpreadsheet size={20} className="text-gray-700" />
                <span className="text-[10px] mt-1">En-tête/Pied</span>
              </button>
            </div>
          </>
        )}

        {/* ONGLET MISE EN PAGE */}
        {activeTab === 'mise-en-page' && (
          <>
            <div className="flex items-center gap-2 pr-3 border-r border-[#d1d1d1]">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-semibold uppercase">Orientation A4</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onOrientationChange('portrait')}
                    className={`px-2 py-1 rounded text-xs transition ${
                      orientation === 'portrait'
                        ? 'bg-[#c7e0f4] text-[#103f91] font-semibold'
                        : 'hover:bg-[#e1dfdd]'
                    }`}
                  >
                    Portrait (210×297)
                  </button>
                  <button
                    onClick={() => onOrientationChange('paysage')}
                    className={`px-2 py-1 rounded text-xs transition ${
                      orientation === 'paysage'
                        ? 'bg-[#c7e0f4] text-[#103f91] font-semibold'
                        : 'hover:bg-[#e1dfdd]'
                    }`}
                  >
                    Paysage
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pr-3 border-r border-[#d1d1d1]">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-semibold uppercase">Marges Word</span>
                <div className="flex items-center gap-1">
                  <span className="bg-white border border-gray-300 px-2 py-1 rounded text-xs">
                    Normales (2,5 cm)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => alert('Format standard : A4 (21,0 cm x 29,7 cm)')}
                className="flex flex-col items-center justify-center p-2 hover:bg-[#e1dfdd] rounded transition w-20 text-center"
              >
                <Columns size={20} className="text-[#103f91]" />
                <span className="text-[10px] mt-1 font-medium">Format A4</span>
              </button>
            </div>
          </>
        )}

        {/* ONGLET AFFICHAGE */}
        {activeTab === 'affichage' && (
          <>
            <div className="flex flex-col justify-center gap-2 pr-3 border-r border-[#d1d1d1]">
              <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={showRuler}
                  onChange={onToggleRuler}
                  className="rounded text-[#103f91]"
                />
                <span>Règle graduée (cm)</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={showNavPane}
                  onChange={onToggleNavPane}
                  className="rounded text-[#103f91]"
                />
                <span>Volet de navigation</span>
              </label>
            </div>

            <div className="flex items-center gap-2 pr-3 border-r border-[#d1d1d1]">
              <span className="text-xs text-gray-600 font-medium">Zoom :</span>
              {[75, 100, 125].map((z) => (
                <button
                  key={z}
                  onClick={() => onZoomChange(z)}
                  className={`px-2 py-1 rounded text-xs transition ${
                    zoom === z ? 'bg-[#c7e0f4] text-[#103f91] font-semibold' : 'hover:bg-[#e1dfdd]'
                  }`}
                >
                  {z}%
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onZoomChange(100)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 hover:bg-[#e1dfdd] rounded text-xs"
              >
                <Maximize2 size={14} className="text-gray-700" />
                <span>100 % (Taille réelle A4)</span>
              </button>
            </div>
          </>
        )}

        {/* ONGLET FICHIER */}
        {activeTab === 'fichier' && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-[#103f91] text-white px-3.5 py-2 rounded font-medium text-xs hover:bg-[#0b2c66] transition shadow-sm"
            >
              <span>Imprimer ou Enregistrer en PDF (A4)</span>
            </button>
            <button
              onClick={onAddPage}
              className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-3.5 py-2 rounded font-medium text-xs hover:bg-gray-50 transition"
            >
              <FilePlus size={14} />
              <span>Ajouter une page A4 au dossier</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
