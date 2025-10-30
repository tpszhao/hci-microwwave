import { create } from "zustand";

type timerType = [number, number, number];

type State = {
  page: string;
  customizingId: string;
  timer: [number, number, number];
  changePage: (newPage: string) => void;
  changeCustomize: (newPage: string) => void;
  cook: (timer?: [number, number, number]) => void;
  customizeOptions: Record<string, [number, number, number]>;
  setCustomizeOptions: (id: string, timer: timerType) => void;
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
  changeCustomize: customizingId => set({ customizingId }),
  customizeOptions: {
    "1": [0, 1, 0],
    "2": [0, 2, 0],
    "3": [0, 3, 0]
  },
  setCustomizeOptions: (id, state) => {
    set({
      customizeOptions: {
        ...get().customizeOptions,
        [id]: state
      }
    });
  }
}));
