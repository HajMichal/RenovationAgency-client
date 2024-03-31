import axios from "axios";

interface Login {
  email: string;
  password: string;
}
export const login = async (data: Login) => {
  return await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/signin`, {
    login: data.email,
    password: data.password,
  });
};
