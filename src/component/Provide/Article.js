import React from "react";

export default function Article({ title, description, icon }) {
  return (
    <article className="col-lg-4 col-md-6 g-5">
      <i className={`${icon} pb-5 text-info`}></i>
      <h4 className="text-secondary">{title}</h4>
      <p className="text-secondary">{description}</p>
    </article>
  );
}
