export interface UserDataInterface {
  email: string;
  password: string;
  name: string;
  phone: string;
  address: string;
  city: string;
}

export interface RegisterFormProps {
  userData: UserDataInterface;
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface>>;
}
