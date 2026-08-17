import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo'
import {
  listHymns,
  hymnalLabels,
  hymnalSubtitles,
  hymnalIcons,
  hymnalLogos,
  hymnalSlugs,
  allHymnalIds,
} from '../../services/hymnsService'
import type { HymnalId } from '../../types'

export function HomePage() {
  const [counts, setCounts] = useState<Partial<Record<HymnalId, number>>>({})

  useEffect(() => {
    let active = true
    Promise.all(allHymnalIds.map((id) => listHymns(id))).then((lists) => {
      if (!active) return
      const next: Partial<Record<HymnalId, number>> = {}
      allHymnalIds.forEach((id, i) => {
        next[id] = lists[i].length
      })
      setCounts(next)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <div>
      <Header title="Pasta de Hinos" subtitle="Toque numa pasta para abrir" />

      <div className="flex flex-col items-center gap-2 px-4 pt-6 pb-2 text-center">
        <Logo size={56} />
        <h1 className="text-lg font-bold text-text">Suas pastas de hinos</h1>
        <p className="max-w-xs text-sm text-text-muted">
          O mesmo conteúdo das pastas físicas, sempre no seu bolso.
        </p>
      </div>

      <div className="flex flex-col gap-3 px-4 py-4">
        {allHymnalIds.map((id) => {
          const count = counts[id]
          const empty = count === 0
          return (
            <Link
              key={id}
              to={`/${hymnalSlugs[id]}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-4 shadow-sm transition active:scale-[0.98]"
            >
              {hymnalLogos[id] ? (
                <img
                  src={hymnalLogos[id]}
                  alt=""
                  aria-hidden
                  className="h-12 w-12 shrink-0 rounded-xl object-cover"
                />
              ) : (
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-2xl"
                  aria-hidden
                >
                  {hymnalIcons[id]}
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-text">{hymnalLabels[id]}</p>
                <p className="truncate text-xs text-text-muted">{hymnalSubtitles[id]}</p>
              </div>
              <span className="shrink-0 text-xs font-medium text-text-muted">
                {count === undefined ? '…' : empty ? 'em breve' : `${count} hinos`}
              </span>
              <span className="text-text-muted">›</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
