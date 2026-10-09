import React, { useState } from 'react'
import {
  Search,
  ChevronRight,
  X
} from 'lucide-react'

export interface NavSection {
  id: string
  pageNumber: number
  title: string
  level: number
}

interface WordNavPaneProps {
  onClose: () => void
  sections: NavSection[]
  totalPages: number
  activePage: number
  onNavigateToPage: (pageNumber: number) => void
}

export const WordNavPane: React.FC<WordNavPaneProps> = ({
  onClose,
  sections,
  totalPages,
  activePage,
  onNavigateToPage
}) => {
  const [activeTab, setActiveTab] = useState<'titres' | 'pages' | 'recherche'>('titres')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <aside className="no-print w-64 bg-[#f8f9fa] border-r border-[#d1d1d1] flex flex-col flex-shrink-0 select-none text-xs text-gray-800">
      {/* En-tête du volet */}
      <div className="h-8 px-3 flex items-center justify-between border-b border-[#e1dfdd] bg-white">
        <span className="font-semibold text-gray-700">Navigation</span>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-800"
          title="Fermer le volet de navigation"
        >
          <X size={14} />
        </button>
      </div>

      {/* Barre de recherche dans le document */}
      <div className="p-2 border-b border-[#e1dfdd] bg-white">
        <div className="flex items-center gap-1.5 bg-[#f3f2f1] border border-gray-300 rounded px-2 py-1">
          <Search size={13} className="text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher dans le document"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-xs placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* 3 Onglets: Titres | Pages | Résultats */}
      <div className="flex border-b border-[#e1dfdd] bg-white text-[11px]">
        <button
          onClick={() => setActiveTab('titres')}
          className={`flex-1 py-1.5 text-center font-medium border-b-2 transition ${
            activeTab === 'titres'
              ? 'border-[#103f91] text-[#103f91] font-semibold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Titres
        </button>
        <button
          onClick={() => setActiveTab('pages')}
          className={`flex-1 py-1.5 text-center font-medium border-b-2 transition ${
            activeTab === 'pages'
              ? 'border-[#103f91] text-[#103f91] font-semibold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Pages ({totalPages})
        </button>
      </div>

      {/* Contenu de l'onglet */}
      <div className="flex-1 overflow-y-auto p-2">
        {/* Onglet Titres (Plan du dossier) */}
        {activeTab === 'titres' && (
          <div className="space-y-1">
            {sections
              .filter((s) => !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((section) => (
                <div
                  key={section.id}
                  onClick={() => onNavigateToPage(section.pageNumber)}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded cursor-pointer transition ${
                    activePage === section.pageNumber
                      ? 'bg-[#c7e0f4] text-[#103f91] font-medium'
                      : 'hover:bg-gray-200/70 text-gray-700'
                  }`}
                  style={{ paddingLeft: `${(section.level - 1) * 12 + 8}px` }}
                >
                  <ChevronRight size={12} className="text-gray-400 flex-shrink-0" />
                  <span className="truncate flex-1">{section.title}</span>
                  <span className="text-[10px] text-gray-400 ml-1">p.{section.pageNumber}</span>
                </div>
              ))}
          </div>
        )}

        {/* Onglet Pages (Miniatures des pages A4) */}
        {activeTab === 'pages' && (
          <div className="grid grid-cols-2 gap-3 p-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pNum) => (
              <div
                key={pNum}
                onClick={() => onNavigateToPage(pNum)}
                className={`flex flex-col items-center cursor-pointer group p-1 rounded border transition ${
                  activePage === pNum
                    ? 'border-[#103f91] bg-blue-50/50 shadow-xs'
                    : 'border-gray-200 hover:border-gray-400 bg-white'
                }`}
              >
                {/* Miniature simulation A4 */}
                <div className="w-20 h-28 bg-white border border-gray-300 shadow-xs rounded-xs flex flex-col p-1.5 justify-between overflow-hidden relative group-hover:shadow-sm">
                  <div className="space-y-1 w-full">
                    <div className="h-1.5 bg-[#103f91]/30 rounded w-3/4" />
                    <div className="h-1 bg-gray-200 rounded w-full" />
                    <div className="h-1 bg-gray-200 rounded w-5/6" />
                    <div className="h-1 bg-gray-200 rounded w-2/3" />
                  </div>
                  <div className="text-[8px] text-gray-400 text-center font-mono">
                    A4
                  </div>
                </div>
                <span className="text-[10px] text-gray-600 mt-1 font-medium group-hover:text-blue-900">
                  Page {pNum}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
