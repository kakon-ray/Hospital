import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Profile.css";
import img from "../../assets/img/user.png";
import DoctorArtical from "../../component/Doctor/DoctorArtical";

const Profile = () => {
  const [userValue, setUserValue] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getUserValue = async () => {
      const url = `https://gentle-retreat-65672.herokuapp.com/doctorprofile?email=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUserValue(data));
      try {
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    getUserValue();
  }, [user]);

  console.log(userValue[0]);
  return (
    <Card>
      <img
        src={user.photoURL ? user.photoURL : userValue[0]?.img}
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
    </Card>
  );
};

export default Profile;
