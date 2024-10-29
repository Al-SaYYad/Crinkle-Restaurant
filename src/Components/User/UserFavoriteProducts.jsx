import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import PaginationComponents from "../Uitily/Pagination";

const UserFavoriteProducts = () => {
  return (
    <div>
      <div className="admin-content-text">Favorite Products</div>
      <Row className="justify-content-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
      
      <PaginationComponents />

    </div>
  );
};

export default UserFavoriteProducts;
