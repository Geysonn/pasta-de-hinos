export type HymnalId = 'harpa' | 'preciosas' | 'geracaoLife'

export interface Hymn {
  id: string
  hymnal: HymnalId
  number: number
  title: string
  lyrics: string
}
