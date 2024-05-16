import axios from "axios";

interface Login {
  email: string;
  password: string;
}
export const login = async (data: Login) => {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/auth/signin`,
    {
      login: data.email,
      password: data.password,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
