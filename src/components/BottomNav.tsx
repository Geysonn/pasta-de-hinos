import { NavLink } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'

export function BottomNav() {
  const lastReadBible = useAppStore((s) => s.lastReadBible)
  const bibleHref = lastReadBible ? `/biblia/${lastReadBible.book}/${lastReadBible.chapter}` : '/biblia'

  const items = [
    { to: '/', label: 'Pastas', icon: '🗂️', end: true },
    { to: bibleHref, label: 'Bíblia', icon: '📖', match: '/biblia' },
    { to: '/favoritos', label: 'Favoritos', icon: '⭐' },
    { to: '/configuracoes', label: 'Ajustes', icon: '⚙️' },
  ]

  return (
    <nav className="safe-bottom fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-bg">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {items.map((item) => (
          <NavLink
            key={item.match ?? item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => {
              const active = item.match ? location.pathname.startsWith(item.match) : isActive
              return `flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition ${
                active ? 'text-primary' : 'text-text-muted'
              }`
            }}
          >
            <span className="text-lg" aria-hidden>
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
