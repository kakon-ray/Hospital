import React from "react";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

export default function Login() {
  return (
    <div className="mt-4">
      <div className="mx-auto w-50">
        <Card style={{ width: "30rem" }} className="mx-auto rounded-0">
          <Card.Body className="p-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="rounded-0"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                className="rounded-0"
              />
            </Form.Group>

            <button className="btn btn-info w-100" type="submit">
              SUBMIT
            </button>
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
