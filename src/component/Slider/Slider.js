import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

import img from "./img/Screenshot_5.png";
import img1 from "./img/Screenshot_6.png";
import img2 from "./img/successful-medical-team_329181-9252.jpg";
import CarouselCaption from "./CarouselCaption";
import CarouselImg from "./CarouselImg";

export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <CarouselImg img={img} alt="First Slide" />
          <CarouselCaption
            title="Hello My Name is Susanto Ray I am MD"
            para="Hello My Name is Susanto Ray I am MD Hello My Name is Susanto Ray I am MD"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImg img={img1} alt="First Slide" />
          <CarouselCaption
            title="Hello My Name is Susanto Ray I am MD"
            para="Hello My Name is Susanto Ray I am MD Hello My Name is Susanto Ray I am MD"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImg img={img2} alt="First Slide" />
          <CarouselCaption
            title="Hello My Name is Susanto Ray I am MD"
            para="Hello My Name is Susanto Ray I am MD Hello My Name is Susanto Ray I am MD"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
