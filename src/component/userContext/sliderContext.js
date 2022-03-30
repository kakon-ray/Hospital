import React, { useState, createContext } from "react";

export const sliderContext = createContext();

export const SliderProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "Hi ! I am Kakon Ray I am Front End Developer",
      img: "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg",
      description: `Hi ! I am Kakon I am Front End Developer. I am JavaScript Expert and I Know many Other Programming Language . I Study at Computer Science and Engineering`,
    },
    {
      id: 2,
      title: "Hi ! I am Kakon Ray I am Front End Developer",
      img: "https://cdn.pixabay.com/photo/2016/11/08/05/29/operation-1807543_1280.jpg",
      description: `Hi ! I am Kakon I am Front End Developer. I am JavaScript Expert and I Know many Other Programming Language . I Study at Computer Science and Engineering`,
    },
    {
      id: 3,
      title: "Hi ! I am Kakon Ray I am Front End Developer",
      img: "https://cdn.pixabay.com/photo/2020/11/02/19/52/doctor-5707722_1280.jpg",
      description: `Hi ! I am Kakon I am Front End Developer. I am JavaScript Expert and I Know many Other Programming Language . I Study at Computer Science and Engineering`,
    },
  ]);

  return (
    <sliderContext.Provider value={[users, setUsers]}>
      {props.children}
    </sliderContext.Provider>
  );
};
