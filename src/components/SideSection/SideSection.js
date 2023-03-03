import React from "react";
import "./SideSection.css";
import logo from "../../images/sazzad.jpg";
import WeightHeightAge from "../WeightHeightAge/WeightHeightAge";
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
      <WeightHeightAge></WeightHeightAge>
    </div>
  );
};

export default SideSection;
