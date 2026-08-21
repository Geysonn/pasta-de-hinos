import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DailyVerseState {
  likedDates: string[]
  isLiked: (date: string) => boolean
  toggleLiked: (date: string) => void
}

export const useDailyVerseStore = create<DailyVerseState>()(
  persist(
    (set, get) => ({
      likedDates: [],
      isLiked: (date) => get().likedDates.includes(date),
      toggleLiked: (date) =>
        set((state) => ({
          likedDates: state.likedDates.includes(date)
            ? state.likedDates.filter((d) => d !== date)
            : [...state.likedDates, date],
        })),
    }),
    { name: 'adba-app-daily-verse' },
  ),
)
