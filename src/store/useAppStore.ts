import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark' | 'system'

interface AppState {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  fontScale: number
  setFontScale: (scale: number) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      fontScale: 1,
      setFontScale: (scale) => set({ fontScale: Math.min(1.6, Math.max(0.8, scale)) }),
    }),
    { name: 'adba-app-state' },
  ),
)
