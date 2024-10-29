import { Col } from "react-bootstrap";
import "../../Styles/productCard.css";
import Card from "react-bootstrap/Card";
import card1 from "../../Images/card-9.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import RatePost from "../Rate/RatePost";
import notify from "../Functions/Notifications";

const ProductCard = () => {
  let icon1 =
    "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z";
  let icon2 =
    "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z";

  const heartPlus = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6l0-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
    </svg>
  );
  const heartMinus = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6l0-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L409.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L432 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </svg>
  );
  const [iconClassName, setIconClassName] = useState(icon1);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIconClick = () => {
    setIsFavorited(!isFavorited);
    setIconClassName(isFavorited ? icon1 : icon2);
    if (isFavorited === false) {
      notify(
        <Link to={"/user/favoriteproducts"} className="heart-plus">
          Added to {heartPlus}
        </Link>,
        "Success"
      );
    } else {
      notify(
        <Link to={""} className="heart-plus">
          Removed from {heartMinus}
        </Link>,
        "Error"
      );
    }
  };
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="d-flex justify-content-center">
      <Card className="card" style={{ width: "18rem" }}>
        <Link to={"/product/:id"}>
          <Card.Img loading="lazy" variant="top" src={card1} />
        </Link>
        <Card.Body>
          <div className="card-head">
            <div className="favorite">
              <svg
                className={isFavorited ? "fa-beat" : ""}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                onClick={handleIconClick}
                fill={isFavorited ? "red" : "currentColor"} // تغيير اللون بناءً على الحالة
              >
                <path d={iconClassName} />
              </svg>
            </div>
            <div className="price">
              <h5>EGB: 500</h5>
            </div>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
          <div className="foot">
            <RatePost />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
