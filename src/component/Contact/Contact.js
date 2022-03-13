/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import "./Contact.css";

// Bootstrap Modal
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Email Validation Checck
import validator from "validator";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // user do not submit
  const [notSubmit, setNotSubmit] = useState("");

  // submit all input value
  const [allData, setallData] = useState("");

  // start modal useing modal function
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // end useing modal work

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setallData({
      name,
      email,
      message,
    });
    setNotSubmit("");

    // console.log(name);
    // console.log(email);
    // console.log(message);
  };

  const resetInput = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  // user do not submit
  const doNotSubmit = (e) => {
    e.preventDefault();
    setallData({
      name,
      email,
      message,
    });

    setNotSubmit("Please Enter Valid Email Address Then you Submit");
  };

  return (
    <section className="contact-section mb-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="appointmentText">
                    Recently Book Appintment Information
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>
                    <span className="appointmentText">Name : </span> {name}
                  </h5>
                  <h5>
                    <span className="appointmentText">Email :</span> {email}
                  </h5>
                  <h5>
                    <span className="appointmentText">Message :</span> {message}
                  </h5>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="info" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>

            <div className="card mt-5 py-5 pb-5 px-2">
              <div className="row mx-2">
                <div className="text-danger mb-3 error-text">{notSubmit}</div>
                <form
                  onSubmit={
                    validator.isEmail(email)
                      ? handleSubmit
                      : (e) => {
                          doNotSubmit(e);
                        }
                  }
                >
                  <div className="row g-2">
                    <div className="col-lg-6">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fas fa-envelope text-info"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Username"
                          value={name}
                          onChange={updateName}
                        />
                      </div>
                      <span className="text-danger error-text">
                        {!name ? "Please Enter Your Name" : null}
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <span
                          className="input-group-text text-info"
                          id="basic-addon1"
                        >
                          <i className="fas fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Your Email"
                          value={email}
                          onChange={updateEmail}
                        />
                      </div>
                      <span className="text-danger error-text">
                        {!validator.isEmail(email)
                          ? "Please Enter Valid Email"
                          : null}
                      </span>
                    </div>
                    <div className="mt-3">
                      <textarea
                        className="form-control pt-3"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your Message"
                        value={message}
                        onChange={updateMessage}
                      ></textarea>
                    </div>

                    <div className="row">
                      <div className="col  d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-info text-light my-4 px-5"
                          onClick={
                            validator.isEmail(email) ? handleShow : doNotSubmit
                          }
                        >
                          Submit
                        </button>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <button
                          type="reset"
                          className="btn btn-info text-light my-4 px-5"
                          onClick={resetInput}
                        >
                          Rest Form
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="py-5">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width="600"
                  height="450"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
