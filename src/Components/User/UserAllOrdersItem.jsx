import { Col, Row } from "react-bootstrap";
import UserAllOrdersCard from "./UserAllOrdersCard";
import "../../Styles/userStyles.css";

const UserAllOrdersItem = () => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">Order Number #24265</div>
      </Row>
      <UserAllOrdersCard />
      <Row className=" my-5">
        <Col xs="4">
          <div>
            <div className="d-inline">Order Status</div>
            <div className="d-inline mx-2 stat">Under Implementation</div>
          </div>
        </Col>
        <Col xs="2" className="d-flex justify-content-end">
          <div>
            <div className="mx-3" style={{ fontWeight: "bold" }}>
              EGP: 40000
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrdersItem;
