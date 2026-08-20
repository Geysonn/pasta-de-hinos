import { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom'
import { LoadingSpinner } from '../../components/Loading'
import { ErrorState } from '../../components/ErrorState'
import { useAsync } from '../../hooks/useAsync'
import { getChapter, getChapterCount } from '../../services/bibleService'
import { bibleBookByAbbrev } from '../../data/bibleBooks'
import { useAppStore } from '../../store/useAppStore'
import { useFavoritesStore } from '../../store/useFavoritesStore'
import { useNotesStore } from '../../store/useNotesStore'
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
  const setLastReadBible = useAppStore((s) => s.setLastReadBible)
  const { isVerseFavorite, toggleVerseFavorite } = useFavoritesStore()
  const { getNote, setNote, removeNote } = useNotesStore()

  const [selected, setSelected] = useState<number | null>(null)
  const [noteDraft, setNoteDraft] = useState('')
  const [editingNote, setEditingNote] = useState(false)

  useEffect(() => {
    if (meta && Number.isFinite(chapterNum) && chapterNum > 0) {
      setLastReadBible({ book: meta.abbrev, chapter: chapterNum })
    }
  }, [meta, chapterNum, setLastReadBible])

  useEffect(() => {
    setSelected(null)
    setEditingNote(false)
  }, [book, chapterNum])

  if (!meta || !Number.isFinite(chapterNum) || chapterNum < 1) {
    return <Navigate to="/biblia" replace />
  }
  const bookMeta = meta

  const hasPrev = chapterNum > 1
  const hasNext = chapterCount !== null && chapterNum < chapterCount

  const verseKey = (i: number) => `${bookMeta.abbrev}-${chapterNum}-${i}`
  const selectedKey = selected !== null ? verseKey(selected) : null

  function openNote() {
    if (selectedKey) setNoteDraft(getNote(selectedKey) ?? '')
    setEditingNote(true)
  }

  function saveNote() {
    if (!selectedKey) return
    if (noteDraft.trim()) setNote(selectedKey, noteDraft.trim())
    else removeNote(selectedKey)
    setEditingNote(false)
  }

  function copyVerse() {
    if (selected === null || !verses) return
    navigator.clipboard?.writeText(`${verses[selected - 1]} (${bookMeta.name} ${chapterNum}:${selected})`)
  }

  function shareVerse() {
    if (selected === null || !verses) return
    shareContent({
      title: `${bookMeta.name} ${chapterNum}:${selected}`,
      text: `${verses[selected - 1]} (${bookMeta.name} ${chapterNum}:${selected})`,
      url: location.href,
    })
  }

  return (
    <div className="pb-28">
      <div className="sticky top-0 z-30 flex items-center gap-2 bg-bg px-4 pb-2 pt-4">
        <button
          onClick={() => navigate('/biblia')}
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
      </div>

      <div className="px-4 py-2 text-center">
        <Link to={`/biblia/${meta.abbrev}`} className="text-xs font-semibold uppercase tracking-widest text-text-muted">
          {meta.name}
        </Link>
        <p className="text-6xl font-black leading-none text-text">{chapterNum}</p>
      </div>

      <div className="px-4">
        {loading && <LoadingSpinner />}
        {error && <ErrorState />}

        {verses && (
          <p
            className="leading-loose text-text"
            style={{ fontSize: `${fontScale}rem`, fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {verses.map((v, idx) => {
              const i = idx + 1
              const key = verseKey(i)
              const marked = isVerseFavorite(key)
              const hasNote = Boolean(getNote(key))
              const isSelected = selected === i
              return (
                <span
                  key={i}
                  onClick={() => setSelected(isSelected ? null : i)}
                  className={`cursor-pointer rounded transition ${marked ? 'bg-accent/25' : ''} ${isSelected ? 'ring-2 ring-primary' : ''}`}
                >
                  <sup className="mr-1 font-sans text-[0.65em] font-bold text-primary">
                    {i}
                    {hasNote && '📝'}
                  </sup>
                  {v}{' '}
                </span>
              )
            })}
          </p>
        )}
      </div>

      {selected !== null && (
        <div className="fixed bottom-16 left-0 right-0 z-40 mx-auto max-w-md px-4">
          {editingNote ? (
            <div className="rounded-2xl border border-border bg-surface p-3 shadow-lg">
              <textarea
                autoFocus
                value={noteDraft}
                onChange={(e) => setNoteDraft(e.target.value)}
                placeholder={`Anotação sobre ${meta.name} ${chapterNum}:${selected}…`}
                className="h-20 w-full resize-none rounded-xl border border-border bg-bg p-2 text-sm text-text outline-none"
              />
              <div className="mt-2 flex justify-end gap-2">
                <button
                  onClick={() => setEditingNote(false)}
                  className="rounded-full px-4 py-1.5 text-sm font-medium text-text-muted active:scale-95"
                >
                  Cancelar
                </button>
                <button
                  onClick={saveNote}
                  className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white active:scale-95"
                >
                  Salvar
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-around rounded-2xl border border-border bg-surface py-2 shadow-lg">
              <button
                onClick={() => selectedKey && toggleVerseFavorite(selectedKey)}
                className="flex flex-col items-center gap-0.5 px-2 text-[11px] font-medium text-text active:scale-95"
              >
                <span className="text-lg">{selectedKey && isVerseFavorite(selectedKey) ? '🖍️' : '🖊️'}</span>
                Marcar
              </button>
              <button onClick={openNote} className="flex flex-col items-center gap-0.5 px-2 text-[11px] font-medium text-text active:scale-95">
                <span className="text-lg">📝</span>
                Anotar
              </button>
              <button onClick={copyVerse} className="flex flex-col items-center gap-0.5 px-2 text-[11px] font-medium text-text active:scale-95">
                <span className="text-lg">📋</span>
                Copiar
              </button>
              <button onClick={shareVerse} className="flex flex-col items-center gap-0.5 px-2 text-[11px] font-medium text-text active:scale-95">
                <span className="text-lg">📤</span>
                Compartilhar
              </button>
            </div>
          )}
        </div>
      )}

      <div className="fixed bottom-16 left-0 right-0 z-30 mx-auto max-w-md px-4 pb-3" style={{ display: selected !== null ? 'none' : undefined }}>
        <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1.5 shadow-lg">
          {hasPrev ? (
            <Link
              to={`/biblia/${meta.abbrev}/${chapterNum - 1}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95"
              aria-label="Capítulo anterior"
            >
              ‹
            </Link>
          ) : (
            <span className="h-9 w-9" />
          )}
          <Link
            to={`/biblia/${meta.abbrev}`}
            className="flex-1 truncate rounded-full py-2 text-center text-sm font-medium text-text"
          >
            {meta.name} {chapterNum}
          </Link>
          {hasNext ? (
            <Link
              to={`/biblia/${meta.abbrev}/${chapterNum + 1}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95"
              aria-label="Próximo capítulo"
            >
              ›
            </Link>
          ) : (
            <span className="h-9 w-9" />
          )}
        </div>
      </div>
    </div>
  )
}
