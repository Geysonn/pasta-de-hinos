interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchInput({ value, onChange, placeholder = 'Pesquisar…' }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-surface px-4 py-3">
      <span aria-hidden className="text-text-muted">
        🔎
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-text placeholder:text-text-muted focus:outline-none"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Limpar busca"
          className="text-text-muted hover:text-text"
        >
          ✕
        </button>
      )}
    </div>
  )
}
