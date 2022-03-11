/* eslint-disable react/style-prop-object */
import React from "react";
import "./Clinic.css";

export default function Clinic() {
  return (
    <section className="clinic-section py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mt-5 title">Why us?</h1>
            <div className="title-width bg-info my-3 mb-5"></div>
            <p>
              Here are just a few reasons why you should choose our Lambda
              Medical Clinic urgent care clinic as your primary location for
              healthcare needs:
            </p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Patient-Centered
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Decisions and operations sustain and enhance patients’
                    dignity and welfare.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Caring
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Relationships between staff and patients promote continuity
                    of care and support patient self-care and wellness.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Mutually respectful
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We recognize and appreciate each individual’s contributions
                    to achieving the Clinic’s mission and to creating a
                    rewarding and pleasant workplace.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Community-oriented
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Clinic outreach efforts expand and support healthcare.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="mt-5 title">Our Skills</h1>
            <div className="title-width bg-info my-3 mb-5"></div>
            <p>
              The more you tighten your grip, Tarkin, the more star systems will
              slip through your fingers. I have traced the Rebel spies to her.
              Now she is my only link to finding their secret base. Alderaan?
              I’m not going to Alderaan. I’ve got to go home.
            </p>
            <div className="clinic-progress my-3">
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Surgery
                </div>
              </div>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Emergency Department
                </div>
              </div>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Hospital Medicine
                </div>
              </div>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Aged Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
