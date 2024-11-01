import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/footer.css";
import logo from "../../Images/logo.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");
  window.onscroll = () => {
    window.scrollY > 750
      ? document.querySelector("#scroll-top").classList.add("show")
      : document.querySelector("#scroll-top").classList.remove("show");
  };
  // تعيين الحالة بناءً على التخزين عند التحميل
  useEffect(() => {
    const storedActiveLink = sessionStorage.getItem("activeLink") || "/";
    setActiveLink(storedActiveLink);
  }, []);
  const handleLinkClick = (link) => {
    setActiveLink(link);
    sessionStorage.setItem("activeLink", link); // تخزين الحالة
  };
  return (
    <div className="main-footer">
      <Container>
        <Row className="my-rows">
          <Col sm="7">
            <div className="footer-head">
              <img src={logo} />
              <h2>
                Is Chicken Burger And Fried Chicken Restaurant Based In Egypt.
              </h2>
            </div>
          </Col>
          <Col sm="5" className="links">
            <Link
              className={`${activeLink === "/Crinkle-Restaurant/" ? "active-link" : ""}`}
              to="/Crinkle-Restaurant/"
              onClick={() => handleLinkClick("/Crinkle-Restaurant/")}
            >
              Home
            </Link>
            <Link
              className={`${activeLink === "/menu" ? "active-link" : ""}`}
              to="/menu"
              onClick={() => handleLinkClick("/menu")}
            >
              Menu
            </Link>
            <Link
              className={`${activeLink === "/cart" ? "active-link" : ""}`}
              to="/cart"
              onClick={() => handleLinkClick("/cart")}
            >
              Cart
            </Link>
            <Link
              className={`${activeLink === "/aboutus" ? "active-link" : ""}`}
              to="/aboutus"
              onClick={() => handleLinkClick("/aboutus")}
            >
              About us
            </Link>
            <Link
              className={`${
                activeLink === "/ourbranches" ? "active-link" : ""
              }`}
              to="/ourbranches"
              onClick={() => handleLinkClick("/ourbranches")}
            >
              Our Branches
            </Link>
            <Link
              className={`${
                activeLink === "/privacypolicy" ? "active-link" : ""
              }`}
              to="/privacypolicy"
              onClick={() => handleLinkClick("/privacypolicy")}
            >
              Privacy policy
            </Link>
            <Link
              className={`${activeLink === "/login" ? "active-link" : ""}`}
              to="/login"
              onClick={() => handleLinkClick("/login")}
            >
              Login
            </Link>
            <Link
              className={`${activeLink === "/register" ? "active-link" : ""}`}
              to="/signup"
              onClick={() => handleLinkClick("/signup")}
            >
              Signup
            </Link>
          </Col>
        </Row>
        <div className="contact">
          <p>Talk to us</p>
          <Link to="tel:15096">15096</Link>
        </div>
        <Row>
          <Col sm="12" className="footer-foot">
            <h5>© 2015 Crinkle Burger inc.</h5>
            <div className="links-icons">
              <div className="icon-container">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/CrinkleEgypt/"
                >
                  <svg
                    className="facebook-background"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </Link>
              </div>
              <div className="icon-container">
                <Link
                  target="_blank"
                  to="https://www.instagram.com/Crinkle.Egypt/"
                >
                  <svg
                    className="insta-background"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
              </div>
              <div className="icon-container">
                <Link target="_blank" to="https://www.tiktok.com/@crinkleegypt/">
                  <svg
                    className="tiktok-background"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                  </svg>
                </Link>
              </div>
              <div className="icon-container">
                <Link target="_blank" to="https://x.com/crinkleegypt/">
                  <svg
                    className="x-background"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <span onClick={() => window.scrollTo({ top: 0 })} id="scroll-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
        </svg>
        To Top
      </span>
    </div>
  );
};

export default Footer;
