import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div style={{ flex: 1 }}>
      <div className="admin-content-text">Profile</div>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">Name: </div>
            <div className="p-2 user-info">Mahmoud Ali</div>
            <span className="item-edit">
              Edit
            </span>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2"></div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-flex">
            <div className="p-2">Phone Number: </div>
            <div className="p-2 user-info">01097255813</div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-flex">
            <div className="p-2">Email: </div>
            <div className="p-2 user-info">mahmoud@gmail.com</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6">
            <div className="admin-content-text">Change Password</div>
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="Enter the old password"
            />
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="Enter the new password"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" md="6" className="d-flex justify-content-end">
            <Link to={""} style={{ textDecoration: "none" }}>
              <button className="btn-add-address mt-2">Save</button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
