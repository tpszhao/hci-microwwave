import { create } from "zustand";

type State = {
  page: string;
  customizingId: string;
  changePage: (newPage: string) => void;
  changeCustomize: (newPage: string) => void;
};

export const useScreenState = create<State>(set => ({
  page: "",
  customizingId: "",
  changePage: page => set({ page }),
  changeCustomize: customizingId => set({ customizingId })
}));
