import { Col, Container, Pagination, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import SideFilter from "../../Components/Uitily/SideFilter";
import "../../Styles/shopProductsPage.css";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import PaginationComponents from "../../Components/Uitily/Pagination";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Footer from "../../Components/Uitily/Footer";

const ShopProductsPage = () => {
  return (
    <>
      <NavBarLogin />
      <div>
        <CategoryHeader />
        <Container>
          <SearchCountResult title={"400 Search Results"} />
          <Row className="contain-products">
            <Col sm="2" xs="2" md="1" className="my-col">
              <SideFilter />
            </Col>
            <Col sm="10" xs="10" md="11">
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
              <CardProductContainer title="" btntitle="" />
            </Col>
          </Row>
          <PaginationComponents />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ShopProductsPage;
