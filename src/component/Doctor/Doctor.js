import React from "react";
import DoctorArtical from "./DoctorArtical";
import img1 from "../Doctor/img/Screenshot1.png";
import img2 from "./img/Screenshot_2.png";
import img3 from "./img/Screenshot_3.png";
import img4 from "./img/Screenshot_4.png";

export default function Doctor() {
  return (
    <section className="doctor-section py-5">
      <div className="container">
        <h1 className="text-center pb-3">Our Doctor</h1>
        <div className="title-width m-auto mb-5 bg-info"></div>
        <div className="row g-5">
          <DoctorArtical
            title="Pritis Trafdar"
            department="Medicin"
            para="A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions."
            img={img1}
            alt="IMG1"
          />
          <DoctorArtical
            title="Pritis Trafdar"
            department="Medicin"
            para="A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions."
            img={img2}
            alt="IMG2"
          />
          <DoctorArtical
            title="Pritis Trafdar"
            department="Medicin"
            para="A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions."
            img={img3}
            alt="IMG2"
          />

          <DoctorArtical
            title="Pritis Trafdar"
            department="Medicin"
            para="A pathologist is a physician who studies body fluids and
                tissues, and uses laboratory tests to monitor the health of
                patients with chronic conditions."
            img={img4}
            alt="IMG2"
          />
        </div>
      </div>
    </section>
  );
}
