import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import card1 from "../../Images/card-3.jpg";
import card2 from "../../Images/card-4.jpg";
import card3 from "../../Images/card-5.jpg";
import card4 from "../../Images/card-6.jpg";
import card5 from "../../Images/card-7.jpg";
import card6 from "../../Images/card-8.jpg";

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="Categories" btntitle="More" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="Burger" img={card1} background="#F3F4F6" />
        <CategoryCard title="Burger" img={card2} background="#F3F4F6" />
        <CategoryCard title="Burger" img={card3} background="#F3F4F6" />
        <CategoryCard title="Burger" img={card4} background="#F3F4F6" />
        <CategoryCard title="Burger" img={card5} background="#F3F4F6" />
        <CategoryCard title="Burger" img={card6} background="#F3F4F6" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
