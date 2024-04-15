import { memo } from "react";
import "./Forms.sass";
import { Button, Text } from "@mantine/core";

export const RegisterThirdForm = memo(() => {
  return (
    <div className="centerItems" style={{ marginTop: "2rem" }}>
      <Text id="shortDescription">
        If you want to have access to take orders create contractor account
      </Text>
      <Button variant="outline" id="outlinedButton">
        Create contractor
      </Button>
      <Text id="shortDescription">Otherwise</Text>
    </div>
  );
});
