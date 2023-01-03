import React from "react";
import Progress from "../Progress/Progress";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Progress</h3>
        <h4>Weight</h4>
        <Progress />
      </div>
      <div>
        <h4>Something</h4>
        <Progress />
      </div>
    </div>
  );
};

export default RightSide;
