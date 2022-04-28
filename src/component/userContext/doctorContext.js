import React, { useState, createContext, useEffect } from "react";

export const doctorContext = createContext();

export const DoctorProvider = (props) => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch("http://localhost:5000/doctor")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  return (
    <doctorContext.Provider value={[users, setUsers]}>
      {props.children}
    </doctorContext.Provider>
  );
};
