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
    <Navbar bg="light" expand="lg" className={`${nav.nav} navbar py-0`}>
      <Container fluid>
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Nav.Link href="/" className="logo-style">
              Khulna Hospital
            </Nav.Link>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto m-5 my-2 my-lg-0" navbarScroll>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link href="/">Home</Nav.Link>
            </Link>

            <Link to="/appointment" style={{ textDecoration: "none" }}>
              <Nav.Link href="/appointment">Appointment</Nav.Link>
            </Link>
            <Link to="/clinic" style={{ textDecoration: "none" }}>
              <Nav.Link href="/clinic">About Our Clinic</Nav.Link>
            </Link>

            <NavDropdown title="Other" id="navbarScrollingDropdown">
              <Link to="/clinic" style={{ textDecoration: "none" }}>
                <Nav.Link href="/">Actiion</Nav.Link>
              </Link>
              <Link to="/clinic" style={{ textDecoration: "none" }}>
                <Nav.Link href="/clinic">About Our Clinic</Nav.Link>
              </Link>
              <Link to="/appointment" style={{ textDecoration: "none" }}>
                <Nav.Link href="/appointment">Appointment</Nav.Link>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Link>
            </NavDropdown>

            <Nav.Link href="/" disabled>
              Actiion
            </Nav.Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex nav-form justify-content-center">
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
