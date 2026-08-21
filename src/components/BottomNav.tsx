import { NavLink } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
import { useUiStore } from '../store/useUiStore'

export function BottomNav() {
  const lastReadBible = useAppStore((s) => s.lastReadBible)
  const navHidden = useUiStore((s) => s.navHidden)
  const bibleHref = lastReadBible ? `/biblia/${lastReadBible.book}/${lastReadBible.chapter}` : '/biblia'

  const items = [
    { to: '/', label: 'Início', icon: '🏠', end: true },
    { to: bibleHref, label: 'Bíblia', icon: '📖', match: (p: string) => p.startsWith('/biblia') },
    { to: '/planos', label: 'Planos', icon: '✅' },
    { to: '/descubra', label: 'Descubra', icon: '🔎' },
    {
      to: '/hinos',
      label: 'Hinos',
      icon: '🎵',
      match: (p: string) => ['/hinos', '/harpa', '/preciosas', '/geracao-life'].some((prefix) => p.startsWith(prefix)),
    },
  ]

  return (
    <nav
      className={`safe-bottom fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-bg transition-transform duration-300 ease-out ${
        navHidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto grid max-w-md grid-cols-5">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end}
            className={({ isActive }) => {
              const active = item.match ? item.match(location.pathname) : isActive
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
