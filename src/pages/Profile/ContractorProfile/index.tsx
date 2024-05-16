import { TopBar } from "../../../components";
import useStore from "../../../store";

const ContractorProfile = () => {
  const { darkTheme } = useStore();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <TopBar />
      ContractorProfile
    </div>
  );
};
export default ContractorProfile;
