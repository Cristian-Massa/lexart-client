import { create } from 'zustand'

type Store = {
  pagination: number
  inc: () => void
  dec: () => void
}

export const useStore = create<Store>()((set) => ({
  pagination: 0,
  inc: () => set((state) => ({ pagination: state.pagination + 1 })),
  dec: () => set((state) => ({ pagination: state.pagination - 1 })),
}))
