import React from "react";
import "./ExerciseDetails.css";

const ExerciseDetails = (props) => {
  const newArray = props.sendTime;

  //   const { time } = props.sendTime[0];
  return (
    <div>
      <h1>Exercise details</h1>
      <div>
        <div className="exercise-details-div">
          <h2>Exercise Time</h2>
          <p>000 Seconds</p>
        </div>
        <div className="exercise-details-div">
          <h2>Break Time</h2>
          {newArray.map((time) => (
            <p key={time.id}>{time.time}</p>
          ))}
          <p>000 Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
