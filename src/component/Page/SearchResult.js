/* eslint-disable react-hooks/rules-of-hooks */

import React, { useContext, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Nabar from "../Navbar/Nabar";
import { doctorContext } from "../userContext/doctorContext";

export default function SearchResult() {
  const [data, useData] = useState();
  const [users, setUsers] = useContext(doctorContext);
  const pull_data = (data) => {
    console.log(data);
    useData(data);
  };

  const userResult = users.filter(
    (user) => user.title?.toLowerCase() === data?.toLowerCase()
  );
  console.log(userResult);
  return (
    <>
      <Nabar func={pull_data} />

      {!data ? (
        <div className="text-center my-5 container">
          <div className="row g-4">
            {users.map((user) => (
              <Col className="col-md-4">
                <Card style={{ width: "22rem" }} className="mx-auto">
                  <Card.Img
                    variant="top"
                    src={user.img}
                    style={{ height: "250px" }}
                  />
                  <Card.Body>
                    <Card.Title>{user.title}</Card.Title>
                    <Card.Text>{user.department}</Card.Text>
                    <Card.Text>{user.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center my-5">
          <div className="text-center my-5 container">
            <div className="row g-3">
              {userResult.length > 0 ? (
                userResult.map((user) => (
                  <React.Fragment key={user.id}>
                    <Col className="col-md-4">
                      <Card style={{ width: "22rem" }} className="mx-auto">
                        <Card.Img
                          variant="top"
                          src={user.img}
                          style={{ height: "250px" }}
                        />
                        <Card.Body>
                          <Card.Title>{user.title}</Card.Title>
                          <Card.Text>{user.department}</Card.Text>
                          <Card.Text>{user.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </React.Fragment>
                ))
              ) : (
                <h1>No Result Found</h1>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
