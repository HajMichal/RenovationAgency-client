import { TopBar } from "../../components";
import useStore from "../../store";

function Profile() {
  const { darkTheme } = useStore();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      {" "}
      <TopBar /> Profile
    </div>
  );
}

export default Profile;
