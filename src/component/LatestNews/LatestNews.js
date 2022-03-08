import React from "react";
import Articale from "./Articale";

import "./LatestNews.css";
import img from "../../assets/img/Screenshot_5.png";
import img1 from "../../assets/img/Screenshot_6.png";
import img2 from "../../assets/img/Screenshot_7.png";

export default function LatestNews() {
  return (
    <section className="letest-news my-3">
      <div className="container">
        <h1 className="text-center pt-5 pb-3">Latest news</h1>
        <div className="title-width m-auto mb-5 bg-info"></div>
        <div className="row g-4">
          <Articale
            link={img}
            title="Working in the OR as a nurch"
            para="Oxygenna , July 29 20211"
          />
          <Articale
            link={img1}
            title="Working in the OR as a nurch"
            para="Oxygenna , July 29 20211"
          />
          <Articale
            link={img2}
            title="Working in the OR as a nurch"
            para="Oxygenna , July 29 20211"
          />
        </div>
      </div>
    </section>
  );
}
