interface Props {
  icon?: string
  title: string
  description?: string
}

export function EmptyState({ icon = '📭', title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-16 text-center">
      <span className="text-4xl" aria-hidden>
        {icon}
      </span>
      <p className="font-medium text-text">{title}</p>
      {description && <p className="text-sm text-text-muted max-w-xs">{description}</p>}
    </div>
  )
}
