import React from "react";

export default function PageBanner({ page }) {
  const myStyle = {
    backgroundImage: "url('https://static.dw.com/image/50927628_101.jpg')",
    height: "50vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: ".2%",
  };

  return (
    <div
      style={myStyle}
      className="position-relative mb-5 d-flex justify-content-center align-items-center"
    >
      <h1 style={{ color: "#0dcaf0" }}>{page}</h1>
      <div className="position-absolute page text-light pageStyle"> </div>
    </div>
  );
}
