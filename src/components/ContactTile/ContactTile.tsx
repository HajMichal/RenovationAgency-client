import { memo } from "react";
import "./ContactTile.sass";
import { Button, Popover, Text } from "@mantine/core";

interface ContactTileProps {
  phone: string;
}
export const ContactTile = memo(({ phone }: ContactTileProps) => {
  return (
    <div className="singlAddComponentContainer">
      <div id="contactTileContent">
        <Button color="orange" variant="outline" id="leftButton">
          Send message
        </Button>
        <Popover withArrow shadow="md">
          <Popover.Target>
            <Button w={"30%"} color="orange">
              Call
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="xl" id="bigText">
              {phone.replace(/(\d{3})(?=\d)/g, "$1 ")}
            </Text>
          </Popover.Dropdown>
        </Popover>
      </div>
    </div>
  );
});
