import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { SearchInput } from '../../components/SearchInput'
import { LoadingList } from '../../components/Loading'
import { ErrorState } from '../../components/ErrorState'
import { EmptyState } from '../../components/EmptyState'
import { useAsync } from '../../hooks/useAsync'
import { listHymns, hymnalLabels } from '../../services/hymnsService'
import { useFavoritesStore } from '../../store/useFavoritesStore'
import type { HymnalId } from '../../types'

export function HymnalListPage({ hymnalId, basePath }: { hymnalId: HymnalId; basePath: string }) {
  const { data, loading, error, reload } = useAsync(() => listHymns(hymnalId), [hymnalId])
  const [query, setQuery] = useState('')
  const { isHymnFavorite } = useFavoritesStore()

  const filtered = useMemo(() => {
    if (!data) return []
    const q = query.trim().toLowerCase()
    if (!q) return data
    return data.filter((h) => h.title.toLowerCase().includes(q) || String(h.number).includes(q))
  }, [data, query])

  return (
    <div>
      <Header title={hymnalLabels[hymnalId]} showBack onBack={() => history.back()} />
      <div className="px-4 pt-4">
        <SearchInput value={query} onChange={setQuery} placeholder="Buscar por número ou título…" />
      </div>
      <div className="px-4 py-4">
        {loading && <LoadingList />}
        {error && <ErrorState onRetry={reload} />}
        {data && filtered.length === 0 && <EmptyState icon="🎵" title="Nenhum hino encontrado" />}
        <div className="flex flex-col gap-2">
          {filtered.map((h) => (
            <Link
              key={h.id}
              to={`${basePath}/${h.id}`}
              className="flex items-center gap-3 rounded-2xl bg-surface px-3 py-3 transition active:scale-[0.98]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-sm font-bold text-primary">
                {h.number}
              </span>
              <span className="flex-1 text-sm font-medium text-text">{h.title}</span>
              {isHymnFavorite(h.id) && <span aria-hidden>★</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
