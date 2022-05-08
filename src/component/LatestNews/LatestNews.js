import React, { useContext } from "react";
import { latestNewsContext } from "../../Context/latestNewsContext";
import Articale from "./Articale";

import "./LatestNews.css";

export default function LatestNews() {
  const [news, setNews] = useContext(latestNewsContext);
  return (
    <section className="letest-news my-3">
      <div className="container">
        <h1 className="text-center pt-5 pb-3">Latest news</h1>
        <div className="title-width m-auto mb-5 bg-info"></div>
        <div className="row g-4">
          {news?.map((user) => (
            // console.log(user)
            <React.Fragment key={user.id}>
              <Articale link={user.img} title={user.title} para={user.para} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
