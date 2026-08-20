import { useParams, useNavigate, Navigate, Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LoadingSpinner } from '../../components/Loading'
import { ErrorState } from '../../components/ErrorState'
import { useAsync } from '../../hooks/useAsync'
import { getChapter, getChapterCount } from '../../services/bibleService'
import { bibleBookByAbbrev } from '../../data/bibleBooks'
import { useAppStore } from '../../store/useAppStore'
import { shareContent } from '../../utils/share'

export function BibleReadingPage() {
  const { book, chapter } = useParams<{ book: string; chapter: string }>()
  const navigate = useNavigate()
  const meta = book ? bibleBookByAbbrev[book] : undefined
  const chapterNum = Number(chapter)

  const { data: verses, loading, error } = useAsync(() => getChapter(book!, chapterNum), [book, chapterNum])
  const { data: chapterCount } = useAsync(() => getChapterCount(book!), [book])
  const fontScale = useAppStore((s) => s.fontScale)
  const setFontScale = useAppStore((s) => s.setFontScale)

  if (!meta || !Number.isFinite(chapterNum) || chapterNum < 1) {
    return <Navigate to="/biblia" replace />
  }

  const hasPrev = chapterNum > 1
  const hasNext = chapterCount !== null && chapterNum < chapterCount

  return (
    <div>
      <Header title={`${meta.name} ${chapterNum}`} showBack onBack={() => navigate(`/biblia/${meta.abbrev}`)} />

      <div className="px-4 py-4">
        <div className="mb-4 flex items-center gap-2">
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
            onClick={() =>
              shareContent({
                title: `${meta.name} ${chapterNum}`,
                text: (verses ?? []).map((v, i) => `${i + 1}. ${v}`).join('\n'),
                url: location.href,
              })
            }
            className="ml-auto rounded-full border border-border px-4 py-1.5 text-sm font-medium text-text active:scale-95"
          >
            📤 Compartilhar
          </button>
        </div>

        {loading && <LoadingSpinner />}
        {error && <ErrorState />}

        {verses && (
          <p
            className="leading-loose text-text"
            style={{ fontSize: `${fontScale}rem`, fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {verses.map((v, i) => (
              <span key={i}>
                <sup className="mr-1 font-sans text-[0.65em] font-bold text-primary">{i + 1}</sup>
                {v}{' '}
              </span>
            ))}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-4">
          {hasPrev ? (
            <Link
              to={`/biblia/${meta.abbrev}/${chapterNum - 1}`}
              className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-center text-sm font-medium text-text active:scale-[0.97]"
            >
              ← Capítulo {chapterNum - 1}
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {hasNext ? (
            <Link
              to={`/biblia/${meta.abbrev}/${chapterNum + 1}`}
              className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-center text-sm font-medium text-text active:scale-[0.97]"
            >
              Capítulo {chapterNum + 1} →
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  )
}
