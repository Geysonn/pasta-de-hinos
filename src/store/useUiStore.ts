import { create } from 'zustand'

interface UiState {
  navHidden: boolean
  setNavHidden: (hidden: boolean) => void
}

export const useUiStore = create<UiState>()((set) => ({
  navHidden: false,
  setNavHidden: (hidden) => set({ navHidden: hidden }),
}))
