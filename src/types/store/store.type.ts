import { ProductResponse } from "../../interfaces/product/product.interface";

export type ConsoleStore = {
  log: string[];
  add: (string: string) => void;
  clear: () => void;
};

export type Store = {
  pagination: number;
  inc: () => void;
  dec: () => void;
  reset: ()=> void;
};

export type ModalStore = {
  modal: boolean;
  switchModal: () => void;
};


export type ProductStore = {
  productResponse: ProductResponse | null; // Storing the entire ProductResponse or null
  setProductResponse: (data: ProductResponse) => void;
};