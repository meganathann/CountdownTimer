// TimerControls.js
import React from "react";
import "./../Styles/styles.css";

const TimerControls = ({ onStopTimer, showStopButton }) => {
  return (
    <div
      className={showStopButton ? "timer-controls" : "timer-controls hidden"}
    >
      {" "}
      <button onClick={onStopTimer} className="form-button">
        Stop Timer
      </button>{" "}
    </div>
  );
};

export default TimerControls;
