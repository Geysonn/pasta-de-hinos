import { demoHarpa, demoGeracaoLife } from '../data/hymns'
import { preciosasHymns } from '../data/preciosasHymns'
import type { Hymn, HymnalId } from '../types'

const byHymnal: Record<HymnalId, Hymn[]> = {
  harpa: demoHarpa,
  preciosas: preciosasHymns,
  geracaoLife: demoGeracaoLife,
}

export async function listHymns(hymnal: HymnalId): Promise<Hymn[]> {
  return [...byHymnal[hymnal]].sort((a, b) => a.number - b.number)
}

export async function getHymn(hymnal: HymnalId, id: string): Promise<Hymn | undefined> {
  return byHymnal[hymnal].find((h) => h.id === id)
}

export const hymnalLabels: Record<HymnalId, string> = {
  harpa: 'Harpa Cristã',
  preciosas: 'Preciosas',
  geracaoLife: 'Geração Life',
}

export const hymnalSubtitles: Record<HymnalId, string> = {
  harpa: 'Pasta a cadastrar',
  preciosas: 'Círculo de Oração · JD América',
  geracaoLife: 'Pasta a cadastrar',
}

export const hymnalIcons: Record<HymnalId, string> = {
  harpa: '🎵',
  preciosas: '💎',
  geracaoLife: '🔥',
}

export const hymnalLogos: Partial<Record<HymnalId, string>> = {
  preciosas: `${import.meta.env.BASE_URL}preciosas-logo.jpg`,
}

export const hymnalSlugs: Record<HymnalId, string> = {
  harpa: 'harpa',
  preciosas: 'preciosas',
  geracaoLife: 'geracao-life',
}

export const allHymnalIds: HymnalId[] = ['preciosas', 'harpa', 'geracaoLife']
