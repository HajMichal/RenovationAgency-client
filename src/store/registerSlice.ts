import { StateCreator } from "zustand";

export type RegisterSlice = {
  registerStore: {
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
  };
  updateRegisterState: (key: string, state: string | number | boolean) => void;
};

export const useRegisterSlice: StateCreator<RegisterSlice> = (set) => ({
  registerStore: {
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  },
  updateRegisterState: (key, value) =>
    set((state) => ({
      ...state,
      buildingStore: { ...state.registerStore, [key]: value },
    })),
});
