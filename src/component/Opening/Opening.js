import React from "react";
import "./Opening.css";
import background from "../../assets/img/opening.jpg";

export default function Opening() {
  return (
    <section
      className="opening-section mt-5"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card text-center mt-5 py-4">
              <h1>Opening Hours</h1>
              <div className="title-width m-auto my-4 bg-info"></div>
              <p>Monday-Friday</p>
              <p>24 Hours open</p>
              <p>Saturday-Sunday</p>
              <p>06:00-00.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
