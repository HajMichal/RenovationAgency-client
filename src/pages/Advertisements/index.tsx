/* eslint-disable react-hooks/exhaustive-deps */
import "./Advertisements.sass";
import {
  AdvertisementCard,
  AdvertsCount,
  DoubleInput,
  Logo,
  NavBar,
} from "../../components";
import { Dollar, Home, Search } from "../../icons";
import { useQuery } from "@tanstack/react-query";
import { getAllBuildings } from "../../fetchData/building/getAllBuildings";
import { BuildingResponse } from "../../types";
import useStore from "../../store";
import { useEffect } from "react";

export interface Inputs {
  search: string;
  city: string;
  zipcode: string;
  ltPrice: string;
  gtPrice: string;
  ltArea: string;
  gtArea: string;
}

const Advertisements = () => {
  const { darkTheme, buildingStore } = useStore();

  const {
    data: allBuildings,
    isSuccess,
    refetch,
  } = useQuery({
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

  useEffect(() => {
    refetch();
  }, [
    buildingStore.location,
    buildingStore.gtArea,
    buildingStore.ltArea,
    buildingStore.gtPrice,
    buildingStore.ltPrice,
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
          {isSuccess &&
            allBuildings.data.map((building: BuildingResponse) => (
              <AdvertisementCard key={building.id} building={building} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
