import "./Footer.sass";
import { Text } from "@mantine/core";

export const Footer = () => {
  return (
    <div id="footerContainer">
      <Text variant="text" id="text">
        Creator GitHub
      </Text>
      <a href="https://github.com/HajMichal" target="_blank">
        https://github.com/HajMichal
      </a>
    </div>
  );
};
