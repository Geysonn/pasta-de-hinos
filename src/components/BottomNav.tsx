import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Pastas', icon: '🗂️', end: true },
  { to: '/biblia', label: 'Bíblia', icon: '📖' },
  { to: '/favoritos', label: 'Favoritos', icon: '⭐' },
  { to: '/configuracoes', label: 'Ajustes', icon: '⚙️' },
]

export function BottomNav() {
  return (
    <nav className="safe-bottom fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition ${
                isActive ? 'text-primary' : 'text-text-muted'
              }`
            }
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
