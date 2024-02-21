import React from "react";
import { Container, Navbar } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Mi Blog</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
