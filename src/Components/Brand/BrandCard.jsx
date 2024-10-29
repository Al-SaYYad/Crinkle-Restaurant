import { Card, Col } from "react-bootstrap";
import "../../Styles/brandCard.css";

const BrandCard = ({ img }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="brand">
      <Card className="brand-card ">
        <Card.Img variant="top" src={img} />
      </Card>
    </Col>
  );
};

export default BrandCard;
