import { TopBar } from "../../../components";
import useStore from "../../../store";

export const CreateAd = () => {
  const { darkTheme } = useStore();

  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      {" "}
      <TopBar /> CreatedAd
    </div>
  );
};
