export interface VerseRef {
  book: string
  chapter: number
  verse: number
}

// Lista curada de versículos conhecidos para a rotação do "Versículo do Dia".
export const dailyVerses: VerseRef[] = [
  { book: 'jo', chapter: 3, verse: 16 },
  { book: 'sl', chapter: 23, verse: 1 },
  { book: 'fp', chapter: 4, verse: 13 },
  { book: 'pv', chapter: 3, verse: 5 },
  { book: 'is', chapter: 41, verse: 10 },
  { book: 'rm', chapter: 8, verse: 28 },
  { book: 'js', chapter: 1, verse: 9 },
  { book: 'mt', chapter: 11, verse: 28 },
  { book: 'sl', chapter: 46, verse: 1 },
  { book: 'gl', chapter: 5, verse: 22 },
  { book: '2co', chapter: 5, verse: 17 },
  { book: 'jr', chapter: 29, verse: 11 },
  { book: 'sl', chapter: 121, verse: 1 },
  { book: 'ef', chapter: 2, verse: 8 },
  { book: 'hb', chapter: 11, verse: 1 },
  { book: 'tg', chapter: 1, verse: 5 },
  { book: '1pe', chapter: 5, verse: 7 },
  { book: 'sl', chapter: 27, verse: 1 },
  { book: 'mt', chapter: 6, verse: 33 },
  { book: 'rm', chapter: 12, verse: 2 },
  { book: 'sl', chapter: 91, verse: 1 },
  { book: 'jo', chapter: 14, verse: 6 },
  { book: 'fp', chapter: 4, verse: 6 },
  { book: 'dt', chapter: 31, verse: 6 },
  { book: 'sl', chapter: 34, verse: 8 },
  { book: '1co', chapter: 13, verse: 4 },
  { book: 'mq', chapter: 6, verse: 8 },
  { book: 'sl', chapter: 37, verse: 4 },
  { book: 'jo', chapter: 16, verse: 33 },
  { book: 'nm', chapter: 6, verse: 24 },
]

export function verseOfTheDay(date = new Date()): VerseRef {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0)
  const diff = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start
  const dayOfYear = Math.floor(diff / 86400000)
  return dailyVerses[dayOfYear % dailyVerses.length]
}
