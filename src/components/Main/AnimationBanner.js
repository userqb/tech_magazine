import React from "react";
import phone from "../../images/phone.png";
import drone from "../../images/drone.png";
import microwave from "../../images/microwave.png";

export const AnimationBanner = () => {
  const [animationIMG, setAnimationIMG] = React.useState(false);

  setTimeout(() => {
    setAnimationIMG(true);
  }, 6000);

  return (
    <div className="content__banner">
      {animationIMG === false ? (
        <div className="content__banner-inner">
          <div className="banner_anim__img">
            <img className="animation_banner__img" src={drone} />
            <div className="animation_banner__text">Бесплиотники</div>
          </div>
          <div className="banner_anim__img">
            <img className="animation_banner__img" src={phone} />
            <div className="animation_banner__text">Телефоны</div>
          </div>
          <div className="banner_anim__img">
            <img className="animation_banner__img" src={microwave} />
            <div className="animation_banner__text">Бытовая техника</div>
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
