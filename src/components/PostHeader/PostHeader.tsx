import { Avatar, Text } from "@mantine/core";
import "./PostHeader.sass";
import { Calendar, Dollar, Home, Location, Pencil } from "../../icons";
import { TextWithIconTile } from "..";

interface PostHeader {
  title: string;
  city: string;
  date: string;
  estimatedCost: number;
  estimatedArea: number;
}

export const PostHeader = (buildingData: PostHeader) => {
  return (
    <div id="headerContainer">
      <div id="topSection">
        <Avatar size="lg" />
        <div>
          <Text id="title">{buildingData.title}</Text>
          <Text className="textWithIcon">
            <Location />
            {buildingData.city}
          </Text>
        </div>
      </div>
      <hr id="line" />
      <div id="bottomSection">
        <TextWithIconTile
          text={buildingData.estimatedCost}
          specifier={"Amount"}
          Icon={Dollar}
        />
        <TextWithIconTile
          text={buildingData.estimatedArea}
          specifier={"Area"}
          Icon={Home}
        />
        <TextWithIconTile
          text={"Work Contract"}
          specifier={"Settlement method"}
          Icon={Pencil}
        />
        <TextWithIconTile
          text={new Date(buildingData.date).toLocaleDateString("gn-GB")}
          specifier={"Deadline"}
          Icon={Calendar}
        />
      </div>
    </div>
  );
};
