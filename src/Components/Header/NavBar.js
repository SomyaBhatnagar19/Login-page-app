// import React from "react";
// import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import './NavBar.css';

// const NavBar = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand as={Link} to="/home">
//           RactAuth
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/login">
//               Login
//             </Nav.Link>
//             <Nav.Link as={Link} to="/profile">
//               Profile
//             </Nav.Link>
//             <Nav.Link>
//               <Button>Logout</Button>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/HomePage">
          RactAuth
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/LoginPage">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/ProfilePage">
              Profile
            </Nav.Link>
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
