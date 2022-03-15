import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
// import { hide } from "react-modal/lib/helpers/ariaAppHider";
import { Link } from "react-router-dom";

import nav from "./Navbar.css";

// redirect search result page
import { useHistory } from "react-router-dom";

// current pathname
import { useLocation } from "react-router-dom";

export default function Nabar(props) {
  const [show, setShow] = useState(false);
  // navbar search input value
  const [search, setSearch] = useState("");

  // navbar toggle  search input method
  function handleshow(e) {
    e.preventDefault();
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  // navbar search input value onchange
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // useing search result show search result page
  const history = useHistory();
  const location = useLocation();
  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`/searchresult`);
    if (location.pathname === "/searchresult") {
      props.func(search);
    }
  };

  return (
    <Navbar
      sticky="top"
      bg="light"
      expand="lg"
      className={`${nav.nav} navbar py-0`}
    >
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
                placeholder="Search Doctor"
                className="me-2 form-control-navbar"
                aria-label="Search"
                onChange={onSearchChange}
              />
            ) : null}
            {show ? (
              <button
                id="formInput"
                className="btn btn-outline-info me-2 mt-1"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
            ) : null}

            <i
              className={`fas fa-search me-4 ${show ? "pt-3" : ""} pt-2 pe-2`}
              onClick={(e) => handleshow(e)}
            ></i>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
