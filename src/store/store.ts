import { create } from 'zustand'
type Store = {
  pagination: number
  inc: () => void
  dec: () => void
}

export const useStore = create<Store>()((set) => ({
  pagination: 0,
  inc: () => set((state) => ({ pagination: state.pagination + 6 })),
  dec: () => set((state) => ({ pagination: state.pagination - 6 })),
}))

type ConsoleStore = {
  log: string[];
  add: (string: string) => void;
  clear: () => void;
}

export const consoleStore = create<ConsoleStore>((set) => ({
  log: [],
  add: (string) => set((state) => ({ log: [...state.log, string] })),
  clear: () => set({ log: [] }),
}));
