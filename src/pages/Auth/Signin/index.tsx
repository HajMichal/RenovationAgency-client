import { ImgWithBg, LoginForm, Logo } from "../../../components";
import "./Signin.sass";

// import { IconSun, IconMoonStars } from "@tabler/icons-react";
// const theme = useMantineTheme();
{
  /* <Switch
size="md"
color="dark"
onLabel={<IconSun color={theme.colors.yellow[4]} />}
offLabel={<IconMoonStars color={theme.colors.blue[6]} />}
/> */
}

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
