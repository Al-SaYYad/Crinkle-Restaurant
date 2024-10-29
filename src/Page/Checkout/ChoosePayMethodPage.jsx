import { Container } from "react-bootstrap";
import ChoosePayMethod from "../../Components/Checkout/ChoosePayMethod";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Footer from "../../Components/Uitily/Footer";

const ChoosePayMethodPage = () => {
  return (
    <>
      <NavBarLogin />
      <Container>
        <ChoosePayMethod />
      </Container>
      <Footer />
    </>
  );
};

export default ChoosePayMethodPage;
