import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import card1 from "../../Images/card-3.jpg";
import { useState } from "react";
import RatePost from "../Rate/RatePost";

const AdminAllProductsCard = () => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="d-flex justify-content-center">
      <Card className="card" style={{ width: "18rem" }}>
        <Link to={"/product/:id"}>
          <Card.Img loading="lazy" variant="top" src={card1} />
        </Link>
        <Card.Body>
          <div className="card-head mb-3">
            <div className="price">
              <h5>EGB: 500</h5>
            </div>
            <div className="rate">4.5</div>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
