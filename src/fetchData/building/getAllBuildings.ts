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
    `${import.meta.env.VITE_SERVER_URL}/builds/${data.page}
    ?city=${data.city}
    &gtPrice=${data.gtPrice}
    &ltPrice=${data.ltPrice}
    &gtArea=${data.gtArea}
    &ltArea=${data.ltArea}
    &zipcode=${data.zipcode}`
  );
};
