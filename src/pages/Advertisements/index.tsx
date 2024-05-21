import "./Advertisements.sass";

import {
  AdvertisementList,
  AdvertsCount,
  SearchField,
  TopBar,
} from "../../components";
import useStore from "../../store";

const Advertisements = () => {
  const { darkTheme } = useStore();

  return (
    <div id="advertContainer" data-theme={darkTheme ? "dark" : "light"}>
      <TopBar />
      <div id="advertContent">
        <AdvertsCount />
        <SearchField />
        <AdvertisementList />
      </div>
    </div>
  );
};

export default Advertisements;
