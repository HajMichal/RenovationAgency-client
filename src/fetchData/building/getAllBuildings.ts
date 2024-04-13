import axios from "axios";

interface BuildingFilters {
  page: string;
  city?: string;
  gtPrice?: string;
  ltPrice?: string;
  gtArea?: string;
  ltArea?: string;
  zipcode?: string;
}

export const getAllBuildings = async (data: BuildingFilters) => {
  const queryParams = new URLSearchParams();

  if (data.city) queryParams.append("city", data.city);
  if (data.gtPrice) queryParams.append("gtPrice", data.gtPrice);
  if (data.ltPrice) queryParams.append("ltPrice", data.ltPrice);
  if (data.gtArea) queryParams.append("gtArea", data.gtArea);
  if (data.ltArea) queryParams.append("ltArea", data.ltArea);
  if (data.zipcode) queryParams.append("zipcode", data.zipcode);

  const url = `${import.meta.env.VITE_SERVER_URL}/builds/0?${queryParams}`;

  return await axios.get(url);
};
