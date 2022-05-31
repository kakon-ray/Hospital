import React, { useState, createContext, useEffect } from "react";

export const latestNewsContext = createContext();

export const NewsProvider = (props) => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch("https://gentle-retreat-65672.herokuapp.com/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <latestNewsContext.Provider value={[news, setNews]}>
      {props.children}
    </latestNewsContext.Provider>
  );
};
