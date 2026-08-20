import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { LoadingSpinner } from '../../components/Loading'
import { ErrorState } from '../../components/ErrorState'
import { useAsync } from '../../hooks/useAsync'
import { getHymn, listHymns, hymnalLabels } from '../../services/hymnsService'
import { useAppStore } from '../../store/useAppStore'
import { useFavoritesStore } from '../../store/useFavoritesStore'
import { shareContent } from '../../utils/share'
import type { HymnalId } from '../../types'

function LyricsText({ lyrics }: { lyrics: string }) {
  const parts = lyrics.split('**')
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

export function HymnDetailPage({ hymnalId, basePath }: { hymnalId: HymnalId; basePath: string }) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: hymn, loading, error } = useAsync(() => getHymn(hymnalId, id!), [hymnalId, id])
  const { data: allHymns } = useAsync(() => listHymns(hymnalId), [hymnalId])
  const fontScale = useAppStore((s) => s.fontScale)
  const setFontScale = useAppStore((s) => s.setFontScale)
  const { isHymnFavorite, toggleHymnFavorite } = useFavoritesStore()
  const [selected, setSelected] = useState(false)

  const index = allHymns && hymn ? allHymns.findIndex((h) => h.id === hymn.id) : -1
  const prevHymn = allHymns && index > 0 ? allHymns[index - 1] : null
  const nextHymn = allHymns && index >= 0 && index < allHymns.length - 1 ? allHymns[index + 1] : null

  return (
    <div className="pb-28">
      <div className="sticky top-0 z-30 flex items-center gap-2 bg-bg px-4 pb-2 pt-4">
        <button
          onClick={() => navigate(basePath)}
          aria-label="Voltar"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-text active:scale-95"
        >
          ←
        </button>
        <div className="flex flex-1 gap-2">
          <button
            onClick={() => setFontScale(fontScale - 0.1)}
            className="h-9 w-9 rounded-full bg-surface text-sm text-text active:scale-95"
          >
            A-
          </button>
          <button
            onClick={() => setFontScale(fontScale + 0.1)}
            className="h-9 w-9 rounded-full bg-surface text-sm text-text active:scale-95"
          >
            A+
          </button>
        </div>
        {hymn && (
          <button
            onClick={() => toggleHymnFavorite(hymn.id)}
            aria-label="Favoritar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-lg active:scale-95"
          >
            {isHymnFavorite(hymn.id) ? '★' : '☆'}
          </button>
        )}
      </div>

      {loading && <LoadingSpinner />}
      {error && <ErrorState />}

      {hymn && (
        <>
          <div className="px-4 py-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">{hymnalLabels[hymnalId]}</p>
            <p className="text-6xl font-black leading-none text-text">{hymn.number}</p>
            <h1 className="mt-2 text-xl font-bold leading-snug text-text">{hymn.title}</h1>
          </div>

          <div className="px-4">
            <p
              className="whitespace-pre-line leading-relaxed text-text"
              style={{ fontSize: `${fontScale}rem` }}
            >
              <LyricsText lyrics={hymn.lyrics} />
            </p>
          </div>

          <div className="fixed bottom-16 left-0 right-0 z-30 mx-auto max-w-md px-4 pb-3">
            {selected ? (
              <div className="flex items-center justify-center rounded-2xl border border-border bg-surface py-2 shadow-lg">
                <button
                  onClick={() => {
                    shareContent({ title: hymn.title, text: hymn.lyrics.replace(/\*\*/g, ''), url: location.href })
                    setSelected(false)
                  }}
                  className="flex flex-col items-center gap-0.5 px-4 text-[11px] font-medium text-text active:scale-95"
                >
                  <span className="text-lg">📤</span>
                  Compartilhar
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1.5 shadow-lg">
                {prevHymn ? (
                  <Link
                    to={`${basePath}/${prevHymn.id}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95"
                    aria-label="Hino anterior"
                  >
                    ‹
                  </Link>
                ) : (
                  <span className="h-9 w-9" />
                )}
                <button
                  onClick={() => setSelected(true)}
                  className="flex-1 truncate rounded-full py-2 text-center text-sm font-medium text-text"
                >
                  Hino {hymn.number}
                </button>
                {nextHymn ? (
                  <Link
                    to={`${basePath}/${nextHymn.id}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95"
                    aria-label="Próximo hino"
                  >
                    ›
                  </Link>
                ) : (
                  <span className="h-9 w-9" />
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
