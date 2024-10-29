import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/categoryHeader.css"

const CategoryHeader = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="main-cat">
            <div className="cat-text-header">All</div>
            <div className="cat-text-header">Grilled</div>
            <div className="cat-text-header">Broast chicken</div>
            <div className="cat-text-header">Paneer chicken</div>
            <div className="cat-text-header">Sale</div>
            <div className="cat-text-header">More</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
