import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "../Common/Buttons";

function NavbarComp() {
  const [active, setActive] = useState(0);
  const Scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar bg="white" expand="lg">
      <Container className="mt-2 mb-2">
        <Navbar.Brand href="#home">
          <img src="/logo.png" alt="Logo" width="200px" height="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                setActive(0);
                // Scroll("home");
              }}
              style={{
                borderBottom: active === 0 ? "2px solid #433582" : "",
                color: active === 0 ? "#433582" : "",
                fontWeight: active === 0 ? "600" : "",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => {
                setActive(1);
                // Scroll("about");
              }}
              style={{
                borderBottom: active === 1 ? "2px solid #433582" : "",
                color: active === 1 ? "#433582" : "",
                fontWeight: active === 1 ? "600" : "",
              }}
            >
              About
            </Nav.Link>
            <Button className="d-flex flex-row align-items-center justify-content-center ms-5">
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
