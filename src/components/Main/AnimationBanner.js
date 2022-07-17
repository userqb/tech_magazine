import React from "react";
import phone from "../../images/phone.png";
import drone from "../../images/drone.png";
import microwave from "../../images/microwave.png";

export const AnimationBanner = () => {
  const [animationIMG, setAnimationIMG] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      return setAnimationIMG(true);
    }, 3000);
    return () => clearInterval();
  }, []);

  return (
    <div className="content__banner">
      {animationIMG === false ? (
        <div className="content__banner-inner">
          <div className="banner_anim__img">
            <img className="animation_banner__img" src={drone} />
          </div>
          <div className="banner_anim__img">
            <img className="animation_banner__img" src={phone} />
          </div>
          <div className="banner_anim__img">
            <img className="animation_banner__img" src={microwave} />
          </div>
        </div>
      ) : (
        <strong className="banner_anim__text">
          Покупай больше, живи лучше!
        </strong>
      )}
    </div>
  );
};
