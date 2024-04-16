import axiosAuthenticatedInstance from "../axiosAuthenticatedInstace";

export const getSingleUser = async () => {
  const response = await axiosAuthenticatedInstance.get("/user");
  return response.data;
};
