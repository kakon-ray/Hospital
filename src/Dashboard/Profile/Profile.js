import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Profile.css";

const Profile = () => {
  const [user] = useAuthState(auth);
  return (
    <Card>
      <Card.Header>
        <img
          src="https://static.dw.com/image/50927628_101.jpg"
          className="img-fluid"
          style={{ height: "250px", width: "100%" }}
          alt=""
        />
      </Card.Header>
      <Card.Body>
        <img
          src={user.photoURL}
          className="img-fluid profile-img"
          style={{ height: "100px", width: "100px", borderRadius: "50px" }}
          alt=""
        />
      </Card.Body>
    </Card>
  );
};

export default Profile;
