import { memo } from "react";
import "./ContactTile.sass";
import { Button } from "@mantine/core";

export const ContactTile = memo(() => {
  return (
    <div className="singlAddComponentContainer">
      <div id="contactTileContent">
        <Button color="orange" variant="outline" id="leftButton">
          Send message
        </Button>
        <Button id="rightButton">Call</Button>
      </div>
    </div>
  );
});
