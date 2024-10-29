import { Col, Container, Row } from "react-bootstrap";
import disImg from "../../Images/card-18.jpg";
import "../../Styles/discountSection.css";

const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount">
        <Col sm="6">
          <div className="discount-title">Up to 30% discount on meals</div>
        </Col>
        <Col sm="6">
          <img className="discount-img" src={disImg} alt="Discount Image" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
