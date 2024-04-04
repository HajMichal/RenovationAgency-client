import { StateCreator } from "zustand";

export type GeneralSlice = {
  darkTheme: boolean;
  updateTheme: (theme: boolean) => void;
};

export const useGeneralSlice: StateCreator<GeneralSlice> = (set) => ({
  darkTheme: false,
  updateTheme: (theme) => set(() => ({ darkTheme: theme })),
});
