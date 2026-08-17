import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  hymnFavorites: string[]
  toggleHymnFavorite: (hymnId: string) => void
  isHymnFavorite: (hymnId: string) => boolean
  verseFavorites: string[]
  toggleVerseFavorite: (verseKey: string) => void
  isVerseFavorite: (verseKey: string) => boolean
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      hymnFavorites: [],
      toggleHymnFavorite: (hymnId) =>
        set((state) => ({
          hymnFavorites: state.hymnFavorites.includes(hymnId)
            ? state.hymnFavorites.filter((id) => id !== hymnId)
            : [...state.hymnFavorites, hymnId],
        })),
      isHymnFavorite: (hymnId) => get().hymnFavorites.includes(hymnId),
      verseFavorites: [],
      toggleVerseFavorite: (verseKey) =>
        set((state) => ({
          verseFavorites: state.verseFavorites.includes(verseKey)
            ? state.verseFavorites.filter((k) => k !== verseKey)
            : [...state.verseFavorites, verseKey],
        })),
      isVerseFavorite: (verseKey) => get().verseFavorites.includes(verseKey),
    }),
    { name: 'adba-app-favorites' },
  ),
)
