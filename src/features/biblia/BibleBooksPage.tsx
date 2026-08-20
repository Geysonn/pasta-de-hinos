import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { SearchInput } from '../../components/SearchInput'
import { bibleBooks } from '../../data/bibleBooks'

export function BibleBooksPage() {
  const [query, setQuery] = useState('')

  const { vt, nt } = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = q ? bibleBooks.filter((b) => b.name.toLowerCase().includes(q)) : bibleBooks
    return {
      vt: filtered.filter((b) => b.testament === 'VT'),
      nt: filtered.filter((b) => b.testament === 'NT'),
    }
  }, [query])

  return (
    <div>
      <Header title="Bíblia" subtitle="Almeida Atualizada" />
      <div className="px-4 pt-4">
        <SearchInput value={query} onChange={setQuery} placeholder="Buscar livro…" />
      </div>

      <div className="px-4 py-4">
        {vt.length > 0 && <BookGroup title="Antigo Testamento" books={vt} />}
        {nt.length > 0 && <BookGroup title="Novo Testamento" books={nt} />}
        {vt.length === 0 && nt.length === 0 && (
          <p className="py-8 text-center text-sm text-text-muted">Nenhum livro encontrado</p>
        )}
      </div>
    </div>
  )
}

function BookGroup({ title, books }: { title: string; books: typeof bibleBooks }) {
  return (
    <div className="mb-6">
      <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-text-muted">{title}</p>
      <div className="grid grid-cols-3 gap-2">
        {books.map((b) => (
          <Link
            key={b.abbrev}
            to={`/biblia/${b.abbrev}`}
            className="rounded-xl border border-border bg-surface px-3 py-3 text-center text-sm font-medium text-text transition active:scale-[0.97]"
          >
            {b.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
