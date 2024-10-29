import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import "../../Styles/productDetails.css";

const ProductDetails = () => {
  return (
    <div className="main-details">
      <Row className="my-row">
        <Col lg="4">
          <ProductGallery />
        </Col>
        <Col lg="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
