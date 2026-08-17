interface Props {
  title?: string
  description?: string
  onRetry?: () => void
}

export function ErrorState({
  title = 'Não foi possível carregar o conteúdo',
  description = 'Verifique sua conexão e tente novamente.',
  onRetry,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <span className="text-4xl" aria-hidden>
        ⚠️
      </span>
      <p className="font-medium text-text">{title}</p>
      <p className="text-sm text-text-muted max-w-xs">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white active:scale-95 transition"
        >
          Tentar novamente
        </button>
      )}
    </div>
  )
}
