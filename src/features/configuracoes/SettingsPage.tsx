import { Header } from '../../components/Header'
import { useAppStore, type ThemeMode } from '../../store/useAppStore'

const themeOptions: { value: ThemeMode; label: string }[] = [
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Escuro' },
  { value: 'system', label: 'Seguir sistema' },
]

export function SettingsPage() {
  const theme = useAppStore((s) => s.theme)
  const setTheme = useAppStore((s) => s.setTheme)
  const fontScale = useAppStore((s) => s.fontScale)
  const setFontScale = useAppStore((s) => s.setFontScale)

  return (
    <div>
      <Header title="Configurações" />
      <div className="px-4 py-4">
        <h2 className="mb-2 text-sm font-semibold text-text-muted">Tema</h2>
        <div className="flex gap-2">
          {themeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setTheme(opt.value)}
              className={`flex-1 rounded-xl border py-2.5 text-sm font-medium transition ${
                theme === opt.value ? 'border-primary bg-primary-soft text-primary' : 'border-border text-text-muted'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <h2 className="mt-6 mb-2 text-sm font-semibold text-text-muted">Tamanho da letra</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFontScale(fontScale - 0.1)}
            className="h-10 w-10 rounded-full border border-border text-sm font-medium text-text active:scale-95"
          >
            A-
          </button>
          <span className="text-sm text-text-muted">{Math.round(fontScale * 100)}%</span>
          <button
            onClick={() => setFontScale(fontScale + 0.1)}
            className="h-10 w-10 rounded-full border border-border text-sm font-medium text-text active:scale-95"
          >
            A+
          </button>
        </div>

        <h2 className="mt-6 mb-2 text-sm font-semibold text-text-muted">Sobre</h2>
        <p className="text-sm text-text-muted">
          Pasta de Hinos reúne, em um só lugar no celular, os cadernos de hinos usados nos cultos e reuniões —
          começando pela pasta do Círculo de Oração JD América. Funciona offline, como uma pasta física digital.
        </p>
      </div>
    </div>
  )
}
