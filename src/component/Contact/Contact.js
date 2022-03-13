/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

// Bootstrap Modal
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Email Validation Checck
import validator from "validator";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmail(e.target.value);
    } else {
      setEmail("Please Enter Valide Email");
    }
  };
  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const addAllData = (e) => {
    e.preventDefault();
    setallData({
      name,
      email,
      message,
    });

    // console.log(name);
    // console.log(email);
    // console.log(message);
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
                <form onSubmit={addAllData}>
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
                          aria-label="Your Name"
                          aria-describedby="basic-addon1"
                          onChange={updateName}
                        />
                      </div>
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
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onChange={updateEmail}
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <textarea
                        className="form-control pt-3"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your Message"
                        onChange={updateMessage}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info text-light my-4 px-5"
                      onClick={handleShow}
                    >
                      Submit
                    </button>
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
