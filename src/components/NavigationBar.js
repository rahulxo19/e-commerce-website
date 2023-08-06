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

const NavigationBar = (props) => {
  const [show, setShow] = useState(false);
  const cartCtx = useContext(CartContext);

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
  );
};

export default NavigationBar;
