import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Footer from "../../Components/Uitily/Footer";

const ProductDetailsPage = () => {
  return (
    <>
      <NavBarLogin />
      <div>
        <CategoryHeader />
        <Container>
          <ProductDetails />
          <RateContainer />
          <CardProductContainer title="Products you may like" />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
