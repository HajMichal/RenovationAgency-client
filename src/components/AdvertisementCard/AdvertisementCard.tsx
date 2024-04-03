import { Dollar, Home, Location } from "../../icons";
import "./AdvertisementCard.sass";
import { Text } from "@mantine/core";

interface AdvertisementCard {
  title: string;
  price: string;
  area: string;
  city: string;
  image?: string;
}
export const AdvertisementCard = ({
  title,
  price,
  area,
  city,
  image,
}: AdvertisementCard) => {
  return (
    <div id="cardContainer">
      <img
        id="cardImage"
        src={image ? image : "./images/torenovate.jpg"}
        alt="advCard"
      />
      <div id="cardContent">
        <Text id="title">{title}</Text>
        <div id="bottomSection">
          <Text id="bottomText">
            <Dollar />
            {price} PLN
          </Text>

          <Text id="bottomText">
            <Home />
            {area} M²
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
