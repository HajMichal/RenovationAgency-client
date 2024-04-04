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

const Advertisements = () => {
  const { data: allBuildings, isSuccess } = useQuery({
    queryKey: ["buildingsData"],
    queryFn: () =>
      getAllBuildings({
        page: "0",
        city: "Bielsko",
        gtArea: "",
        ltArea: "",
        gtPrice: "",
        ltPrice: "",
        zipcode: "",
      }),
  });

  return (
    <div id="advertContainer">
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
            placeholders={["Type, keywords", "Location"]}
            className="mainInput"
          />
          <div id="bottomInputs">
            <DoubleInput
              icon={<Dollar />}
              label="Price"
              placeholders={["Lowest", "Highest"]}
              number
              className="bottomInput"
            />
            <DoubleInput
              icon={<Home />}
              label="Area"
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
