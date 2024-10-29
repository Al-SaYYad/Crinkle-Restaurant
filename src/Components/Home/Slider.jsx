import Carousel from "react-bootstrap/Carousel";
import PanarOne from "../../Images/Panar-one.png";
import PanarTwo from "../../Images/Panar-two.png";
import PanarThree from "../../Images/Panar-three.png";
import "../../Styles/slider.css";
import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="main-slider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="slider-background" interval={2000}>
          <div className="slide-img">
            <img loading="lazy" src={PanarOne} alt="First Slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background" interval={2000}>
          <div className="slide-img">
            <img loading="lazy" src={PanarTwo} alt="Second Slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background" interval={2000}>
          <div className="slide-img">
            <img loading="lazy" src={PanarThree} alt="Third Slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
