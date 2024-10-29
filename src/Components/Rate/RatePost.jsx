import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../../Styles/ratePost.css";

const RatePost = ({ name, area }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="rate">
      <Row>
        <Col sm="12" className="myCol">
          <div className="rate-name">{name}</div>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
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
