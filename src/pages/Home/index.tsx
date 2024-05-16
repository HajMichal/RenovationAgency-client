import { Outlet } from "react-router-dom";
import { ImgWithBg, Logo } from "../../components";
import "./Home.sass";

function Home() {
  return (
    <div id="container" data-theme={"light"}>
      <div id="leftCol">
        <Logo />
      </div>
      <ImgWithBg />
      <Outlet />
    </div>
  );
}

export default Home;
