import "./SearchField.sass";

import { DoubleInput } from "../..";
import { Dollar, Home, Search } from "../../../icons";

export const SearchField = () => {
  return (
    <div id="searchform">
      <DoubleInput
        icon={<Search />}
        label="Search"
        formKeys={["search", "location"]}
        placeholders={["Type, keywords", "Location"]}
        className="mainInput"
      />
      <div id="bottomInputs">
        <DoubleInput
          icon={<Dollar />}
          label="Price"
          formKeys={["gtPrice", "ltPrice"]}
          placeholders={["Lowest", "Highest"]}
          number
          className="bottomInput"
        />
        <DoubleInput
          icon={<Home />}
          label="Area"
          formKeys={["gtArea", "ltArea"]}
          placeholders={["Lowest", "Highest"]}
          number
          className="bottomInput"
        />
      </div>
    </div>
  );
};
