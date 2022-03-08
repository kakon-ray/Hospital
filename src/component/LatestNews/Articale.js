import React from "react";

export default function Articale({ link, title, para }) {
  return (
    <article className="col-lg-4 col-md-12">
      <div className="img-container">
        <img src={link} alt="Avatar" className="image" />
        <div className="overlay ">
          <div className="text ">
            <h5 className="pt-3 my-0">{title}</h5>
            <p>{para}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
