import { create } from "zustand";

type State = {
  page: string;
  customizingId: string;
  timer: [number, number, number];
  changePage: (newPage: string) => void;
  changeCustomize: (newPage: string) => void;
  cook: (timer?: [number, number, number]) => void;
};

export const useScreenState = create<State>((set, get) => ({
  page: "",
  timer: [0, 0, 0],
  cook: timer => {
    set({
      timer: timer || get().timer,
      page: "cooking"
    });
  },
  customizingId: "",
  changePage: page => set({ page }),
  changeCustomize: customizingId => set({ customizingId })
}));
