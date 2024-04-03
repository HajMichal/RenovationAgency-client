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

const Advertisements = () => {
  const { data: allBUildings } = useQuery({
    queryKey: ["buildingsData"],
    queryFn: () =>
      getAllBuildings({
        page: "0",
        city: "",
        gtArea: "",
        ltArea: "",
        gtPrice: "",
        ltPrice: "",
        zipcode: "",
      }),
  });
  console.log(allBUildings);
  return (
    <div id="container">
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
          <AdvertisementCard
            title="I need someone to help with renovation my bathroom"
            price="12,500"
            area="30"
            city="Cracow"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
