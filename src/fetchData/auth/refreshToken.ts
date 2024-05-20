import axiosAuthenticatedInstance from "../axiosAuthenticatedInstace";

export interface RefreshTokenOutput {
  accessToken: string;
  refreshToken: string;
}
export const refreshToken = async (): Promise<RefreshTokenOutput> => {
  const response = await axiosAuthenticatedInstance.post("/auth/refresh");

  return response.data;
};
