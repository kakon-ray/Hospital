import React from "react";

export default function CarouselImg({ img, alt }) {
  return <img className="d-block w-100 img-fluid" src={img} alt={alt} />;
}
