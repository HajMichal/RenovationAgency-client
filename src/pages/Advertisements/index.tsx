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
import { useForm } from "react-hook-form";

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
  const { darkTheme } = useStore();

  const { register } = useForm<Inputs>();

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
            register={register}
            formKeys={["search", "city"]}
            placeholders={["Type, keywords", "Location"]}
            className="mainInput"
          />
          <div id="bottomInputs">
            <DoubleInput
              icon={<Dollar />}
              label="Price"
              register={register}
              formKeys={["ltPrice", "gtPrice"]}
              placeholders={["Lowest", "Highest"]}
              number
              className="bottomInput"
            />
            <DoubleInput
              icon={<Home />}
              label="Area"
              register={register}
              formKeys={["ltArea", "gtArea"]}
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
