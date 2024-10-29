import { Col, Row } from "react-bootstrap";
import "../../Styles/cartCheckout.css";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  return (
    <Row className="cart-checkout">
      <Col xs="12" className="first-col">
        <div className="main-copon">
          <input className="copon-input" placeholder="Copon Sale" />
          <button className="copon-btn">Apply</button>
        </div>
        <div className="product-price">EGP: 34500</div>
        <Link to={"/order/paymethoud"} className="main-product-cart-add">
            <button className="product-cart-add">Apply Purchase</button>
        </Link>
      </Col>
    </Row>
  );
};

export default CartCheckout;
