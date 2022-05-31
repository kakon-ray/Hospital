import React, { useState, createContext, useEffect } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://gentle-retreat-65672.herokuapp.com/provide")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <userContext.Provider value={[users, setUsers]}>
      {props.children}
    </userContext.Provider>
  );
};
