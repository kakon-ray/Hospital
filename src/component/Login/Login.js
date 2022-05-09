import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const signIn = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      toast.error("Please fulfillment input filed");
      return;
    }
    signInWithEmailAndPassword(email, password).then((res) => {
      navigate("/dashboard/profile");
      // setTimeout(navigate(from, { replace: true }), 2000);
    });

    if (error) {
      toast.error("Login faild");
    }

    // console.log(email, password);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="mt-4">
      <ToastContainer position="top-center" reverseOrder={false} />
      <div className="form-responsive mx-auto">
        <Card className="mx-auto rounded-0 pb-4">
          <Card.Body className="p-5 pb-3">
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
          <p className="text-center mb-0 pb-0">
            Don't have account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span className="text-info " style={{ cursor: "pointer" }}>
                Create an account
              </span>
            </Link>
          </p>
          <SocialLogin />
        </Card>
      </div>
    </div>
  );
}
