import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  InputGroup,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import SideNav from "./SideNav";
import CartContext from "../Store/Cart-Context";
import { NavLink, Outlet } from "react-router-dom";

const NavigationBar = (props) => {
  const [show, setShow] = useState(false);
  const cartCtx = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="navbar navbar-dark bg-dark ">
        <Container>
          <NavbarBrand href="/">E-Commerce</NavbarBrand>
          <Nav className="me-auto">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contactus" className="nav-link">
              Contact Us
            </NavLink>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link to="/cart" className="nav-link">
              <InputGroup>
                <div className="input-group-text text-primary">
                  {cartCtx.items.length}
                </div>
                <Button variant="primary" onClick={handleShow}>
                  Cart
                </Button>
                <SideNav show={show} handleClose={handleClose} />
              </InputGroup>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavigationBar;
