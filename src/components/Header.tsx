import { Logo } from './Logo'

interface Props {
  title?: string
  subtitle?: string
  showBack?: boolean
  onBack?: () => void
}

export function Header({ title = 'Minha Igreja', subtitle, showBack, onBack }: Props) {
  return (
    <header className="sticky top-0 z-30 bg-bg px-4 pb-2 pt-4">
      <div className="mx-auto flex max-w-md items-center gap-3">
        {showBack ? (
          <button
            onClick={onBack}
            aria-label="Voltar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-text active:scale-95"
          >
            ←
          </button>
        ) : (
          <Logo size={34} />
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-xl font-bold leading-tight text-text">{title}</p>
          {subtitle && <p className="truncate text-xs text-text-muted">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}
