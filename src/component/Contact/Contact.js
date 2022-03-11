/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function Contact() {
  return (
    <section className="contact-section mb-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card mt-5 py-5 pb-5 px-2">
              <div className="row mx-2">
                <form action="">
                  <div className="row g-2">
                    <div className="col-lg-6">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fas fa-envelope text-info"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Username"
                          aria-label="Your Name"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <span
                          className="input-group-text text-info"
                          id="basic-addon1"
                        >
                          <i className="fas fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Your Email"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <textarea
                        className="form-control pt-3"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info text-light my-4 px-5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="py-5">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width="600"
                  height="450"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
