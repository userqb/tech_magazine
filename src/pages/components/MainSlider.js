import React from "react";
import slider1 from "./img/slider1.jpg";
import slider2 from "./img/slider2.jpg";
import slider3 from "./img/slider3.jpg";
import slider4 from "./img/slider4.jpg";

export const MainSlider = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const images = [
    <img key={slider1} src={slider1} />,
    <img key={slider2} src={slider2} />,
    <img key={slider3} src={slider3} />,
    <img key={slider4} src={slider4} />,
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((count) => {
        const res = count === images.length - 1 ? 0 : count + 1;
        return res;
      });
    }, 3000);
    return () => clearInterval();
  }, []);

  const prevImages = activeItem ? activeItem - 1 : images.length - 1;

  const nextImages = activeItem === images.length - 1 ? 0 : activeItem + 1;

  return (
    <div className="container__slider">
      <div className="slider__img slider__img-prev" key={prevImages}>
        {images[prevImages]}
      </div>
      <div className="slider__img" key={activeItem}>
        {images[activeItem]}
      </div>
      <div className="slider__img slider__img-next" key={nextImages}>
        {images[nextImages]}
      </div>
    </div>
  );
};
