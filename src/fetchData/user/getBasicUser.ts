import axiosAuthenticatedInstance from "../axiosAuthenticatedInstace";

interface GetbasicUserResponse {
  name: string;
  email: string;
  phone: string;
}
export const getBasicUser = async (
  userId: number
): Promise<GetbasicUserResponse> => {
  const response = await axiosAuthenticatedInstance.get(`/user/${userId}`);
  return response.data;
};
