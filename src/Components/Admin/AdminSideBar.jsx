import { Link } from "react-router-dom";
import "../../Styles/adminSideBar.css";
import { useEffect, useState } from "react";
import logo from "../../Images/log.png";
import { handleSideBarToggle } from "../../Components/Functions/handleSideBarToggle";

const AdminSideBar = () => {
  const [adminActiveLink, setAdminActiveLink] = useState("");

  // تعيين الحالة بناءً على التخزين عند التحميل.
  useEffect(() => {
    const storedadminActiveLink =
      sessionStorage.getItem("adminActiveLink") || "/admin/allproducts";
    setAdminActiveLink(storedadminActiveLink);
  }, []);

  const handleLinkClick = (link) => {
    setAdminActiveLink(link);
    sessionStorage.setItem("adminActiveLink", link); // تخزين الحالة
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="toggle-btn">
        <svg
          onClick={handleSideBarToggle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
        </svg>
      </div>
      <a
        className={"navbar-brand"}
        href="/"
        onClick={() => handleLinkClick("/")}
      >
        <img src={logo} alt="Logo" />
      </a>
      <Link to={"allorders"} onClick={() => handleLinkClick("allorders")}>
        <div
          className={`${
            adminActiveLink === "allorders" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
            </svg>
          </div>
          Order Management
        </div>
      </Link>
      <Link to={"allproducts"} onClick={() => handleLinkClick("allproducts")}>
        <div
          className={`${
            adminActiveLink === "allproducts" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
            </svg>
          </div>
          Product Management
        </div>
      </Link>
      <Link to={"addbrand"} onClick={() => handleLinkClick("addbrand")}>
        <div
          className={`${
            adminActiveLink === "addbrand" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
            </svg>
          </div>
          Add Brand
        </div>
      </Link>
      <Link to={"addcategory"} onClick={() => handleLinkClick("addcategory")}>
        <div
          className={`${
            adminActiveLink === "addcategory" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
          </div>
          Add Category
        </div>
      </Link>
      <Link
        to={"addsubcategory"}
        onClick={() => handleLinkClick("addsubcategory")}
      >
        <div
          className={`${
            adminActiveLink === "addsubcategory" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328l-90.3 0-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280l42.3 0L208 237.7zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24-43.9l0-28.1c0-13.3 10.7-24 24-24s24 10.7 24 24l0 96 0 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z" />
            </svg>
          </div>
          Add Subcategory
        </div>
      </Link>
      <Link to={"addproduct"} onClick={() => handleLinkClick("addproduct")}>
        <div
          className={`${
            adminActiveLink === "addproduct" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" />
            </svg>
          </div>
          Add Product
        </div>
      </Link>
    </div>
  );
};

export default AdminSideBar;
