import { Text } from "@mantine/core";
import "./AdvertsCount.sass";

export const AdvertsCount = () => {
  return (
    <div id="content">
      <Text
        aria-label="colored"
        className="text"
        variant="gradient"
        gradient={{ from: "orange", to: "yellow", deg: 90 }}
      >
        {123}
      </Text>
      <Text aria-label="normal" className="text">
        adverts in your country{" "}
      </Text>
      <Text
        aria-label="colored"
        className="text"
        variant="gradient"
        gradient={{ from: "orange", to: "yellow", deg: 180 }}
      >
        !
      </Text>
    </div>
  );
};
