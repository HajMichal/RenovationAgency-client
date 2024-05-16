import axiosAuthenticatedInstance from "../axiosAuthenticatedInstace";

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
    contractorId: null | number;
  };
  user: {
    id: number;
    email: string;
    phone: string;
  };
}

export const getSingleBuilding = async (
  id: string
): Promise<GetSingleBuildingResponse> => {
  const response = await axiosAuthenticatedInstance.get(
    "/builds/singlePost/" + id
  );
  console.log(response.data);
  return response.data;
};
