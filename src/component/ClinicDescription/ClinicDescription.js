import React from "react";
import background from "../../assets/img/opening.jpg";

export default function ClinicDescription() {
  return (
    <section
      className="appointment-page-contact text-light pb-5"
      id="appointment"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="card mt-5 py-5 pb-5 px-2">
              <h1 className="text-center">About Our Clinic</h1>
              <div className="title-width m-auto my-4 bg-info"></div>
              <div className="row">
                <p className="px-5 text-center">
                  Lambda Medical Clinic offers you and your family a variety of
                  services, whether it’s urgent care services or a quick
                  check-up. Sickness and fever are easily overcome at our clinic
                  with the help of trained physicians and medical assistants.
                  Our walk-in clinic is open everyday with extended hours for a
                  majority of your medical needs. We have Board Certified
                  Physicians on site at all times, as well as experienced and
                  compassionate nurses.
                </p>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
