import axios from "axios";
import { MapProps } from "../../types";

export const GetLatLng = async ({ city, address }: MapProps) => {
  const response = await axios.get(
    `https://us1.locationiq.com/v1/search?format=json&key=pk.cc98d57eb0acd0bc76ad462b7701140d&city=${city}&road=${address}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  return response.data[0];
};
