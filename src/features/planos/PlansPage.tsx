import { Header } from '../../components/Header'
import { EmptyState } from '../../components/EmptyState'

export function PlansPage() {
  return (
    <div>
      <Header title="Planos" />
      <div className="px-4 py-4">
        <EmptyState icon="✅" title="Em breve" description="Os planos de leitura e estudo vão aparecer aqui." />
      </div>
    </div>
  )
}
