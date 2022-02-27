import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import DropDownItem from "./DropDownItem";
import nav from "./Navbar.css";
import NavLink from "./NavLink";

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
            <NavLink page="Home" link="#" />
            <NavLink page="About" link="#" />

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <DropDownItem item="Actioin" link="#" />
              <DropDownItem item="Something else here" link="#" />
              <NavDropdown.Divider />
              <DropDownItem item="Actioin" link="#" />
              <DropDownItem item="Actioin" link="#" disabled />
            </NavDropdown>

            <NavLink page="About" link="#" disabled />
          </Nav>
          <Form className="d-flex">
            {show ? (
              <FormControl
                type="search"
                id="formInput"
                placeholder="Search"
                className="me-2 form-control"
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
