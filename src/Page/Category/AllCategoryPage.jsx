import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationComponents from "../../Components/Uitily/Pagination";
import "../../Styles/allCategoryPage.css";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Footer from "../../Components/Uitily/Footer";

const AllCategoryPage = () => {
  return (
    <>
      <NavBarLogin />
      <div className="main-all-category">
        <CategoryContainer />
        <PaginationComponents />
      </div>
      <Footer />
    </>
  );
};

export default AllCategoryPage;
