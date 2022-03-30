import React from "react";
import Clinic from "../Clinic/Clinic";
import ClinicDescription from "../ClinicDescription/ClinicDescription";

import Footer from "../Footer/Footer";

import Nabar from "../Navbar/Nabar";
import PageBanner from "../PageBanner.js/PageBanner";

import Slider from "../Slider/Slider";

export default function AboutOurClinic() {
  return (
    <>
      <Nabar />
      <PageBanner page="Clinic" />
      <Clinic />
      <ClinicDescription />
      <Footer />
    </>
  );
}
