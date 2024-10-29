import { Col } from "react-bootstrap";
import "../../Styles/categoryCard.css";

const CategoryCard = ({ background, img, title }) => {
  return (
      <Col xs="6" sm="6" md="4" lg="2" className="main-cards">
        <div className="allCard mb-3">
          <div
            className="category-card"
            style={{ backgroundColor: `${background}` }}
          >
            <div className="card-img">
              <img src={img} alt="Card Image" className="category-card-img" />
            </div>
            <p className="category-card-text ">{title}</p>
          </div>
        </div>
      </Col>
  );
};

export default CategoryCard;
