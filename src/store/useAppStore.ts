import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark' | 'system'

export interface BibleProgress {
  book: string
  chapter: number
}

interface AppState {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  fontScale: number
  setFontScale: (scale: number) => void
  lastReadBible: BibleProgress | null
  setLastReadBible: (progress: BibleProgress) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      fontScale: 1,
      setFontScale: (scale) => set({ fontScale: Math.min(1.6, Math.max(0.8, scale)) }),
      lastReadBible: null,
      setLastReadBible: (progress) => set({ lastReadBible: progress }),
    }),
    { name: 'adba-app-state' },
  ),
)
