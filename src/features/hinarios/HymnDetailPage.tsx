import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LoadingSpinner } from '../../components/Loading'
import { ErrorState } from '../../components/ErrorState'
import { useAsync } from '../../hooks/useAsync'
import { getHymn, hymnalLabels } from '../../services/hymnsService'
import { useAppStore } from '../../store/useAppStore'
import { useFavoritesStore } from '../../store/useFavoritesStore'
import { shareContent } from '../../utils/share'
import type { HymnalId } from '../../types'

export function HymnDetailPage({ hymnalId }: { hymnalId: HymnalId }) {
  const { id } = useParams<{ id: string }>()
  const { data: hymn, loading, error } = useAsync(() => getHymn(hymnalId, id!), [hymnalId, id])
  const fontScale = useAppStore((s) => s.fontScale)
  const setFontScale = useAppStore((s) => s.setFontScale)
  const { isHymnFavorite, toggleHymnFavorite } = useFavoritesStore()

  return (
    <div>
      <Header title={hymnalLabels[hymnalId]} showBack onBack={() => history.back()} />
      {loading && <LoadingSpinner />}
      {error && <ErrorState />}
      {hymn && (
        <div className="px-4 py-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Hino {hymn.number}</p>
              <h1 className="text-xl font-bold leading-snug text-text">{hymn.title}</h1>
            </div>
            <button onClick={() => toggleHymnFavorite(hymn.id)} aria-label="Favoritar" className="text-2xl">
              {isHymnFavorite(hymn.id) ? '★' : '☆'}
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => setFontScale(fontScale - 0.1)}
              className="h-8 w-8 rounded-full border border-border text-sm text-text active:scale-95"
            >
              A-
            </button>
            <button
              onClick={() => setFontScale(fontScale + 0.1)}
              className="h-8 w-8 rounded-full border border-border text-sm text-text active:scale-95"
            >
              A+
            </button>
            <button
              onClick={() => shareContent({ title: hymn.title, text: hymn.lyrics, url: location.href })}
              className="ml-auto rounded-full border border-border px-4 py-1.5 text-sm font-medium text-text active:scale-95"
            >
              📤 Compartilhar
            </button>
          </div>

          <p
            className="mt-5 whitespace-pre-line leading-relaxed text-text"
            style={{ fontSize: `${fontScale}rem` }}
          >
            {hymn.lyrics}
          </p>
        </div>
      )}
    </div>
  )
}
