import React from 'react';
import { ListGroup } from 'react-bootstrap';
import "./Dashboard.css"
const Dashboard = () => {
    return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-md-3 profile-menue" style={{backgroundImage: `url("https://media.istockphoto.com/photos/doctor-treatment-patients-in-hospital-room-medical-professionals-help-picture-id1216214264?k=20&m=1216214264&s=170667a&w=0&h=CiBhmc_A_pKbKCHcHtFITbQu5iYnG3cqJFpqiJA89kU=")`, backgroundRepeat: 'no-repeat',background: "rgb(0, 0, 0)",background: "rgba(0, 0, 0, 0.5)",height:"100vh",opacity: "1"}}>
            <ul>
            <li>Profile</li>
            <li>Add Profile</li>
            <li>Update Profile</li>
            <li>Delete Profile</li>
            <li>Delete Account</li>
            <li>Patent Appointment</li>
           
            </ul>
        </div>
   
        <div className="col-md-9"></div>
      </div>
        </div>
    );
};

export default Dashboard;