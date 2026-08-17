import { Logo } from './Logo'

interface Props {
  title?: string
  subtitle?: string
  showBack?: boolean
  onBack?: () => void
}

export function Header({ title = 'Pasta de Hinos', subtitle, showBack, onBack }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center gap-3">
        {showBack ? (
          <button
            onClick={onBack}
            aria-label="Voltar"
            className="flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95"
          >
            ←
          </button>
        ) : (
          <Logo size={34} />
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold leading-tight text-text">{title}</p>
          {subtitle && <p className="truncate text-xs text-text-muted">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}
