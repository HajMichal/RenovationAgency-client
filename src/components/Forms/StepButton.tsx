import { Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface StepButtonProps {
  redirectUrl: string;
  redirectText: string;
  buttonText: string;
}

export const StepButton = ({
  redirectUrl,
  redirectText,
  buttonText,
}: StepButtonProps) => {
  return (
    <div id="stepButtonContainer">
      <Text
        style={{ width: "100%", textAlign: "center" }}
        size="sm"
        c={"orange"}
      >
        <Link className="navlink" to={`/auth/${redirectUrl}`}>
          {redirectText}
        </Link>
      </Text>
      <Button
        variant="gradient"
        gradient={{ from: "rgba(255, 94, 0, 1)", deg: 90, to: "orange" }}
        size="compact-xl"
        style={{
          fontSize: "24px",
          fontStyle: "italic",
          width: "74%",
        }}
        color="orange"
        type="submit"
      >
        {buttonText}
      </Button>
    </div>
  );
};
