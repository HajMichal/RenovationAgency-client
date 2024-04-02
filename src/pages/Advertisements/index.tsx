import "./Advertisements.sass";
import { DoubleInput, Logo } from "../../components";
import { Dollar, Home, Search } from "../../icons";
import { Text } from "@mantine/core";

const Advertisements = () => {
  return (
    <div id="container">
      <div style={{ width: "100vw" }}>
        <Logo />
      </div>
      <div id="advertContent">
        <div>
          <Text>{123}</Text> adverts in your country <Text>!</Text>
        </div>
        <div id="searchform">
          <DoubleInput
            icon={<Search />}
            label="Search"
            placeholders={["Type, keywords", "Location"]}
            className="mainInput"
          />
          <div id="bottomInputs">
            <DoubleInput
              icon={<Dollar />}
              label="Price"
              placeholders={["Lowest", "Highest"]}
              number
              className="bottomInput"
            />
            <DoubleInput
              icon={<Home />}
              label="Area"
              placeholders={["Lowest", "Highest"]}
              number
              className="bottomInput"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
