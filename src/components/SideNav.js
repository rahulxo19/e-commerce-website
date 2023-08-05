import { Offcanvas } from "react-bootstrap";
import CartItems from "./CartItems";

const SideNav = (props) => {
  return (
    <Offcanvas placement="end" show={props.show} onHide={props.handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CartItems />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideNav;
