import { Link } from "react-router-dom";
import "../../Styles/adminSideBar.css";
import { useEffect, useState } from "react";
import { handleSideBarToggle } from "../Functions/handleSideBarToggle";
import logo from "../../Images/log.png";

const UserSideBar = () => {
  const [userActiveLink, setUserActiveLink] = useState("");

  // تعيين الحالة بناءً على التخزين عند التحميل
  useEffect(() => {
    const storedActiveLink =
      sessionStorage.getItem("userActiveLink") || "/user/allorders";
    setUserActiveLink(storedActiveLink);
  }, []);

  const handleLinkClick = (link) => {
    setUserActiveLink(link);
    sessionStorage.setItem("userActiveLink", link); // تخزين الحالة
  };
  return (
    <div className="sidebar">
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
      <Link
        to={"/user/allorders"}
        onClick={() => handleLinkClick("/user/allorders")}
      >
        <div
          className={`${
            userActiveLink === "/user/allorders" ? "active" : ""
          } admin-side-text `}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
            </svg>
          </div>
          Order Management
        </div>
      </Link>
      <Link
        to={"/user/favoriteproducts"}
        onClick={() => handleLinkClick("/user/favoriteproducts")}
      >
        <div
          className={`${
            userActiveLink === "/user/favoriteproducts" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z" />
            </svg>
          </div>
          Favorite Products
        </div>
      </Link>
      <Link
        to={"/user/personaladdresses"}
        onClick={() => handleLinkClick("/user/personaladdresses")}
      >
        <div
          className={`${
            userActiveLink === "/user/personaladdresses" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </div>
          Personal Addresses
        </div>
      </Link>
      <Link
        to={"/user/profile"}
        onClick={() => handleLinkClick("/user/profile")}
      >
        <div
          className={`${
            userActiveLink === "/user/profile" ? "active" : ""
          } admin-side-text`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </div>
          Profile
        </div>
      </Link>
    </div>
  );
};

export default UserSideBar;
