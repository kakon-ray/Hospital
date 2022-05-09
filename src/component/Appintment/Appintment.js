import React from "react";
import { Link } from "react-router-dom";
import "./Appintment.css";

export default function Appintment({ title }) {
  return (
    <section className="appointment-section py-5 text-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="text-center">{title}</h1>
          </div>
          <div className="col-lg-4 text-center my-3">
            <Link to="appointment">
              <button
                type="button"
                className="btn btn-light btn-lg btn-block text-info"
              >
                {" "}
                Appinment Now <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
