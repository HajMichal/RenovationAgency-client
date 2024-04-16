import { UserData } from "../types/user/useData";
import { NavigateFunction } from "react-router-dom";

export function useSession() {
  const userData = sessionData();

  return { setSessionData, userData, removeSession };
}

const setSessionData = (userData: UserData, isAuthenticated: boolean) => {
  sessionStorage.setItem(
    "sessionData",
    JSON.stringify({ userData, isAuthenticated })
  );
};

const removeSession = (navigate: NavigateFunction) => {
  sessionStorage.removeItem("sessionData");
  navigate("/auth/signin");
};

const sessionData = ():
  | (UserData & { isAuthenticated: boolean })
  | undefined => {
  const session = sessionStorage.getItem("sessionData");
  if (!session) return;
  const { userData, isAuthenticated } = JSON.parse(session);
  if (isAuthenticated) return { ...userData, isAuthenticated };
};
