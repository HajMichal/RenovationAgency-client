import { ImgWithBg, LoginForm, Logo } from "../../../components";
import "../Auth.sass";

const SignIn = () => {
  return (
    <div id="container" data-theme={"light"}>
      <div id="leftCol">
        <Logo />
        <LoginForm />
      </div>
      <ImgWithBg />
    </div>
  );
};

export default SignIn;
