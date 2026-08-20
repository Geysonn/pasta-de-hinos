interface RawBook {
  abbrev: string
  chapters: string[][]
}

let cache: Promise<RawBook[]> | null = null

function loadRaw(): Promise<RawBook[]> {
  if (!cache) {
    cache = fetch(`${import.meta.env.BASE_URL}bible/aa.json`).then((r) => r.json())
  }
  return cache
}

export async function getChapterCount(abbrev: string): Promise<number> {
  const books = await loadRaw()
  const book = books.find((b) => b.abbrev === abbrev)
  return book ? book.chapters.length : 0
}

export async function getChapter(abbrev: string, chapter: number): Promise<string[]> {
  const books = await loadRaw()
  const book = books.find((b) => b.abbrev === abbrev)
  if (!book) return []
  return book.chapters[chapter - 1] ?? []
}
