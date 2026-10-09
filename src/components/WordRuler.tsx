import React from 'react'

interface WordRulerProps {
  zoom?: number
}

export const WordRuler: React.FC<WordRulerProps> = () => {
  // Une page A4 fait 21 cm de large.
  // Avec des marges standard de 2,5 cm à gauche et à droite, la zone de texte fait 16 cm.
  const cmMarks = Array.from({ length: 17 }, (_, i) => i)

  return (
    <div className="no-print bg-[#f3f2f1] border-b border-[#d1d1d1] h-6 flex items-center justify-center select-none overflow-hidden">
      <div className="w-[794px] max-w-full h-full flex items-center bg-[#e1dfdd] text-[9px] text-gray-500 font-mono relative border-x border-[#c8c6c4]">
        {/* Marge gauche 2.5cm */}
        <div className="w-[94px] h-full bg-[#d2d0ce] relative flex items-end pb-0.5 justify-end pr-1 border-r border-[#8a8886]">
          {/* Curseur marge gauche */}
          <div className="absolute top-0 right-0 w-2 h-2.5 -mr-1 flex flex-col items-center">
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#004578]" />
            <div className="w-1.5 h-1.5 bg-[#004578]" />
          </div>
        </div>

        {/* Zone de texte imprimable (0 à 16 cm) */}
        <div className="flex-1 h-full bg-white relative flex">
          {cmMarks.map((cm) => (
            <div
              key={cm}
              className="flex-1 h-full relative flex flex-col justify-end items-start border-r border-gray-200"
            >
              {/* Petites graduations intermédiaires */}
              <div className="absolute bottom-0 left-1/2 w-px h-1.5 bg-gray-300" />
              <div className="absolute bottom-0 left-1/4 w-px h-1 bg-gray-200" />
              <div className="absolute bottom-0 left-3/4 w-px h-1 bg-gray-200" />

              {/* Chiffre du centimètre */}
              {cm > 0 && cm < 16 && (
                <span className="absolute bottom-1 -left-1 text-[9px] text-gray-600 select-none pointer-events-none">
                  {cm}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Marge droite 2.5cm */}
        <div className="w-[94px] h-full bg-[#d2d0ce] relative flex items-end pb-0.5 justify-start pl-1 border-l border-[#8a8886]">
          {/* Curseur marge droite */}
          <div className="absolute top-0 left-0 w-2 h-2.5 -ml-1 flex flex-col items-center">
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#004578]" />
            <div className="w-1.5 h-1.5 bg-[#004578]" />
          </div>
        </div>
      </div>
    </div>
  )
}
