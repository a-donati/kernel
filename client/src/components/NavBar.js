import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Auth from '../utils/auth';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            kernel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {Auth.loggedIn() ? (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>

                <Nav.Link as={Link} to="/dailytracker">
                  Daily Tracker
                </Nav.Link>
                <Nav.Link as={Link} to="/grid">
                  Grid
                </Nav.Link>
                <Nav.Link as={Link} to="/resources">
                  Resources
                </Nav.Link>
                <Nav.Link as={Link} to="/wordsofencouragement">
                  Kernels of Encouragement
                </Nav.Link>
                <Nav.Link eventKey={2} onClick={Auth.logout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

          ) : <Nav.Link></Nav.Link>

          }
        </Container>
      </Navbar>
      {/* <br /> */}
    </>
  );
}

export default NavBar;
