import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { EmptyState } from '../../components/EmptyState'
import { LoadingList } from '../../components/Loading'
import { listHymns, hymnalLabels, hymnalSlugs, allHymnalIds } from '../../services/hymnsService'
import { useFavoritesStore } from '../../store/useFavoritesStore'
import type { Hymn } from '../../types'

export function FavoritesPage() {
  const { hymnFavorites } = useFavoritesStore()
  const [hymns, setHymns] = useState<Hymn[] | null>(null)

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

  return (
    <div>
      <Header title="Favoritos" subtitle="Seus hinos marcados com ★" />
      <div className="px-4 py-4">
        {hymns === null && <LoadingList />}
        {hymns && hymns.length === 0 && (
          <EmptyState icon="⭐" title="Nenhum favorito ainda" description="Toque na estrela dentro de um hino para guardá-lo aqui." />
        )}
        {hymns && hymns.length > 0 && (
          <div className="flex flex-col gap-2">
            {hymns.map((h) => (
              <Link
                key={h.id}
                to={`/${hymnalSlugs[h.hymnal]}/${h.id}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2.5 transition active:scale-[0.98]"
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
        )}
      </div>
    </div>
  )
}
