import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const myStyle = {
    backgroundImage:
      "url('https://i.ibb.co/fdBWF1B/long-height-huge-tree-spring-giant-blue-sky-170887339.jpg')",
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
            <h4 className="text-light my-auto pt-1 ps-2 side-menu">Profile</h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon name="add-circle-outline" id="sidemenu-icon"></ion-icon>

            <h4 className="text-light my-auto ps-2 side-menu">
              Add Information
            </h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon name="logo-tableau" id="sidemenu-icon"></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">Blog Post</h4>
          </div>
        </Link>
        <Link to="/dashboard/addinformation" style={{ textDecoration: "none" }}>
          <div className="my-2 py-2 d-flex align-items-center side-item  ps-3">
            <ion-icon
              name="chatbubble-ellipses-outline"
              id="sidemenu-icon"
            ></ion-icon>
            <h4 className="text-light my-auto ps-2 side-menu">Message</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
