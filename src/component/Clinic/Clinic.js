/* eslint-disable react/style-prop-object */
import React from "react";
import "./Clinic.css";
import Accordion from "react-bootstrap/Accordion";

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

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Patient-Centered</Accordion.Header>
                <Accordion.Body>
                  Decisions and operations sustain and enhance patients’ dignity
                  and welfare.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Caring</Accordion.Header>
                <Accordion.Body>
                  Relationships between staff and patients promote continuity of
                  care and support patient self-care and wellness.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Community-oriented</Accordion.Header>
                <Accordion.Body>
                  Clinic outreach efforts expand and support healthcare.Clinic
                  outreach efforts expand and support healthcare.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header> Mutually respectful</Accordion.Header>
                <Accordion.Body>
                  We recognize and appreciate each individual’s contributions to
                  achieving the Clinic’s mission and to creating a rewarding and
                  pleasant workplace.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header> Community-oriented</Accordion.Header>
                <Accordion.Body>
                  Clinic outreach efforts expand and support healthcare.Clinic
                  outreach efforts expand and support healthcare.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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
