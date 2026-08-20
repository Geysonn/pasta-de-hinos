import { useParams, Link, Navigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LoadingSpinner } from '../../components/Loading'
import { ErrorState } from '../../components/ErrorState'
import { useAsync } from '../../hooks/useAsync'
import { getChapterCount } from '../../services/bibleService'
import { bibleBookByAbbrev } from '../../data/bibleBooks'

export function BibleChaptersPage() {
  const { book } = useParams<{ book: string }>()
  const meta = book ? bibleBookByAbbrev[book] : undefined
  const { data: count, loading, error } = useAsync(() => getChapterCount(book!), [book])

  if (!meta) return <Navigate to="/biblia" replace />

  return (
    <div>
      <Header title={meta.name} showBack onBack={() => history.back()} />
      <div className="px-4 py-4">
        {loading && <LoadingSpinner />}
        {error && <ErrorState />}
        {count !== null && (
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                to={`/biblia/${meta.abbrev}/${n}`}
                className="flex aspect-square items-center justify-center rounded-2xl bg-surface text-sm font-semibold text-text transition active:scale-[0.95]"
              >
                {n}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
