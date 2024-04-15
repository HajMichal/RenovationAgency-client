import "../Auth.sass";
import {
  ImgWithBg,
  Logo,
  RegisterFirstForm,
  RegisterSecondForm,
  RegisterThirdForm,
  StepButton,
  StepperComponent,
} from "../../../components";
import { useState } from "react";

const Register = () => {
  const [active, setStep] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) return;

    setStep(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  return (
    <div id="container" data-theme={"light"}>
      <div id="leftCol">
        <Logo />
        <StepperComponent
          highestStepVisited={highestStepVisited}
          active={active}
          setStep={setStep}
        />
        {active === 0 && (
          <RegisterFirstForm userData={userData} setUserData={setUserData} />
        )}
        {active === 1 && (
          <RegisterSecondForm userData={userData} setUserData={setUserData} />
        )}
        {active === 2 && <RegisterThirdForm />}
        <StepButton
          redirectUrl="signin"
          redirectText="Sign In!"
          buttonText="Next Step"
          setStep={handleStepChange}
          step={active}
          userData={userData}
        />
      </div>
      <ImgWithBg />
    </div>
  );
};

export default Register;
