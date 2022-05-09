import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Profile.css";
import img from "../../assets/img/user.png";

const Profile = () => {
  const [userValue, setUserValue] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    // const getUserValue = asy ()
  }, [user]);
  return (
    <Card>
      <img
        src={user.photoURL ? user.photoURL : img}
        className="img-fluid profile-img"
        style={{ height: "100px", width: "100px", borderRadius: "50px" }}
        alt=""
      />

      <Card.Header>
        <img
          src="https://static.dw.com/image/50927628_101.jpg"
          className="img-fluid"
          style={{ height: "250px", width: "100%" }}
          alt=""
        />
      </Card.Header>
      <Card.Body>
        <div className="row">
          <div className="col-md-6">
            <Button variant="info" className="mb-3 w-100">
              Add Your Personal Information
            </Button>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <h2>Name:</h2>
                <h4>Visit Fee: </h4>
                <p></p>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Button variant="info" className="mb-3 w-100">
              Create blog and help people
            </Button>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Profile;
