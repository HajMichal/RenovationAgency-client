import { create } from "zustand";
import { useGeneralSlice, type GeneralSlice } from "./generalSlice";
import { useBuildingSlice, type BuildingSlice } from "./buildingSlice";
import { useRegisterSlice, type RegisterSlice } from "./registerSlice";

type Store = GeneralSlice & BuildingSlice & RegisterSlice;

const useStore = create<Store>()((...actions) => ({
  ...useGeneralSlice(...actions),
  ...useBuildingSlice(...actions),
  ...useRegisterSlice(...actions),
}));

export default useStore;
