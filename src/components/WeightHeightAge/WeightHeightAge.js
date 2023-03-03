import React from "react";
import "./WeightHeightAge.css";

const WeightHeightAge = () => {
  return (
    <div>
      <div className="weight-height-age-div">
        <div>
          <h3>
            <small className="number">75</small>
            <small className="number-text">kg</small>
            <p>Weight</p>
          </h3>
        </div>
        <div>
          <h3>
            <small className="number">6.5</small> <p>Height</p>
          </h3>
        </div>
        <div>
          <h3>
            <small className="number">25</small>
            <small className="number-text">yrs</small>
            <p>Age</p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WeightHeightAge;
