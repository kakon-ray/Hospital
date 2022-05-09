import React, { useContext } from "react";
import { doctorContext } from "../../Context/doctorContext";
import DoctorArtical from "./DoctorArtical";
import "./Doctor.css";

export default function Doctor() {
  const [users, setUsers] = useContext(doctorContext);

  return (
    <section className="doctor-section py-5">
      <div className="container">
        <h1 className="text-center pb-3">Our Doctor</h1>
        <div className="title-width m-auto mb-5 bg-info"></div>
        <div className="row g-5">
          {users?.map((user) => (
            <React.Fragment key={user.id}>
              <DoctorArtical
                title={user.title}
                department={user.department}
                para={user.description}
                img={user.img}
                fblink={user.facebook}
                twlink={user.twter}
                email={user.email}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
