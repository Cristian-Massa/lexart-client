import { create } from 'zustand'
import { Store, ConsoleStore, ModalStore, ProductStore } from '../types/store/store.type';
import { ProductResponse } from '../interfaces/product/product.interface';
export const useStore = create<Store>()((set) => ({
  pagination: 0,
  inc: () => set((state) => ({ pagination: state.pagination + 5 })),
  dec: () => set((state) => ({ pagination: state.pagination - 5 })),
  reset: () => set(() => ({ pagination: 0 })),
}))


export const consoleStore = create<ConsoleStore>((set) => ({
  log: [],
  add: (string) => set((state) => ({ log: [...state.log, string] })),
  clear: () => set({ log: [] }),
}));


export const modalStore = create<ModalStore>((set) => ({
  modal: false,
  switchModal: () => set((state) => ({ modal: !state.modal }))
}));

export const productStore = create<ProductStore>((set) => ({
  productResponse: null, // Initialize as null or an empty ProductResponse object
  setProductResponse: (data: ProductResponse) => set(() => ({ productResponse: data })),
}));