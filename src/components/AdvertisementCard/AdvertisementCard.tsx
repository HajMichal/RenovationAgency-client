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
          <Text id="bottomText">
            <Dollar />
            {estimatedCost} PLN
          </Text>

          <Text id="bottomText">
            <Home />
            {estimatedArea} M²
          </Text>

          <Text id="bottomText">
            <Location />
            {city}
          </Text>
        </div>
      </div>
    </div>
  );
};
