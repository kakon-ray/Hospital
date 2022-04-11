import React from "react";
import PageBanner from "../PageBanner.js/PageBanner";
import "./Register.css";

const Register = () => {
  return (
    <div id="register">
      <PageBanner page="Registration" />
      <section className="form container-fluid" id="contact">
        <div className="cart">
          <div className="contact-section">
            <p>Create Your Account</p>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="text" name="email" placeholder="Your Email" />
            <input
              type="text"
              name="password"
              placeholder="Enter Your Password"
            />

            <input type="submit" value="Submit" />
            <div style={{ marginTop: "20px" }}>
              <img
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
