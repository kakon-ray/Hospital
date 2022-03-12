import React, { useContext } from "react";
import { userContext } from "../userContext/userContext";

import Article from "./Article";

export default function Provide() {
  const [users, setUsers] = useContext(userContext);

  return (
    <section className="Provide-section py-5 text-center text-focus-in">
      <div className="container">
        <h1 className="text-secondary py-2 bounce-top">What we Provide</h1>
        <div className="title-width m-auto bg-info"></div>

        <div className="row py-3">
          {users.map((user) => (
            <Article
              title={user.title}
              icon={user.icon}
              description={user.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
