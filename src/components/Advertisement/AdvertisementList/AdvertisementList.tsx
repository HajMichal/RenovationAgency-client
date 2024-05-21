import "./AdvertisementList.sass";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";

import useStore from "../../../store";
import { getAllBuildings } from "../../../fetchData/building/getAllBuildings";
import { BuildingsResponse } from "../../../types";
import { AdvertisementCard } from "../..";

const debTime = 300;
export const AdvertisementList = () => {
  const { buildingStore } = useStore();

  const { data: allBuildings, refetch } = useQuery({
    queryKey: ["buildingsData"],
    queryFn: () =>
      getAllBuildings({
        page: "0",
        city: buildingStore.location,
        gtArea: buildingStore.gtArea,
        ltArea: buildingStore.ltArea,
        gtPrice: buildingStore.gtPrice,
        ltPrice: buildingStore.ltPrice,
        zipcode: "",
      }),
  });

  const [debouncedLocat] = useDebouncedValue(buildingStore.location, debTime);
  const [debouncedGtArea] = useDebouncedValue(buildingStore.gtArea, debTime);
  const [debouncedLtArea] = useDebouncedValue(buildingStore.ltArea, debTime);
  const [debouncedGtPrice] = useDebouncedValue(buildingStore.gtPrice, debTime);
  const [debouncedLtPrice] = useDebouncedValue(buildingStore.ltPrice, debTime);

  useEffect(() => {
    refetch();
  }, [
    debouncedLocat,
    debouncedGtArea,
    debouncedLtArea,
    debouncedGtPrice,
    debouncedLtPrice,
    refetch,
  ]);
  return (
    <div id="advertisements">
      {allBuildings?.data &&
        allBuildings.data.map((building: BuildingsResponse) => (
          <AdvertisementCard key={building.id} building={building} />
        ))}
    </div>
  );
};
