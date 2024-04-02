import { BlackLogo } from "../../icons";
import { Text } from "@mantine/core";
import "./Logo.sass";

export const Logo = () => {
  return (
    <div id="logo">
      <BlackLogo />
      <Text
        className="text"
        style={{ fontSize: 46 }}
        fw={900}
        variant="gradient"
        gradient={{ from: "orange", to: "yellow", deg: 90 }}
      >
        RevAn
      </Text>
    </div>
  );
};
