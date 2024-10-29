import { Col, Row } from "react-bootstrap";
import UserAddressCard from "./UserAddressCard";
import { Link } from "react-router-dom";

const UserPersonalAddresses = () => {
  return (
    <div>
      <div className="admin-content-text">Personal Addresses</div>
      <UserAddressCard />
      <UserAddressCard />
      <UserAddressCard />

      <Row className="justify-content-center  my-5">
        <Col sm="10" className="d-flex justify-content-center">
          <Link to={"/user/add-address"} style={{ textDecoration: "none" }}>
            <button className="btn-add-address">Add New Address</button>
          </Link>
        </Col>
      </Row>
      
    </div>
  );
};

export default UserPersonalAddresses;
