import React, { useState, createContext } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      icon: "fas fa-stethoscope",
      title: "Medical Examination One",
      description: `The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start.`,
    },
    {
      id: 2,
      icon: "fas fa-syringe",
      title: "Medical Examination Two",
      description: `The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start.`,
    },
    {
      id: 3,
      icon: "fas fa-plus",
      title: "Medical Examination Three",
      description: `The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start.`,
    },
    {
      id: 4,
      icon: "fas fa-brain",
      title: "Medical Examination Four",
      description: `The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start.`,
    },
    {
      id: 5,
      icon: "fas fa-head-side-virus ",
      title: "Medical Examination Five",
      description: `The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start.`,
    },
    {
      id: 6,
      icon: "fas fa-head-side-virus ",
      title: "Medical Examination Six",
      description: `The development of preventive medicine has been one of the main
              goals of Metropolitan Hospital since its establishment. Quality of
              life directly depends on prevention and discovering illnesses
              right at the start.`,
    },
  ]);

  return (
    <userContext.Provider value={[users, setUsers]}>
      {props.children}
    </userContext.Provider>
  );
};
