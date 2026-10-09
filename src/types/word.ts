export type RibbonTab = 'fichier' | 'accueil' | 'insertion' | 'mise-en-page' | 'affichage'

export type PageOrientation = 'portrait' | 'paysage'

export interface PageItem {
  id: string
  title: string
  subtitle?: string
  pageNumber: number
}

export interface WordDocumentState {
  title: string
  lastSaved: string
  activeTab: RibbonTab
  zoom: number // percentage, e.g. 100
  showRuler: boolean
  showNavPane: boolean
  activeNavTab: 'titres' | 'pages' | 'recherche'
  fontFamily: string
  fontSize: number
  isBold: boolean
  isItalic: boolean
  isUnderline: boolean
  alignment: 'left' | 'center' | 'right' | 'justify'
  orientation: PageOrientation
  activePageId: string
}
