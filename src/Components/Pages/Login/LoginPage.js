// import React, { useState, useRef } from "react";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();

//   const [isLogin, setIsLogin] = useState(false);
//   const [isExistingUser, setIsExistingUser] = useState(false);

//   const existingAccHandler = () => {
//     setIsExistingUser((prevState) => !prevState);
//   };

//   // const submitHandler = async (event) => {
//   //   event.preventDefault();
//   //   const enteredEmail = emailInputRef.current.value;
//   //   const enteredPassword = passwordInputRef.current.value;

//   //   try {
//   //     const response = await fetch(
//   //       isLogin
//   //         ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFNzyd_VCN1qz42nuYjj-2I7WkJl6i8C0"
//   //         : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFNzyd_VCN1qz42nuYjj-2I7WkJl6i8C0",
//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({
//   //           email: enteredEmail,
//   //           password: enteredPassword,
//   //           returnSecureToken: true,
//   //         }),
//   //       }
//   //     );

//   //     const data = await response.json();

//   //     if (response.ok) {
//   //       console.log(data);
//   //       emailInputRef.current.value = "";
//   //       passwordInputRef.current.value = "";
//   //       alert("Authentication successful");
//   //       console.log("idToken:", data.idToken); // Log the idToken (JWT) received in the response.
//   //     } else {
//   //       console.log(data);
//   //       alert("Authentication failed. Please check your credentials.");
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //     alert("An error occurred. Please try again later.");
//   //   }
//   // };

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     const enteredEmail = emailInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;
  
//     try {
//       const response = await fetch(
//         isLogin
//           ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFNzyd_VCN1qz42nuYjj-2I7WkJl6i8C0"
//           : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFNzyd_VCN1qz42nuYjj-2I7WkJl6i8C0",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: enteredEmail,
//             password: enteredPassword,
//             returnSecureToken: true,
//           }),
//         }
//       );
  
//       const data = await response.json();
  
//       if (response.ok) {
//         console.log(data);
//         emailInputRef.current.value = "";
//         passwordInputRef.current.value = "";
  
//         if (isLogin) {
//           alert("Authentication successful");
//           console.log("idToken:", data.idToken);
//         } else {
//           if (data.error && data.error.message.includes("EMAIL_EXISTS")) {
//             alert("Email exists & login successful");
//           } else {
//             alert("Sign up successful");
//           }
//           console.log("idToken:", data.idToken);
//         }
//       } else {
//         console.log(data);
//         alert("Authentication failed. Please check your credentials.");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <Container className="main-container">
//       <Card className="card">
//         <Card.Header>
//           {isLogin || isExistingUser ? <h4>Sign In</h4> : <h4>Sign Up</h4>}
//         </Card.Header>
//         <Form onSubmit={submitHandler}>
//           <Card.Body>
//             <Form.Group>
//               <Form.Label className="form-label">
//                 <h6>Your Email:</h6>
//               </Form.Label>
//               <Form.Control
//                 type="email"
//                 className="form-control"
//                 ref={emailInputRef}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label className="form-label">
//                 <h6>Your Password:</h6>
//               </Form.Label>
//               <Form.Control
//                 type="password"
//                 className="form-control"
//                 ref={passwordInputRef}
//               />
//             </Form.Group>
//             {isLogin || isExistingUser ? (
//               <Button type="submit">Log In</Button>
//             ) : (
//               <Button type="submit">Create New Account</Button>
//             )}
//           </Card.Body>
//           <Card.Footer>
//             {!isExistingUser ? (
//               <p onClick={existingAccHandler}>Log in with an existing account</p>
//             ) : (
//               <p onClick={existingAccHandler}>New User?</p>
//             )}
//           </Card.Footer>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default LoginPage;
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
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const response = await fetch(
        isLogin
          ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFNzyd_VCN1qz42nuYjj-2I7WkJl6i8C0"
          : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFNzyd_VCN1qz42nuYjj-2I7WkJl6i8C0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";

        if (isLogin) {
          alert("Login successful");
          console.log("idToken:", data.idToken);
        } else {
          if (data.error && data.error.message === "EMAIL_EXISTS") {
            alert("Email exists & login successful");
          } else {
            alert("Sign up successful");
          }
          console.log("idToken:", data.idToken);
        }
      } else {
        alert("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
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
              <Button type="submit">Create New Account</Button>
            )}
          </Card.Body>
          <Card.Footer>
            {!isExistingUser ? (
              <p onClick={existingAccHandler}>Log in with an existing account</p>
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
