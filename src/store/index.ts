import { create } from "zustand";
import { useGeneralSlice, type GeneralSlice } from "./generalSlice";
import { useBuildingSlice, type BuildingSlice } from "./buildingSlice";

type Store = GeneralSlice & BuildingSlice;

const useStore = create<Store>()((...actions) => ({
  ...useGeneralSlice(...actions),
  ...useBuildingSlice(...actions),
}));

export default useStore;
