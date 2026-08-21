import { Link } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getChapter } from '../../services/bibleService'
import { bibleBookByAbbrev } from '../../data/bibleBooks'
import { verseOfTheDay } from '../../data/dailyVerses'
import { useDailyVerseStore } from '../../store/useDailyVerseStore'
import { shareContent } from '../../utils/share'

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

export function HomePage() {
  const ref = verseOfTheDay()
  const book = bibleBookByAbbrev[ref.book]
  const { data: verses } = useAsync(() => getChapter(ref.book, ref.chapter), [ref.book, ref.chapter])
  const text = verses ? verses[ref.verse - 1] : null
  const { isLiked, toggleLiked } = useDailyVerseStore()
  const liked = isLiked(todayKey())

  const reference = book ? `${book.name} ${ref.chapter}:${ref.verse}` : ''

  return (
    <div>
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <p className="text-xl font-bold text-text">Minha Igreja</p>
        <div className="flex items-center gap-2">
          <Link
            to="/favoritos"
            aria-label="Favoritos"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-lg active:scale-95"
          >
            ⭐
          </Link>
          <Link
            to="/configuracoes"
            aria-label="Ajustes"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-lg active:scale-95"
          >
            ⚙️
          </Link>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div
          className="overflow-hidden rounded-3xl px-6 py-10"
          style={{ background: 'linear-gradient(160deg, #3a1c22 0%, #7a2b3a 55%, #b9536a 100%)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Versículo do Dia</p>
          {text ? (
            <p className="mt-4 text-2xl font-medium leading-snug text-white">{text}</p>
          ) : (
            <div className="mt-4 h-24 animate-pulse rounded-lg bg-white/10" />
          )}
          <p className="mt-5 text-sm font-semibold text-white/85">{reference}</p>

          <div className="mt-8 flex items-center gap-6">
            <button
              onClick={() => toggleLiked(todayKey())}
              className="flex items-center gap-2 text-white active:scale-95"
              aria-label="Curtir"
            >
              <span className="text-2xl">{liked ? '❤️' : '🤍'}</span>
            </button>
            <button
              onClick={() =>
                text &&
                shareContent({
                  title: reference,
                  text: `${text} (${reference})`,
                  url: location.href,
                })
              }
              className="flex items-center gap-2 text-white active:scale-95"
              aria-label="Compartilhar"
            >
              <span className="text-2xl">📤</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
