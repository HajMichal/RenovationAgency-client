import axios from "axios";
import { UserDataInterface } from "../../types/user/registrationData";

export const register = async ({
  email,
  name,
  phone,
  address,
  password,
  city,
}: UserDataInterface) => {
  return await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/signup`, {
    email,
    name,
    phone,
    password,
    address: city + ", " + address,
  });
};
