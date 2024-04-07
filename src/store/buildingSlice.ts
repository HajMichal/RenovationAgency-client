import { StateCreator } from "zustand";

export type BuildingSlice = {
  buildingStore: {
    search: string;
    location: string;
    ltPrice: string;
    gtPrice: string;
    ltArea: string;
    gtArea: string;
  };

  updateBuildingState: (key: string, state: string | number | boolean) => void;
};

export const useBuildingSlice: StateCreator<BuildingSlice> = (set) => ({
  buildingStore: {
    search: "",
    location: "",
    ltPrice: "",
    gtPrice: "",
    ltArea: "",
    gtArea: "",
  },
  updateBuildingState: (key, value) =>
    set((state) => ({
      ...state,
      buildingStore: { ...state.buildingStore, [key]: value },
    })),
});
