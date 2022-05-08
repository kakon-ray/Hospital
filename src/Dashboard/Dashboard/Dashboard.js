//import useState hook to create menu collapse state
import React, { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import img from "../../assets/img/user.png";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Card } from "react-bootstrap";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  console.log(user);

  return (
    <>
      <div className="container">
        <Card>
          <div className="row gx-0">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Profile />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
