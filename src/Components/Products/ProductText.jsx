import { Col, Row } from "react-bootstrap";
import "../../Styles/productText.css";

const ProductText = () => {
  return (
    <div>
      <Row className="my-row">
        <div className="cat-title">Meals</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-text">
            This meal consists of healthy and nutritious food and contains
            pieces of chicken, ketchup, and different sauces
            <div className="cat-rate">4.5</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
