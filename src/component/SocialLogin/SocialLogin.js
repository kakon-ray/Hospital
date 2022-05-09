import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loading1, error1] =
    useSignInWithFacebook(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorelement;

  if (error) {
    errorelement = <p className="text-center text-danger">{error.message}</p>;
  }

  if (user?.email || user1?.email) {
    toast.success("Login Successful");
    console.log("Login success");
  }

  return (
    <div>
      {errorelement}
      <div className="d-flex align-items-center justify-content-center py-0 my-0">
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
            height: "40px",
            borderRadius: "25px",
            backgroundColor: "#0dcaf0",
            color: "#F5F5F5",
          }}
          onClick={() =>
            signInWithGoogle().then((res) => {
              navigate(from, { replace: true });
            })
          }
          className="btn  w-50 my-2 mx-auto"
        >
          <FaGoogle style={{ fontSize: "20px" }} />
          <span className="ms-2">Sign in Google</span>
        </button>
        <button
          onClick={() =>
            signInWithFacebook().then((res) => {
              navigate("/dashboard/profile");
            })
          }
          style={{
            height: "40px",
            borderRadius: "25px",
            backgroundColor: "#000080",
            color: "#D3D3D3",
          }}
          className="btn w-50 my-2 mx-auto"
        >
          <FaFacebookF style={{ fontSize: "20px" }} />
          <span className="ms-1">Sign in Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
