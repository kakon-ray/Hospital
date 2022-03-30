import React, { useState, createContext } from "react";

export const latestNewsContext = createContext();

export const NewsProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "Working in the OR as a nurch",
      img: "https://media.istockphoto.com/photos/doctor-treatment-patients-in-hospital-room-medical-professionals-help-picture-id1216214264?k=20&m=1216214264&s=170667a&w=0&h=CiBhmc_A_pKbKCHcHtFITbQu5iYnG3cqJFpqiJA89kU=",
      para: "Oxygenna , July 29 20211",
    },
    {
      id: 2,
      title: "Working in the OR as a nurch",
      img: "https://static.dw.com/image/50927628_101.jpg",
      para: "Oxygenna , July 30 20211",
    },
    {
      id: 3,
      title: "Working in the OR as a nurch",
      img: "https://neurokolkata.org/wp-content/uploads/2019/11/slider_3-1024x683.jpg",
      para: "Oxygenna , Jun 12 20211",
    },
    {
      id: 3,
      title: "Working in the OR as a nurch",
      img: "https://static.dw.com/image/50927628_101.jpg",
      para: "Oxygenna , July 30 20211",
    },
  ]);

  return (
    <latestNewsContext.Provider value={[users, setUsers]}>
      {props.children}
    </latestNewsContext.Provider>
  );
};
