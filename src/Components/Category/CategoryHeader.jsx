import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/categoryHeader.css";

const CategoryHeader = () => {
  const categories = [
    "All",
    "Grilled",
    "Broast Chicken",
    "Paneer Chicken",
    "Sale",
    "More",
  ];

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="main-cat">
            {categories.map((category, index) => (
              <div key={index} className="cat-text-header">
                {category}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
