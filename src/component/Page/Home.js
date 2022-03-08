import React from "react";
import Appintment from "../Appintment/Appintment";
import Doctor from "../Doctor/Doctor";
import Experence from "../Experence/Experence";
import Footer from "../Footer/Footer";
import LatestNews from "../LatestNews/LatestNews";
import Nabar from "../Navbar/Nabar";
import Opening from "../Opening/Opening";
import Provide from "../Provide/Provide";
import Slider from "../Slider/Slider";

export default function Home() {
  return (
    <>
      <Nabar />
      <Slider />
      <Provide />
      <Experence />
      <Doctor />
      <Appintment title="Do you need an appointment?" />
      <LatestNews />
      <Opening />
      <Footer />
    </>
  );
}
