import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/cartPage.css";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Footer from "../../Components/Uitily/Footer";

const CartPage = () => {
  return (
    <>
      <NavBarLogin />
      <Container>
        <Row>
          <div className="cart-title">Shopping Cart</div>
        </Row>
        <Row className="myRow">
          <Col xs="12" md="9">
            <CartItem />
            <CartItem />
            <CartItem />
          </Col>
          <Col xs="10" md="3">
            <CartCheckout />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;
