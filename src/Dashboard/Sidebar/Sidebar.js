import React from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Sidebar.css";
import { signOut } from "firebase/auth";
import background from "../../assets/img/sidebar.jpg";
const Sidebar = () => {
  const [user] = useAuthState(auth);

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div className="sidenav" style={myStyle}>
        <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon name="person-outline" id="sidemenu-icon"></ion-icon>
            <h4 className="text-light my-auto pt-1 ps-2 side-menu">Prifile</h4>
          </div>
        </Link>

        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">
              My Appointment
            </h4>
          </div>
        </Link>

        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">
              Review Our Services
            </h4>
          </div>
        </Link>

        <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon name="person-outline" id="sidemenu-icon"></ion-icon>
            <h4 className="text-light my-auto pt-1 ps-2 side-menu">
              Dashboard
            </h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon name="add-circle-outline" id="sidemenu-icon"></ion-icon>

            <h4 className="text-light my-auto ps-2 side-menu">
              Add New Doctor
            </h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon name="logo-tableau" id="sidemenu-icon"></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">Manage Doctor</h4>
          </div>
        </Link>

        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">Add Provider</h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">
              Manage Provider
            </h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">
              Current News Add
            </h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">
              Manage Current News
            </h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">Appointment</h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">
              Contact Message
            </h4>
          </div>
        </Link>

        <div
          className="my-2 py-2 d-flex align-items-center side-item  ps-3"
          onClick={() => signOut(auth)}
          style={{ cursor: "pointer" }}
        >
          <ion-icon name="log-out-outline" id="sidemenu-icon"></ion-icon>
          <h4 className="text-light my-auto ps-2 side-menu">Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
