import React from "react";
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
    </>
  );
}
