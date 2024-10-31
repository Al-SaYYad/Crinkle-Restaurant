import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../../Styles/ratePost.css";
import confetti from "canvas-confetti";
import CelebrationComponent from "../Functions/CelebrationComponent";

const RatePost = ({ name, area }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [position, setPosition] = useState(null);
  const [celebrationTriggered, setCelebrationTriggered] = useState(false);

  const starPathOne = "⭐";
  const scalar = 1.5;
  const star = confetti.shapeFromText({ text: starPathOne });

  const handleEvent = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log("Launching confetti at:", x, y); // تأكد من أن القيم ليست undefined
    setPosition({ x, y });

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { x: x / window.innerWidth, y: y / window.innerHeight },
      startVelocity: 20,
      shapes: [star],
      scalar,
    });
  };

  const allClick = (currentRating, event) => {
    // تحديث التقييم
    setRating(currentRating);
    handleEvent(event); // إطلاق الكونفيتي
    setCelebrationTriggered(true); // تفعيل الكونفيتي
  };

  return (
    <div className="rate">
      <Row>
        <Col sm="12" className="myCol">
          <div className="rate-name">{name}</div>
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  checked={rating === currentRating} // تعيين التقييم الحالي
                  onClick={(e) => allClick(currentRating, e)} // استخدم onClick
                />
                <FaStar
                  className="star"
                  color={
                    currentRating <= (hover || rating) ? "#FACA15" : "#D1D5DB"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          {position && celebrationTriggered && (
            <CelebrationComponent x={position.x} y={position.y} />
          )}
        </Col>
      </Row>
      {area ? (
        <Row className="myRow">
          <Col className="myCol">
            <textarea
              className="input-form-area"
              rows={"3"}
              cols="20"
              placeholder="Write a comment"
            />
          </Col>
          <div className="add-comment">
            <button className="btn-comment">Add Comment</button>
          </div>
        </Row>
      ) : null}
    </div>
  );
};

export default RatePost;
