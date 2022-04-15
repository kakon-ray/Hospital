import React, { useState } from "react";
import background from "../../assets/img/opening.jpg";
import "./AppintmentFrom.css";
import { Form } from "react-bootstrap";
// Email Validation Checck
import validator from "validator";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AppintmentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [catagory, setCatagory] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [alldata, setALldata] = useState("");

  // start modal useing modal function
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //if user wrong input do not submit useState
  const [notSubmit, setNotSubmit] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateCatagory = (e) => {
    setCatagory(e.target.value);
  };
  const updateBirthDay = (e) => {
    setBirthDay(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setALldata({
      name: name,
      email: email,
      catagory: catagory,
      birthDay: birthDay,
    });
    setNotSubmit("");
  };

  //if user wrong input do not submit
  const doNotSubmit = (e) => {
    e.preventDefault();
    setALldata({
      name: name,
      email: email,
      catagory: catagory,
      birthDay: birthDay,
    });

    setNotSubmit("Please Enter Valid Email Address Then you Submit");
  };

  const resetInput = () => {
    setName("");
    setEmail("");
    setCatagory("");
    setBirthDay("");
  };

  return (
    <section
      className="appointment-page-contact text-light pb-5"
      id="appointment"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="card mt-5 py-5 pb-5 px-2">
              <div>
                {/* using modal and user message */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="appointmentText">
                      Successfully Submited
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
                      <span className="appointmentText">Categorie :</span>{" "}
                      {catagory}
                    </h5>
                    <h5>
                      <span className="appointmentText">BirthDay :</span>{" "}
                      {birthDay}
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
              <h1 className="text-center">Book an appointment now</h1>
              <div className="title-width m-auto my-4 bg-info"></div>

              <div className="row mx-2">
                <div className="mb-4 text-center error-text text-danger">
                  {notSubmit}
                </div>
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
                    <div className="col-lg-6" style={{ marginTop: "18px" }}>
                      <label className="error-text">
                        {" "}
                        {!name ? (
                          <span className="text-danger">Enter Your Name</span>
                        ) : (
                          "Ok"
                        )}
                      </label>

                      <Form.Control
                        type="text"
                        name="name"
                        onChange={updateName}
                        placeholder="Your Name"
                      />
                      <label className="mt-2 error-text">
                        {!validator.isEmail(email) ? (
                          <span className="text-danger">
                            Please Enter Valid Email
                          </span>
                        ) : (
                          "Ok"
                        )}
                      </label>

                      <Form.Control
                        type="text"
                        name="email"
                        onChange={updateEmail}
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label className="error-text">
                        {!catagory ? (
                          <span className="text-danger">Enter Catagory</span>
                        ) : (
                          "Ok"
                        )}
                      </label>

                      <Form.Select
                        style={{ marginTop: "10px" }}
                        aria-label="Default select example"
                        onChange={updateCatagory}
                      >
                        <option value="1">Select Catagory</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <label className="mt-2 error-text">
                        {!birthDay ? (
                          <span className="text-danger">
                            Enter Your Dath of Birthday
                          </span>
                        ) : (
                          "Ok"
                        )}
                      </label>

                      <Form.Control
                        type="date"
                        id="birthday"
                        name="birthday"
                        onChange={updateBirthDay}
                      />
                    </div>

                    <div className="row d-flex justify-content-center p-0">
                      {/* <button
                        type="reset"
                        className="btn btn-light mt-5 w-50 mx-auto"
                        onClick={resetInput}
                      >
                        Rest Form
                      </button> */}
                      <button
                        type="submit"
                        onClick={
                          validator.isEmail(email) ? handleShow : doNotSubmit
                        }
                        className="btn btn-light mt-5 w-25 mx-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
