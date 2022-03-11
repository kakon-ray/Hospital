import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import nav from "./Navbar.css";

export default function Nabar() {
  const [show, setShow] = useState(false);

  function handleshow() {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <Navbar bg="light" expand="lg" className={`${nav.nav} py-0`}>
      <Container fluid>
        <Navbar.Brand href="#" className="font-weight-bold">
          Khulna Hospital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto m-5 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/appointment">Appointment</Nav.Link>

            <Nav.Link href="/">About Our Clinic</Nav.Link>

            <NavDropdown title="Other" id="navbarScrollingDropdown">
              <Nav.Link href="/">Actiion</Nav.Link>
              <Nav.Link href="/">Something else here</Nav.Link>
              <Nav.Link href="/">Actiion</Nav.Link>
              <Nav.Link href="/">Actiion</Nav.Link>
            </NavDropdown>

            <Nav.Link href="/" disabled>
              Actiion
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {show ? (
              <FormControl
                type="search"
                id="formInput"
                placeholder="Search"
                className="me-2 form-control-navbar"
                aria-label="Search"
              />
            ) : null}
            <i className="fas fa-search me-4" onClick={handleshow}></i>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
