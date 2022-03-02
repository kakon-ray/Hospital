import React from "react";
import Appintment from "../Appintment/Appintment";
import Doctor from "../Doctor/Doctor";
import Experence from "../Experence/Experence";
import Nabar from "../Navbar/Nabar";
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
    </>
  );
}
