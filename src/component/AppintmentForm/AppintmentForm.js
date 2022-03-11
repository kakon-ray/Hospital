import React from "react";
import background from "../../assets/img/opening.jpg";
import "./AppintmentFrom.css";
export default function AppintmentForm() {
  return (
    <section
      className="appointment-page-contact text-light pb-5"
      id="appointment"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="card mt-5 py-5 pb-5 px-2">
              <h1 className="text-center">Book an appointment now</h1>
              <div className="title-width m-auto my-4 bg-info"></div>
              <div className="row mx-2">
                <form action="">
                  <div className="row g-2">
                    <div className="col-lg-6">
                      <label>Your Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                      />
                      <label className="mt-3">Your Email</label>
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label>Select Your Categorie</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label className="mt-3">Select Your Date of Birth</label>
                      <input
                        className="form-control"
                        type="date"
                        id="birthday"
                        name="birthday"
                      />
                    </div>
                    <button type="submit" className="btn btn-light my-5 px-5">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
