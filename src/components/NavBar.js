import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import SideNav from "./SideNav";

const NavBar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar navbar-dark bg-dark ">
      <Container>
        <NavbarBrand href="#">E-Commerce</NavbarBrand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#" className="nav-link">
            <Button variant="primary" onClick={handleShow}>
              Cart
            </Button>
            <SideNav show={show} handleClose={handleClose} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
