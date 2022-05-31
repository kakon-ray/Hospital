import React, { useState, createContext, useEffect } from "react";

export const doctorContext = createContext();

export const DoctorProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://gentle-retreat-65672.herokuapp.com/doctor")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <doctorContext.Provider value={[users, setUsers]}>
      {props.children}
    </doctorContext.Provider>
  );
};
