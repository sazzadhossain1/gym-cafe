import React from "react";
import "./SideSection.css";
import logo from "../../images/sazzad.jpg";
const SideSection = () => {
  return (
    <div>
      <div className="honer-div">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h4>Sazzad Hossain Tomal</h4>
          <p>Location Bangladesh</p>
        </div>
      </div>
      {/*  */}

      <div className="weight-height-age-div">
        <div>
          <h3>
            75<small>kg</small>
            <p>Weight</p>
          </h3>
        </div>
        <div>
          <h3>
            6.5 <p>Height</p>
          </h3>
        </div>
        <div>
          <h3>
            25<small>yrs</small>
            <p>Age</p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
