import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CarouselCaption({ title, para, btnText }) {
  return (
    <>
      <Carousel.Caption>
        <div className="slider-content w-50 text-center mx-auto">
          <h3>{title}</h3>
          <p className="">{para}</p>
          <Link to="/appointment/">
            <Button variant="outline-info">Appointment</Button>
          </Link>
          <Link to="/contact/">
            <Button variant="info m-3">Contact Now</Button>
          </Link>
        </div>
      </Carousel.Caption>
    </>
  );
}
