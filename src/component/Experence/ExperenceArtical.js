import React from "react";
import CountUp from "react-countup";

export default function ExperenceArtical({ icon, title, start, end, bgColor }) {
  return (
    <article className={`col-lg-3 col-md-6 py-4 ${bgColor}`}>
      <i className={`${icon} pb-2 text-light`}></i>
      <CountUp className="count" start={start} end={end} />,
      <p className="title-width my-2 m-auto"></p>
      <p className="title">{title}</p>
    </article>
  );
}
