import React from "react";

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Nabar from "../Navbar/Nabar";
import PageBanner from "../PageBanner.js/PageBanner";

import Slider from "../Slider/Slider";

export default function ContactMe() {
  return (
    <>
      <PageBanner page="Contact" />
      <Contact />
      <Footer />
    </>
  );
}
