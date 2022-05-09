/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Doctor.css";

export default function DoctorArtical({
  title,
  department,
  para,
  img,
  alt,
  fblink,
  twlink,
  email,
}) {
  return (
    <>
      <div className="img-hover">
        <img src={img} alt={alt} className="image img-fluid"></img>
        <div className="overlay">
          <div className="text ">
            <a href={fblink} target="_blank">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href={`https://mail.google.com/mail/u/0/?tab=${email}`}
              target="_blank"
            >
              <i className="fab fa-google-plus-square m-2"></i>
            </a>
            <a href={twlink} target="_blank">
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
    </>
  );
}
