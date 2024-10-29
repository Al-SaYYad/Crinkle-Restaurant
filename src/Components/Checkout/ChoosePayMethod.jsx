import { Col, Row } from "react-bootstrap";

const ChoosePayMethod = () => {
  return (
    <div>
      <div className="admin-content-text">Choose payment method</div>
      <div className="user-address-card">
        <Row className="paymethod-row">
          <Col cs="12" className="my-4">
            <input
              name="group"
              id="group1"
              type="radio"
              value={"Payment via Visa"}
              className="mt-2"
            />
            <label htmlFor="group1" className="mt-2">
              Payment via Visa
            </label>
          </Col>
        </Row>
        <Row>
          <Col cs="12" className="d-flex">
            <input
              type="radio"
              name="group"
              id="group1"
              value={"Payment upon receipt"}
              className="mt-2"
            />
            <label htmlFor="group1" className="mx-2"></label>
          </Col>
        </Row>
        <Row>
          <Col cs="12" className="d-flex justify-content-end">
            <div className="product-price d-inline border">EGP: 34000</div>
            <div className="product-cart-add px-3 pt-2 me-2 d-inline ">
              Apply Purchase
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChoosePayMethod;
