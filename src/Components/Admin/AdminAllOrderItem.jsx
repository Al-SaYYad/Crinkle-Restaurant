import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import cart1 from "../../Images/card-4.jpg";

const AdminAllOrderItem = () => {
  return (
    <Col xs="12" className="cart-item-body">
      <div className="img-wraper">
        <img src={cart1} alt="cart Item" />
      </div>
      <div className="content">
        <div className="font-weight-1">Order Number #2321</div>
        <Row className="content-row">
          <Col sm="12" className="cat-text">
            <div className="content-title">Electronk</div>
          </Col>
        </Row>
        <Row className="content-row-two">
          <Col sm="12" className="content-col-two">
            <div className="cat-title">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </div>
            <div className="cat-rate">4.5</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="content-col-three">
            <div>
              <label style={{ verticalAlign: "top" }}>
                Count:
                <input type="number" minLength={0} maxLength={4} />
              </label>
            </div>
            <div className="actions">
              <div className="delete">
                <div className="cat-text-tow">Delete</div>
              </div>
              <div className="save">
                <Link to="save">Save for later</Link>
              </div>
            </div>
            <div className="pri">EGP: 250</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default AdminAllOrderItem;
