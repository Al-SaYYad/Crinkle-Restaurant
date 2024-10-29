import BrandContainer from "../../Components/Brand/BrandContainer";

import PaginationComponents from "../../Components/Uitily/Pagination";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Footer from "../../Components/Uitily/Footer";

const AllBrand = () => {
  return (
    <>
      <NavBarLogin />
      <div className="main-all-category">
        <BrandContainer />
        <PaginationComponents />
      </div>
      <Footer />
    </>
  );
};

export default AllBrand;
