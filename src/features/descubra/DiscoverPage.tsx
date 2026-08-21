import { Header } from '../../components/Header'
import { EmptyState } from '../../components/EmptyState'

export function DiscoverPage() {
  return (
    <div>
      <Header title="Descubra" />
      <div className="px-4 py-4">
        <EmptyState icon="🔎" title="Em breve" description="Conteúdos e recursos para descobrir vão aparecer aqui." />
      </div>
    </div>
  )
}
