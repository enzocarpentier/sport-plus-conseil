import React from 'react'
import { Trash2 } from 'lucide-react'

interface DossierCustomPageProps {
  id?: string
  pageNumber: number
  totalPages: number
  title?: string
  content?: string
  onDelete?: () => void
}

export const DossierCustomPage: React.FC<DossierCustomPageProps> = ({
  id,
  pageNumber,
  totalPages,
  title = 'Nouvelle Section du Dossier',
  content = 'Cliquez ici pour rédiger le contenu de cette page supplémentaire...',
  onDelete
}) => {
  return (
    <div
      id={id}
      data-page={pageNumber}
      className="a4-page-container bg-white text-gray-900 shadow-md relative flex flex-col justify-between p-12 select-text group"
      style={{
        boxSizing: 'border-box'
      }}
    >
      {/* Bouton de suppression de la page (invisible à l'impression) */}
      {onDelete && (
        <button
          onClick={onDelete}
          className="no-print absolute top-3 right-3 opacity-0 group-hover:opacity-100 bg-red-100 hover:bg-red-200 text-red-700 p-1.5 rounded transition shadow-xs text-xs flex items-center gap-1"
          title="Supprimer cette page"
        >
          <Trash2 size={13} />
          <span>Supprimer page</span>
        </button>
      )}

      {/* En-tête de page standard A4 Word */}
      <div className="border-b border-gray-300 pb-2 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-wider">
        <span>Sport Plus Conseil — Dossier Stratégique</span>
        <span className="font-semibold text-[#103f91]">Page Complémentaire</span>
      </div>

      {/* Corps éditable de la page */}
      <div className="my-auto py-6 space-y-4 flex-1">
        <h2 className="text-xl font-bold text-[#103f91] border-b border-[#2575fc]/30 pb-1 p-1 rounded">
          {title}
        </h2>

        <div className="text-xs text-gray-700 leading-relaxed min-h-[350px] p-2 rounded whitespace-pre-wrap">
          {content}
        </div>
      </div>

      {/* Pied de page standard A4 Word */}
      <div className="border-t border-gray-300 pt-3 flex items-center justify-between text-[10px] text-gray-500">
        <span>Sport Plus Conseil — Tous droits réservés</span>
        <span className="font-mono">Page {pageNumber} sur {totalPages}</span>
      </div>
    </div>
  )
}
