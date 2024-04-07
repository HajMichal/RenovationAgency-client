import { Dollar, Home, Location } from "../../icons";
import { BuildingResponse } from "../../types";
import "./AdvertisementCard.sass";
import { Text } from "@mantine/core";

interface AdvertisementCard {
  title: string;
  price: string;
  area: string;
  city: string;
  image?: string;
}

interface AdvertisementCardProps {
  building: BuildingResponse;
}

export const AdvertisementCard = ({ building }: AdvertisementCardProps) => {
  const { title, estimatedCost, estimatedArea, city } = building;
  return (
    <div id="cardContainer">
      <img id="cardImage" src={"./images/torenovate.jpg"} alt="advCard" />
      <div id="cardContent">
        <Text id="title">{title}</Text>
        <div id="bottomSection">
          <Text className="bottomText" id="price">
            <Dollar />
            {estimatedCost}
          </Text>

          <Text className="bottomText" id="area">
            <Home />
            {estimatedArea}
          </Text>

          <Text className="bottomText" id="city">
            <Location />
            {city}
          </Text>
        </div>
      </div>
    </div>
  );
};
