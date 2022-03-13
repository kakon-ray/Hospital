import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

import img from "./img/Screenshot_5.png";
import img1 from "./img/Screenshot_6.png";
import img2 from "./img/successful-medical-team_329181-9252.jpg";
import CarouselCaption from "./CarouselCaption";
import CarouselImg from "./CarouselImg";
import { sliderContext } from "../userContext/sliderContext";

export default function Slider() {
  const [users, setUsers] = useContext(sliderContext);
  return (
    <>
      <Carousel>
        {users.map((user) => (
          <Carousel.Item>
            <CarouselImg img={user.img} alt="First Slide" />
            <CarouselCaption title={user.title} para={user.description} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
