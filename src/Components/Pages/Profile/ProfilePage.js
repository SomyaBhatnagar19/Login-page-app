import React, { useContext, useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./ProfilePage.css";
import { AuthContext } from "../../Store/AuthContext";

const ProfilePage = () => {
  const [newPassword, setNewPassword] = useState("");
  const AuthCtx = useContext(AuthContext);
  const eneteredNewPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const eneteredNewPassword = eneteredNewPasswordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAFNzyd_VCN1qz42nuYjj-2I7WkJl6i8C0", // Replace with your Firebase API key
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: AuthCtx.token,
          password: eneteredNewPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Handle the response, display alert if necessary
        if (data.hasOwnProperty("error")) {
          alert(data.error.message);
        } else {
          alert("Password changed successfully!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error occurred while changing password. Please try again later.");
      });
  };

  return (
    <Container>
      <h1>Your User Profile</h1>
      <Container>
        <Form className="Form" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>
              <h5>New Password</h5>
            </Form.Label>
            <Form.Control type="password" ref={eneteredNewPasswordRef} />
          </Form.Group>
          <Button type="submit">Change Password</Button>
        </Form>
      </Container>
    </Container>
  );
};

export default ProfilePage;
