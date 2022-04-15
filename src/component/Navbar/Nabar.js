import { useEffect, useState } from "react";
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

// current pathname
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import img from "../../assets/img/user.png";

export default function Nabar(props) {
  const [show, setShow] = useState(false);
  // navbar search input value
  const [search, setSearch] = useState("");
  // this is active nav manue state
  const [activeTab, setActiveTab] = useState("Home");

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

  const location = useLocation();
  const handleSearch = (e) => {
    e.preventDefault();

    // history.push(`/searchresult`);
    if (location.pathname === "/searchresult") {
      props.func(search);
    }
  };

  // this is active navmanue item work

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/appointment") {
      setActiveTab("appointment");
    } else if (location.pathname === "/clinic") {
      setActiveTab("clinic");
    } else if (location.pathname === "/contact") {
      setActiveTab("contact");
    }
  }, [location]);

  // user Authentication

  const [user] = useAuthState(auth);
  console.log(user);

  const logout = () => {
    signOut(auth);
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
          <Nav className="mx-auto m-5 my-2 my-lg-0" navbarScroll>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={`${activeTab === "Home" ? "active" : ""} nav-link`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </Link>

            <Link
              to="/appointment"
              style={{ textDecoration: "none" }}
              className={`${
                activeTab === "appointment" ? "active" : ""
              } nav-link`}
              onClick={() => setActiveTab("appointment")}
            >
              Appointment
            </Link>
            <Link
              to="/clinic"
              style={{ textDecoration: "none" }}
              className={`${activeTab === "clinic" ? "active" : ""} nav-link`}
              onClick={() => setActiveTab("clinic")}
            >
              About Our Clinic
            </Link>

            <NavDropdown title="Other" id="navbarScrollingDropdown">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className={`${activeTab === "Home" ? "active" : ""} nav-link`}
                onClick={() => setActiveTab("Home")}
              >
                Home
              </Link>

              <Link
                to="/appointment"
                style={{ textDecoration: "none" }}
                className={`${
                  activeTab === "appointment" ? "active" : ""
                } nav-link`}
                onClick={() => setActiveTab("appointment")}
              >
                Appointment
              </Link>
              <Link
                to="/clinic"
                style={{ textDecoration: "none" }}
                className={`${activeTab === "clinic" ? "active" : ""} nav-link`}
                onClick={() => setActiveTab("clinic")}
              >
                About Our Clinic
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none" }}
                className={`${
                  activeTab === "contact" ? "active" : ""
                } nav-link`}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </Link>
            </NavDropdown>

            <Link
              to="/contact"
              style={{ textDecoration: "none" }}
              className={`${activeTab === "contact" ? "active" : ""} nav-link`}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </Link>
          </Nav>
          <Nav className="me-auto">
            {!user ? (
              <>
                <button
                  type="submit"
                  className="btn btn-outline-info py-1 my-2"
                >
                  Register
                </button>

                <button
                  type="submit"
                  className="btn btn-info text-light py-1 mx-3 my-2"
                >
                  Sign in
                </button>
              </>
            ) : (
              <NavDropdown
                title={
                  <img
                    src={user?.photoURL ? user?.photoURL : img}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50px",
                    }}
                    alt=""
                  />
                }
                id="navbarScrollingDropdown"
              >
                <div className="text-center">
                  <h6>{user?.displayName}</h6>
                  <button
                    type="submit"
                    className="btn btn-link py-1 mx-3"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                </div>
              </NavDropdown>
            )}
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
                className="btn  me-2 mt-1"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
            ) : null}

            <i
              className={`fas fa-search me-4 ${show ? "pt-3" : ""} pt-1 pe-2`}
              onClick={(e) => handleshow(e)}
              style={{ cursor: "pointer" }}
            ></i>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
