import axios from "axios";

interface GetAllBuildings {
  page: string;
  city: string;
  gtPrice: string;
  ltPrice: string;
  gtArea: string;
  ltArea: string;
  zipcode: string;
}

export const getAllBuildings = async (data: GetAllBuildings) => {
  return await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/builds/0${
      data.city && "?city=" + data.city
    }${data.gtPrice && "&gtPrice=" + data.gtPrice}${
      data.ltPrice && "&ltPrice=" + data.ltPrice
    }${data.gtArea && "&gtArea=" + data.gtArea}${
      data.ltArea && "&ltArea=" + data.ltArea
    }${data.zipcode && "&zipcode=" + data.zipcode}`
  );
};
