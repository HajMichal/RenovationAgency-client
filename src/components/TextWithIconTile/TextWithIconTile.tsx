import { Text } from "@mantine/core";
import "./TextWithIconTile.sass";

interface TextWithIconTileType {
  Icon: () => JSX.Element;
  text: string | number;
  specifier: string;
}

export const TextWithIconTile = ({
  Icon,
  text,
  specifier,
}: TextWithIconTileType) => {
  return (
    <div id="textWithIconTile">
      <Icon />
      <div>
        <Text id="specifier">{specifier}</Text>
        <Text id="tileValue">{text}</Text>
      </div>
    </div>
  );
};
