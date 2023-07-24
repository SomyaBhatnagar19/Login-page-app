import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Store/AuthContext";

const NavBar = () => {
  const AuthCtx = useContext(AuthContext);
  
  //!! -> used to make the string changed to boolean
  const isLoggedIn = !!AuthCtx.token;
  
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
              <Button>Logout</Button>
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;