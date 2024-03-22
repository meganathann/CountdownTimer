// TimerControls.js
import React from "react";
import "./../Styles/styles.css";

const TimerControls = ({ onStopTimer, showStopButton }) => {
  return (
    <div
      className={showStopButton ? "timer-controls" : "timer-controls hidden"}
    >
      {" "}
      {/* Use classnames based on showStopButton state */}
      <button onClick={onStopTimer} className="form-button">
        Stop Timer
      </button>{" "}
      {/* Apply the same button styles */}
    </div>
  );
};

export default TimerControls;
