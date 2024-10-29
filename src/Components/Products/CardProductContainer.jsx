import { Container, Fade, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Uitily/SubTitle";
import { Slide } from "react-awesome-reveal";

const CardProductContainer = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Slide triggerOnce duration={2000}>
        <Row className="my-2 d-flex justify-content-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </Slide>
    </Container>
  );
};

export default CardProductContainer;
