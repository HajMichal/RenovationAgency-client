import { TopBar } from "../../../components";
import useStore from "../../../store";

const UserAds = () => {
  const { darkTheme } = useStore();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <TopBar />
      UserAds
    </div>
  );
};
export default UserAds;
