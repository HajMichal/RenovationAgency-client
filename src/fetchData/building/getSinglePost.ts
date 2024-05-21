import { GetSingleBuildingResponse } from "../../types";
import axiosAuthenticatedInstance from "../axiosAuthenticatedInstace";

export const getSingleBuilding = async (
  id?: string
): Promise<GetSingleBuildingResponse> => {
  const response = await axiosAuthenticatedInstance.get(
    "/builds/singlePost/" + id
  );

  return response.data;
};
