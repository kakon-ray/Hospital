import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Sidebar from "../Sidebar/Sidebar";

const AddInformation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [user] = useAuthState(auth);

  const nameRef = useRef("");
  const specialistRef = useRef("");
  const visitRef = useRef("");
  const timeRef = useRef("");
  const descriptionRef = useRef("");
  const facebookRef = useRef("");
  const twterRef = useRef("");
  const imgRef = useRef("");

  const addInformation = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const specialist = specialistRef.current.value;
    const visit = visitRef.current.value;
    const time = timeRef.current.value;
    const descripttion = descriptionRef.current.value;
    const facebook = facebookRef.current.value;
    const twter = twterRef.current.value;
    const img = imgRef.current.value;

    const addValue = {
      title: name,
      department: specialist,
      visit,
      time,
      des: descripttion,
      facebook,
      twter,
      email: user.email,
      img,
    };

    async function addFunction() {
      try {
        const response = await fetch(
          "https://gentle-retreat-65672.herokuapp.com/doctor",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addValue),
          }
        );

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        throw error;
        // eslint-disable-next-line no-unreachable
        console.log(error);
      }
    }

    addFunction();
  };

  return (
    <div>
      <div className="container">
        <div className="row gx-0">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Card className="mx-auto rounded-5">
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
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="formBasicVisit">
                        <Form.Control
                          type="text"
                          placeholder="Visit Fee"
                          className="rounded-0"
                          ref={visitRef}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="formBasicTime">
                        <Form.Control
                          type="text"
                          placeholder="visiting patient Time"
                          className="rounded-0"
                          ref={timeRef}
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md">
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicFacebook"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Facebook Profile url"
                          className="rounded-0"
                          ref={facebookRef}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicFacebook"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Twitter Profile url"
                          className="rounded-0"
                          ref={twterRef}
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      className="rounded-0"
                      as="textarea"
                      rows={6}
                      ref={descriptionRef}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicImage">
                    {/* <label className="me-2">Picture Upload: </label> */}
                    {/* <input
                      type="file"
                      name="myImage"
                      title="Choose Picture"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    /> */}
                    <Form.Control
                      type="text"
                      placeholder="Photo url"
                      className="rounded-0"
                      ref={imgRef}
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
