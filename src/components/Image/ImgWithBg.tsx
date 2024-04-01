import "./ImgWithBg.sass";

export const ImgWithBg = () => {
  return (
    <div id="imgContainer">
      <img
        id="backgroundImg"
        className="img"
        src="/images/dotsbackground.png"
        alt="Interior image"
      />
      <img
        id="mainImg"
        className="img"
        src="/images/interior.jpg"
        alt="Interior image"
      />
    </div>
  );
};
