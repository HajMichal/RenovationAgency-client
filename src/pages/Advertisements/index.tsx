import "./Advertisements.sass";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";
import {
  AdvertisementCard,
  AdvertsCount,
  DoubleInput,
  Logo,
  NavBar,
} from "../../components";
import { Dollar, Home, Search } from "../../icons";
import { getAllBuildings } from "../../fetchData/building/getAllBuildings";
import { BuildingResponse } from "../../types";
import useStore from "../../store";

const debTime = 300;

const Advertisements = () => {
  const { darkTheme, buildingStore } = useStore();
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
    <div id="advertContainer" data-theme={darkTheme ? "dark" : "light"}>
      <div id="topBar">
        <Logo />
        <NavBar />
      </div>
      <div id="advertContent">
        <AdvertsCount />
        <div id="searchform">
          <DoubleInput
            icon={<Search />}
            label="Search"
            formKeys={["search", "location"]}
            placeholders={["Type, keywords", "Location"]}
            className="mainInput"
          />
          <div id="bottomInputs">
            <DoubleInput
              icon={<Dollar />}
              label="Price"
              formKeys={["gtPrice", "ltPrice"]}
              placeholders={["Lowest", "Highest"]}
              number
              className="bottomInput"
            />
            <DoubleInput
              icon={<Home />}
              label="Area"
              formKeys={["gtArea", "ltArea"]}
              placeholders={["Lowest", "Highest"]}
              number
              className="bottomInput"
            />
          </div>
        </div>
        <div id="advertisements">
          {allBuildings?.data &&
            allBuildings.data.map((building: BuildingResponse) => (
              <AdvertisementCard key={building.id} building={building} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
