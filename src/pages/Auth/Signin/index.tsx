import { ImgWithBg, LoginForm, Logo } from "../../../components";

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
import "./Signin.sass";

const SignIn = () => {
  return (
    <div id="container">
      <div style={{ width: "30%", height: "100vh", marginLeft: "5vw" }}>
        <Logo />
        <LoginForm />
      </div>
      <ImgWithBg />
    </div>
  );
};

export default SignIn;
