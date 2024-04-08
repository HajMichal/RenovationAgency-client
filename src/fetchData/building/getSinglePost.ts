import axios from "axios";

interface GetSingleBuildingResponse {
  id: number;
  title: string;
  address: string;
  city: string;
  zipcode: string;
  description: string;
  estimatedCost: number;
  estimatedArea: number;
  date: string;
  userId: number;
  booking: {
    id: number;
    deadline: string;
    buildingId: number;
    contractorId: null;
  };
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    createdat: string;
  };
}

export const getSingleBuilding = async (
  id: string
): Promise<GetSingleBuildingResponse> => {
  const url = `${import.meta.env.VITE_SERVER_URL}/builds/singlePost/${id}`;
  const response = await axios.get(url);
  return response.data;
};
