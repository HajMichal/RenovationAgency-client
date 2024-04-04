import { create } from "zustand";
import { useGeneralSlice, type GeneralSlice } from "./generalSlice";

type Store = GeneralSlice;

const useStore = create<Store>()((...actions) => ({
  ...useGeneralSlice(...actions),
}));

export default useStore;
