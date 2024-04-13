import { Link } from "react-router-dom";
import { Dollar, Home, Location } from "../../icons";
import { BuildingResponse } from "../../types";
import "./AdvertisementCard.sass";
import { Text } from "@mantine/core";

interface AdvertisementCardProps {
  building: BuildingResponse;
  singleAdd?: boolean;
}

export const AdvertisementCard = ({
  building,
  singleAdd = false,
}: AdvertisementCardProps) => {
  const { title, estimatedCost, estimatedArea, city } = building;
  return (
    <Link to={`/advertisements/${building.id}`} id="cardContainer">
      <img id="cardImage" src={"/images/torenovate.jpg"} alt="advCard" />
      <div id="cardContent">
        <Text id="title">{title}</Text>
        <div id="cardBottomSection">
          <Text className="bottomText" id="price">
            <Dollar />
            {estimatedCost}
          </Text>

          <Text className="bottomText" id="area">
            <Home />
            {estimatedArea}
          </Text>

          {!singleAdd && (
            <Text className="bottomText" id="city">
              <Location />
              {city}
            </Text>
          )}
        </div>
      </div>
    </Link>
  );
};
