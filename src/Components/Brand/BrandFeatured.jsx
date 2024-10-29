import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import BrandCard from "./BrandCard";
import "../../Styles/brandFeatured.css"
import card1 from "../../Images/card-8.jpg";
import card2 from "../../Images/card-9.jpg";
import card3 from "../../Images/card-11.jpg";
import card4 from "../../Images/card-3.jpg";
import card5 from "../../Images/card-6.jpg";
import card6 from "../../Images/card-7.jpg";

const BrandFeatured = ({ title, btntitle }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="brand-featured">
        <BrandCard img={card1} />
        <BrandCard img={card2} />
        <BrandCard img={card3} />
        <BrandCard img={card4} />
        <BrandCard img={card5} />
        <BrandCard img={card6} />
      </Row>
    </Container>
  );
};

export default BrandFeatured;
