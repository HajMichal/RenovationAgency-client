import { Stepper } from "@mantine/core";
import {
  ImgWithBg,
  Logo,
  RegisterFirstForm,
  RegisterSecondForm,
  RegisterThirdForm,
  StepButton,
} from "../../../components";
import { useState } from "react";

const Register = () => {
  const [active, setActive] = useState(0);
  return (
    <div id="container">
      <div id="leftCol">
        <Logo />
        <Stepper active={active} color="orange" style={{ marginTop: "15vh" }}>
          <Stepper.Step description="first step" />
          <Stepper.Step description="second step" />
          <Stepper.Step description="third step" />
        </Stepper>
        {active === 0 && <RegisterFirstForm />}
        {active === 1 && <RegisterSecondForm />}
        {active === 2 && <RegisterThirdForm />}
        <StepButton
          redirectUrl="signin"
          redirectText="Sign In!"
          buttonText="Next Step"
        />
      </div>
      <ImgWithBg />
    </div>
  );
};

export default Register;
