import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface NotesState {
  notes: Record<string, string>
  setNote: (verseKey: string, text: string) => void
  removeNote: (verseKey: string) => void
  getNote: (verseKey: string) => string | undefined
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set, get) => ({
      notes: {},
      setNote: (verseKey, text) => set((state) => ({ notes: { ...state.notes, [verseKey]: text } })),
      removeNote: (verseKey) =>
        set((state) => {
          const notes = { ...state.notes }
          delete notes[verseKey]
          return { notes }
        }),
      getNote: (verseKey) => get().notes[verseKey],
    }),
    { name: 'adba-app-notes' },
  ),
)
