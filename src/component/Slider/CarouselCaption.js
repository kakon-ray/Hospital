import React from "react";
import { Carousel, Button } from "react-bootstrap";

export default function CarouselCaption({ title, para, btnText }) {
  return (
    <>
      <Carousel.Caption>
        <div className="slider-content">
          <h3>{title}</h3>
          <p>{para}</p>
          <Button variant="outline-info">Reade More</Button>
          <Button variant="info m-3">Reade More</Button>
        </div>
      </Carousel.Caption>
    </>
  );
}
