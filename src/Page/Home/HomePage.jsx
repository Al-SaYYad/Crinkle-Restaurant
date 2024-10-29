import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import { Slide } from "react-awesome-reveal";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Footer from "../../Components/Uitily/Footer";

const HomePage = () => {
  return (
    <>
      <NavBarLogin />
      <div>
        <Slider />
        <Slide triggerOnce duration={1000}>
          <HomeCategory />

          <CardProductContainer
            title={"Best Seller"}
            btntitle={"More"}
            pathText="/products"
          />
          <DiscountSection />
          <CardProductContainer
            title={"Latest Meals"}
            btntitle={"More"}
            pathText="/products"
          />

          <BrandFeatured title={"The Most Famous Foods"} btntitle={"More"} />
        </Slide>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
