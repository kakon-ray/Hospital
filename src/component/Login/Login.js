import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const signIn = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  };
  return (
    <div className="mt-4">
      <div className="form-responsive mx-auto">
        <Card className="mx-auto rounded-0">
          <Card.Body className="p-5">
            <Form onSubmit={signIn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-0"
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  className="rounded-0"
                  ref={passwordRef}
                />
              </Form.Group>

              <Button className="btn btn-info w-100" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
          <p className="text-center">
            Don't have account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span className="text-info " style={{ cursor: "pointer" }}>
                Create an account
              </span>
            </Link>
          </p>
        </Card>
        <SocialLogin />
      </div>
    </div>
  );
}
