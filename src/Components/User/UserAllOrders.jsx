import { Col, Row } from "react-bootstrap";
import UserAllOrdersItem from "./UserAllOrdersItem";
import PaginationComponents from "../Uitily/Pagination";

const UserAllOrders = () => {
  return (
    <div>
      <div className="admin-content-text">Hi: {"Mahmoud Ali"}</div>
      <Row className="justify-content-between">
        <UserAllOrdersItem />
        <UserAllOrdersItem />
        <UserAllOrdersItem />
        <UserAllOrdersItem />
      </Row>
      <PaginationComponents />
    </div>
  );
};

export default UserAllOrders;
