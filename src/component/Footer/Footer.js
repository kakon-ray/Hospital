import React from "react";
import "./Footer.css";
import img from "../../assets/img/Screenshot_5.png";
import img1 from "../../assets/img/Screenshot_6.png";
import img2 from "../../assets/img/Screenshot_7.png";

export default function Footer() {
  return (
    <footer className="footer-section bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h5 className="pb-3">About Us</h5>
            <p className=" text-secondary">
              The Lambda Hospital at UK is among the leading centers in the
              world for comprehensive patient care, research and education in
              the fields of mental health, developmental disabilities and
              neurology. Patients are the focus of everything we do at the
              Lambda Hospital.
            </p>
            <p className=" text-secondary">Get Lambda and start right away.</p>
          </div>
          <div className="col-lg-3">
            <h5 className="py-3">Recent posts</h5>
            <div className="d-flex">
              <img src={img} width="40px" height="40px" alt="" />
              <span className="ps-3">
                <h6 className="mb-0">Working in the OR as a nurse</h6>
                <span className="text-secondary py-0 my-0">July 25, 2015</span>
              </span>
            </div>
            <hr />
            <div className="d-flex">
              <img src={img1} width="40px" height="40px" alt="" />
              <span className="ps-3">
                <h6 className="mb-0">Working in the OR as a nurse</h6>
                <span className="text-secondary py-0 my-0">July 25, 2015</span>
              </span>
            </div>
            <hr />
            <div className="d-flex">
              <img src={img2} width="40px" height="40px" alt="" />
              <span className="ps-3">
                <h6 className="mb-0">Working in the OR as a nurse</h6>
                <span className="text-secondary py-0 my-0">July 25, 2015</span>
              </span>
            </div>
          </div>
          <div className="col-lg-3 catagori">
            <h5 className="py-3">Categories</h5>
            <p>Cardiology</p>
            <p>Dentistry</p>
            <p>General surgery</p>
            <p>Ophthalmic</p>
            <p>Orthopedic</p>
          </div>
          <div className="col-lg-3">
            <address>
              <h5 className="py-3">Contact us</h5>
              <p className=" text-secondary">
                999 Some Street <br />
                Paradise City <br />
                UK <br />
                Tel: +1-800-555-555
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
