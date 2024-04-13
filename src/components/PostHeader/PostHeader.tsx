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
    <div className="singlAddComponentContainer">
      <div id="topSection">
        <Avatar size="xl" />
        <div>
          <Text id="title">{buildingData.title}</Text>
          <div className="textWithIcon">
            <Location />
            <Text>{buildingData.city}</Text>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div id="bottomSection">
        <TextWithIconTile
          text={buildingData.estimatedCost
            .toString()
            .replace(/\b(\d{1,3})(?=(\d{3})+(?!\d))/g, "$1,")}
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
