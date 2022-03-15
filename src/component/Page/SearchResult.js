/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import Footer from "../Footer/Footer";

import Nabar from "../Navbar/Nabar";

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

      <Footer />
    </>
  );
}
