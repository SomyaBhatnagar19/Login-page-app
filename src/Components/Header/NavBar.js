import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Store/AuthContext";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const AuthCtx = useContext(AuthContext);
  
  //!! -> used to make the string changed to boolean
  const isLoggedIn = !!AuthCtx.token;
  const navigate = useNavigate(); //using it to set the loginpage when the logout button is clicked

  const logoutHandler = () => {
    AuthCtx.logout();
    alert('User Successfully logged out.');
    navigate('/LoginPage');
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/HomePage">
          ReactAuth
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           {!isLoggedIn && <Nav.Link as={Link} to="/LoginPage">
              Login
            </Nav.Link> }
            {isLoggedIn && <Nav.Link as={Link} to="/ProfilePage">
              Profile
            </Nav.Link>}
            {isLoggedIn && <Nav.Link>
              <Button onClick={logoutHandler}>Logout</Button>
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;