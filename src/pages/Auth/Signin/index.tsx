import { ImgWithBg, LoginForm, Logo } from "../../../components";
import "./Signin.sass";

const SignIn = () => {
  return (
    <div id="container">
      <div id="leftCol">
        <Logo />
        <LoginForm />
      </div>
      <ImgWithBg />
    </div>
  );
};

export default SignIn;
