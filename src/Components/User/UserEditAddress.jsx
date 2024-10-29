import React from "react";
import { Col, Row } from "react-bootstrap";

const UserEditAddress = () => {
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-2">Edit Address</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Address for example (home - work)"
            value={"Home"}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows={4}
            cols={50}
            placeholder="Address in Detail"
            value={"القاهره 6 اكتوبر"}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Phone Number"
            value={"01097255813"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserEditAddress;
