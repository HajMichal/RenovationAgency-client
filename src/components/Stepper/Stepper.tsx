import { Stepper } from "@mantine/core";

interface StepperComponentProps {
  highestStepVisited: number;
  active: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const StepperComponent = ({
  highestStepVisited,
  active,
  setStep,
}: StepperComponentProps) => {
  const shouldAllowSelectStep = (step: number) =>
    highestStepVisited >= step && active !== step;

  return (
    <Stepper
      active={active}
      onStepClick={setStep}
      color="orange"
      style={{ marginTop: "15vh" }}
    >
      <Stepper.Step
        allowStepSelect={shouldAllowSelectStep(0)}
        description="first step"
      />
      <Stepper.Step
        allowStepSelect={shouldAllowSelectStep(1)}
        description="second step"
      />
      <Stepper.Step
        allowStepSelect={shouldAllowSelectStep(2)}
        description="third step"
      />
    </Stepper>
  );
};
