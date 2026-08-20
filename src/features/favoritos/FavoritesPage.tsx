import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { EmptyState } from '../../components/EmptyState'
import { LoadingList } from '../../components/Loading'
import { listHymns, hymnalLabels, hymnalSlugs, allHymnalIds } from '../../services/hymnsService'
import { getChapter } from '../../services/bibleService'
import { bibleBookByAbbrev } from '../../data/bibleBooks'
import { useFavoritesStore } from '../../store/useFavoritesStore'
import type { Hymn } from '../../types'

interface MarkedVerse {
  key: string
  book: string
  chapter: number
  verse: number
  text: string
}

export function FavoritesPage() {
  const { hymnFavorites, verseFavorites } = useFavoritesStore()
  const [hymns, setHymns] = useState<Hymn[] | null>(null)
  const [verses, setVerses] = useState<MarkedVerse[] | null>(null)

  useEffect(() => {
    let active = true
    Promise.all(allHymnalIds.map((id) => listHymns(id))).then((lists) => {
      if (!active) return
      const all = lists.flat()
      setHymns(all.filter((h) => hymnFavorites.includes(h.id)))
    })
    return () => {
      active = false
    }
  }, [hymnFavorites])

  useEffect(() => {
    let active = true
    Promise.all(
      verseFavorites.map(async (key) => {
        const [book, chapterStr, verseStr] = key.split('-')
        const chapter = Number(chapterStr)
        const verse = Number(verseStr)
        const chapterVerses = await getChapter(book, chapter)
        return { key, book, chapter, verse, text: chapterVerses[verse - 1] ?? '' }
      }),
    ).then((result) => {
      if (active) setVerses(result)
    })
    return () => {
      active = false
    }
  }, [verseFavorites])

  const nothingYet = hymns !== null && hymns.length === 0 && verses !== null && verses.length === 0

  return (
    <div>
      <Header title="Favoritos" subtitle="Hinos e versículos marcados" />
      <div className="px-4 py-4">
        {(hymns === null || verses === null) && <LoadingList />}
        {nothingYet && (
          <EmptyState icon="⭐" title="Nenhum favorito ainda" description="Marque um hino ou versículo para guardá-lo aqui." />
        )}

        {verses && verses.length > 0 && (
          <div className="mb-6">
            <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-text-muted">Versículos</p>
            <div className="flex flex-col gap-2">
              {verses.map((v) => (
                <Link
                  key={v.key}
                  to={`/biblia/${v.book}/${v.chapter}`}
                  className="rounded-2xl bg-surface px-4 py-3 transition active:scale-[0.98]"
                >
                  <p className="line-clamp-2 text-sm text-text">{v.text}</p>
                  <p className="mt-1 text-xs font-medium text-primary">
                    {bibleBookByAbbrev[v.book]?.name} {v.chapter}:{v.verse}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {hymns && hymns.length > 0 && (
          <div>
            <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-text-muted">Hinos</p>
            <div className="flex flex-col gap-2">
              {hymns.map((h) => (
                <Link
                  key={h.id}
                  to={`/${hymnalSlugs[h.hymnal]}/${h.id}`}
                  className="flex items-center gap-3 rounded-2xl bg-surface px-3 py-3 transition active:scale-[0.98]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-sm font-bold text-primary">
                    {h.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-text">{h.title}</p>
                    <p className="truncate text-xs text-text-muted">{hymnalLabels[h.hymnal]}</p>
                  </div>
                  <span aria-hidden>★</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
