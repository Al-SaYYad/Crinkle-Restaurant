import { Col, Row } from "react-bootstrap";
import CartItem from "../Cart/CartItem";

const AdminOrderDetails = () => {
  return (
    <div>
      <div className="admin-content-text">Order Details Number#55</div>
      <CartItem />
      <CartItem />
      <CartItem />
      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className="d-flex">
          <div className="admin-content-text py-2">Client Details</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div style={{ color: "#555550", fontSize: "16px" }}>Name: </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminOrderDetails;
