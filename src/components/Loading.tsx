export function LoadingList({ rows = 4 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-3 px-4 py-4" aria-busy="true" aria-label="Carregando">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-24 w-full animate-pulse rounded-2xl bg-surface-alt" />
      ))}
    </div>
  )
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16" aria-busy="true" aria-label="Carregando">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
    </div>
  )
}
