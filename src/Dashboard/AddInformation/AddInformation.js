import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

const AddInformation = () => {
  const nameRef = useRef("");
  const specialistRef = useRef("");
  const visitRef = useRef("");
  const timeRef = useRef("");
  const descriptionRef = useRef("");

  const addInformation = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const specialist = specialistRef.current.value;
    const visit = visitRef.current.value;
    const time = timeRef.current.value;
    const descripttion = descriptionRef.current.value;

    console.log({ name, specialist, visit, time, descripttion });
  };

  return (
    <div>
      <div className="container">
        <div className="row gx-0">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Card className="mx-auto rounded-0">
              <Card.Body className="p-5">
                <Form onSubmit={addInformation}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      className="rounded-0"
                      ref={nameRef}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicSpecial">
                    <Form.Control
                      type="text"
                      placeholder="Specialist"
                      className="rounded-0"
                      ref={specialistRef}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicVisit">
                    <Form.Control
                      type="text"
                      placeholder="Visit Fee"
                      className="rounded-0"
                      ref={visitRef}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTime">
                    <Form.Control
                      type="text"
                      placeholder="visiting patient Time"
                      className="rounded-0"
                      ref={timeRef}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      className="rounded-0"
                      as="textarea"
                      rows={8}
                      ref={descriptionRef}
                    />
                  </Form.Group>

                  <Button className="btn btn-dark w-100" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInformation;
