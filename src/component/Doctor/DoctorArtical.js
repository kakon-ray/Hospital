/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default function ({ title, department, para, img, alt }) {
  return (
    <article className="col-lg-3 col-md-6">
      <div className="img-hover">
        <img src={img} alt={alt} className="image"></img>
        <div className="overlay">
          <div className="text ">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-google-plus-square m-2"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="content py-3">
        <h5>
          <span className="font-bold">{title} </span>
          {department}
        </h5>
        <p>{para}</p>
      </div>
    </article>
  );
}
