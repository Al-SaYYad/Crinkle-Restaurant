import { Col, Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";
import PaginationComponents from "../Uitily/Pagination";

const AdminAllProducts = () => {
  return (
    <div>
      <div className="admin-content-text">Manage all Products</div>
      <Row className="justify-content-center">
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </Row>
      
      <PaginationComponents />
    </div>
  );
};

export default AdminAllProducts;
