import { Button, Text } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../fetchData/user/register";
import { UserDataInterface } from "../../types/user/registrationData";

interface StepButtonProps {
  redirectUrl: string;
  redirectText: string;
  buttonText: string;
  setStep?: (nextStep: number) => void;
  step?: number;
  userData?: UserDataInterface;
}

export const StepButton = ({
  redirectUrl,
  redirectText,
  buttonText,
  userData,
  step = 0,
  setStep,
}: StepButtonProps) => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate("/advertisements");
    },
  });

  return (
    <div id="stepButtonContainer">
      {step !== 2 && (
        <Text
          style={{ width: "100%", textAlign: "center" }}
          size="sm"
          c={"orange"}
        >
          <Link className="navlink" to={`/auth/${redirectUrl}`}>
            {redirectText}
          </Link>
        </Text>
      )}
      <Button
        onClick={() => {
          if (step <= 1 && setStep) setStep(step + 1);
          else if (step === 2 && userData) mutate(userData);
        }}
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
        {step !== 2 ? `${buttonText}` : "Create account"}
      </Button>
    </div>
  );
};
