// import React from "react";
// import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">RactAuth</Navbar.Brand>
//         <Nav className="me-auto">
//         <Nav.Link href="#Login">Login</Nav.Link>
//         <Nav.Link href="#Profile">Profile</Nav.Link>
//         <Nav.Link ><Button>Logout</Button></Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };
// export default NavBar;
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">RactAuth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Use "ms-auto" to align items to the right */}
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Profile">Profile</Nav.Link>
            <Nav.Link>
              <Button>Logout</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
