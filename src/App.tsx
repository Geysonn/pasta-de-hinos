import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { useThemeEffect } from './theme/useThemeEffect'

import { HomePage } from './features/home/HomePage'
import { HymnalListPage } from './features/hinarios/HymnalListPage'
import { HymnDetailPage } from './features/hinarios/HymnDetailPage'
import { FavoritesPage } from './features/favoritos/FavoritesPage'
import { SettingsPage } from './features/configuracoes/SettingsPage'

export default function App() {
  useThemeEffect()

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/harpa" element={<HymnalListPage hymnalId="harpa" basePath="/harpa" />} />
        <Route path="/harpa/:id" element={<HymnDetailPage hymnalId="harpa" />} />
        <Route path="/preciosas" element={<HymnalListPage hymnalId="preciosas" basePath="/preciosas" />} />
        <Route path="/preciosas/:id" element={<HymnDetailPage hymnalId="preciosas" />} />
        <Route
          path="/geracao-life"
          element={<HymnalListPage hymnalId="geracaoLife" basePath="/geracao-life" />}
        />
        <Route path="/geracao-life/:id" element={<HymnDetailPage hymnalId="geracaoLife" />} />

        <Route path="/favoritos" element={<FavoritesPage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
