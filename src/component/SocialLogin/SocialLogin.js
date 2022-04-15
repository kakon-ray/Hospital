import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="mt-3">
      <div className="d-flex align-items-center justify-content-center">
        <div
          style={{ height: "1px", backgroundColor: "lightgray" }}
          className=" w-25"
        ></div>
        <p className="px-2 mt-2">or</p>
        <div
          style={{ height: "1px", backgroundColor: "lightgray" }}
          className=" w-25"
        ></div>
      </div>

      <div className="icon-auth text-center d-flex flex-column justify-content-center">
        <button
          style={{
            height: "45px",
            borderRadius: "25px",
            backgroundColor: "#0dcaf0",
            color: "#fff",
          }}
          className="btn  w-50 my-2 mx-auto"
        >
          <FaGoogle style={{ fontSize: "25px" }} />
          <span className="ms-2">Sign in Google</span>
        </button>
        <button
          style={{
            height: "45px",
            borderRadius: "25px",
            backgroundColor: "#0dcaf0",
            color: "#fff",
          }}
          className="btn w-50 my-2 mx-auto"
        >
          <FaFacebookF style={{ fontSize: "25px" }} />
          <span className="ms-1">Sign in Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
