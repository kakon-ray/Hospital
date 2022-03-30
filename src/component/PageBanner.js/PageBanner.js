import React from "react";

export default function PageBanner({ page }) {
  const myStyle = {
    backgroundImage:
      "url('https://media-cdn.tripadvisor.com/media/photo-s/16/d0/ed/49/the-img-hospital-is-a.jpg')",
    height: "60vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const pageStyle = {
    left: "45%",
    top: "50%",
  };
  return (
    <div style={myStyle} className="position-relative">
      <div
        className="position-absolute top-50 page text-light"
        style={pageStyle}
      >
        {" "}
        <h1>{page}</h1>
      </div>
    </div>
  );
}
