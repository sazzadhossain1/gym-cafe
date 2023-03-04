import React from "react";
import "./SideSection.css";
import logo from "../../images/sazzad.jpg";
import WeightHeightAge from "../WeightHeightAge/WeightHeightAge";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
const SideSection = (props) => {
  //   console.log(props.cat);
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
      <ExerciseDetails sendTime={props.cat}></ExerciseDetails>
    </div>
  );
};

export default SideSection;
