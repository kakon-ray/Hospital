import React from "react";
import Article from "./Article";

export default function Provide() {
  return (
    <section className="Provide-section py-5 text-center text-focus-in">
      <div className="container">
        <h1 className="text-secondary py-2 bounce-top">What we Provide</h1>
        <div className="title-width m-auto bg-info"></div>

        <div className="row py-3">
          <Article
            title="Medical Examination"
            icon="fas fa-stethoscope"
            description="The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start."
          />
          <Article
            title="Medical Examination"
            icon="fas fa-syringe"
            description="The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start."
          />
          <Article
            title="Medical Examination"
            icon="fas fa-plus"
            description="The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start."
          />
          <Article
            title="Medical Examination"
            icon="fas fa-brain"
            description="The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start."
          />
          <Article
            title="Medical Examination"
            icon="fas fa-head-side-virus"
            description="The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start."
          />
          <Article
            title="Medical Examination"
            icon="fas fa-head-side-virus"
            description="The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start."
          />
        </div>
      </div>
    </section>
  );
}
