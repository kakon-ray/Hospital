import React, { useState } from "react";
import background from "../../assets/img/opening.jpg";
import "./AppintmentFrom.css";
import { Form } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AppintmentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [catagory, setCatagory] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [alldata, setALldata] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  // console.log(name);
  // console.log(email);
  // console.log(birthDay);

  const allData = (e) => {
    e.preventDefault();
    setALldata({
      name: name,
      email: email,
      catagory: catagory,
      birthDay: birthDay,
    });
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
                <form onSubmit={allData}>
                  <div className="row g-2">
                    <div className="col-lg-6">
                      <label>Your Name</label>

                      <Form.Control
                        type="text"
                        name="name"
                        onChange={updateName}
                        placeholder="Your Name"
                      />
                      <label className="mt-3">Your Email</label>

                      <Form.Control
                        type="text"
                        name="email"
                        onChange={updateEmail}
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label>Select Your Categorie</label>

                      <Form.Select
                        aria-label="Default select example"
                        onChange={updateCatagory}
                      >
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <label className="mt-3">Select Your Date of Birth</label>

                      <Form.Control
                        type="date"
                        id="birthday"
                        name="birthday"
                        onChange={updateBirthDay}
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={handleShow}
                      className="btn btn-light my-5 px-5"
                    >
                      Submit
                    </button>
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
