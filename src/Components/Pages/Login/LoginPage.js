import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  const existingAccHandler = () => {
    setIsExistingUser((prevState)=>!prevState);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLogin(true);
  }

  return(
    <Container>
      <Card>
        <Card.Header>
          {isLogin || isExistingUser ? <h4>Sign In</h4>: <h4>Sign Up</h4>}
        </Card.Header>
        <Form onSubmit={submitHandler}>
        <Card.Body>
          
          <Form.Group>
            <Form.Label>
              <h6>Your Email: </h6>
            </Form.Label>
            <Form.Control
              type="email"/>
          </Form.Group>
          <Form.Label>
              <h6>Your Password: </h6>
            </Form.Label>
            <Form.Control
              type="password"/>
              {isLogin || isExistingUser ? (
                <Button>
                  Log In
                </Button>
              ):(
                <Button>
                  Create New Account
                </Button>
              )}
              </Card.Body>
              <Card.Footer>
              {!isExistingUser ? (<p onClick={existingAccHandler}>Log in with existing account</p>):(<p onClick={existingAccHandler}>New User?</p>)}
              </Card.Footer>
              
          </Form>
        
      </Card>
    </Container>
  )
}
export default LoginPage;
