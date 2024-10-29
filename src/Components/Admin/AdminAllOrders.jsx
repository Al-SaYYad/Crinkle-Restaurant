import { Row } from "react-bootstrap";
import AdminAllOrderItem from "./AdminAllOrderItem";
import PaginationComponents from "../Uitily/Pagination";

const AdminAllOrders = () => {
  return (
    <div>
      <div className="admin-content-text">Manage all Orders</div>
      <Row className="justify-content-center">
        <AdminAllOrderItem />
        <AdminAllOrderItem />
        <AdminAllOrderItem />
      </Row>
      
      <PaginationComponents />
    </div>
  );
};

export default AdminAllOrders;
