import { Container, Row, Col } from "react-bootstrap";
import PaginationComponents from "../../Components/Uitily/Pagination";
import UserSideBar from "../../Components/User/UserSideBar";
import UserFavoriteProducts from "../../Components/User/UserFavoriteProducts";

const UserFavoriteProductsPage = () => {
  return (
    <>
        <UserFavoriteProducts />
    </>
  );
};

export default UserFavoriteProductsPage;
