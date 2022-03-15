/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Appintment from "../Appintment/Appintment";
import Doctor from "../Doctor/Doctor";
import Experence from "../Experence/Experence";

import Footer from "../Footer/Footer";
import LatestNews from "../LatestNews/LatestNews";
import Nabar from "../Navbar/Nabar";
import Provide from "../Provide/Provide";

export default function SearchResult() {
  const [data, useData] = useState();
  const pull_data = (data) => {
    console.log(data);
    useData(data);
  };
  return (
    <>
      <Nabar func={pull_data} />

      <div className="text-center my-5">
        <h2>{data}</h2>
      </div>

      <Experence />
      <Provide />
      <Doctor />
      <Appintment title="Do you need an appointment?" />
      <LatestNews />
      <Footer />
    </>
  );
}
