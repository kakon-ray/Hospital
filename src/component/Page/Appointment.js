import React from "react";
import AppintmentForm from "../AppintmentForm/AppintmentForm";
import Footer from "../Footer/Footer";
import Nabar from "../Navbar/Nabar";
import PageBanner from "../PageBanner.js/PageBanner";
import Provide from "../Provide/Provide";
import Slider from "../Slider/Slider";

export default function Home() {
  return (
    <>
      <PageBanner page="Appintment" />
      <AppintmentForm />
      <Provide />
      <Footer />
    </>
  );
}
