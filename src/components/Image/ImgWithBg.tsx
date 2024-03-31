import "./ImgWithBg.sass";

export const ImgWithBg = () => {
  return (
    <div id="img">
      <img
        className="backgroundImg"
        src="/images/dotsbackground.png"
        alt="Interior image"
      />
      <img
        className="mainImg"
        src="/images/interior.jpg"
        alt="Interior image"
      />
    </div>
  );
};
