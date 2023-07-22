import React, { useState, useRef } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  const existingAccHandler = () => {
    setIsExistingUser((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLogin(true); // Always set isLogin to true for sign-up

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFNzyd_VCN1qz42nuYjj-2I7WkJl6i8C0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (!response.ok) {
        // Check if the response contains an error message
        return response.json().then((data) => {
          throw new Error(data.error.message);
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      alert("Login successful!");
    })
    .catch((error) => {
      console.error(error);
      alert(error.message); // Display the error message from the API response
    });
  };

  return (
    <Container className="main-container">
      <Card className="card">
        <Card.Header>
          {isLogin || isExistingUser ? <h4>Sign In</h4> : <h4>Sign Up</h4>}
        </Card.Header>
        <Form onSubmit={submitHandler}>
          <Card.Body>
            <Form.Group>
              <Form.Label className="form-label">
                <h6>Your Email:</h6>
              </Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                ref={emailInputRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-label">
                <h6>Your Password:</h6>
              </Form.Label>
              <Form.Control
                type="password"
                className="form-control"
                ref={passwordInputRef}
              />
            </Form.Group>
            {isLogin || isExistingUser ? (
              <Button type="submit">Log In</Button>
            ) : (
              <Button>Create New Account</Button>
            )}
          </Card.Body>
          <Card.Footer>
            {!isExistingUser ? (
              <p onClick={existingAccHandler}>
                Log in with an existing account
              </p>
            ) : (
              <p onClick={existingAccHandler}>New User?</p>
            )}
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;
