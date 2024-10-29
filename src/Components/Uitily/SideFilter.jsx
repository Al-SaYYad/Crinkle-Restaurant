import { Row } from "react-bootstrap";
import "../../Styles/sideFilter.css";
import { useState } from "react";

const SideFilter = () => {
  return (
    <div>
      <Row>
        <div className="main-filter">
          <h3 className="filter-title">Type</h3>
          <div className="contain-input">
            <input id="all" type="checkbox" value="" />
            <label htmlFor="all" className="filter-sub">
              All
            </label>
          </div>
          <div className="contain-input">
            <input id="paneer" type="checkbox" value="" />
            <label htmlFor="paneer" className="filter-sub">
              Paneer
            </label>
          </div>
          <div className="contain-input">
            <input id="grile" type="checkbox" value="" />
            <label htmlFor="grile" className="filter-sub">
              Grile
            </label>
          </div>
          <div className="contain-input">
            <input id="chikken" type="checkbox" value="" />
            <label htmlFor="chikken" className="filter-sub">
              Chikeen
            </label>
          </div>
          <div className="contain-input">
            <input id="meals" type="checkbox" value="" />
            <label htmlFor="meals" className="filter-sub">
              Meals
            </label>
          </div>
          <div className="contain-input">
            <input id="birger" type="checkbox" value="" />
            <label htmlFor="birger" className="filter-sub">
              Birger
            </label>
          </div>
          <h3 className="filter-title">Restrunt</h3>
          <div className="contain-input">
            <input id="more" type="checkbox" value="" />
            <label htmlFor="more" className="filter-sub">
              More
            </label>
          </div>
          <h3 className="filter-title">Price</h3>
          <div className="contain-input">
            <label>From</label>
            <input type="number" min={0} max={3000} minLength={0} />
            <label>To</label>
            <input type="number" min={0} max={3000} maxLength={5} />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
