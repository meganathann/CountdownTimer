// App.js

import React, { useState, useEffect } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import CountdownTimer from "./Components/CountdownTimer";
import TimerControls from "./Components/TimerControls";

function App() {
  const [targetDate, setTargetDate] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [countdownOver, setCountdownOver] = useState(false);

  useEffect(() => {
    if (targetDate) {
      const timer = setInterval(() => {
        const now = new Date();
        if (now >= targetDate) {
          setCountdownOver(true);
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate]);

  const handleSetTargetDate = (date) => {
    setTargetDate(date);
    setShowForm(false);
    setCountdownOver(false);
  };

  const handleStopTimer = () => {
    setTargetDate(null);
    setShowForm(true);
    setCountdownOver(false);
  };

  const handleRestartTimer = () => {
    setCountdownOver(false);
    setShowForm(true);
  };

  return (
    <div className="app gradient-bg">
      {" "}
      <h1>Countdown Timer</h1>
      <InputForm onSetTargetDate={handleSetTargetDate} showForm={showForm} />
      {(showForm || targetDate) && <CountdownTimer targetDate={targetDate} />}
      {countdownOver && (
        <div className="countdown-over">
          <p>Countdown is over! What's the next adventure?</p>
          <button className="restart-timer-button" onClick={handleRestartTimer}>
            Restart Timer
          </button>
        </div>
      )}
      {!showForm && !countdownOver && (
        <TimerControls
          onStopTimer={handleStopTimer}
          showStopButton={!showForm}
        />
      )}
    </div>
  );
}

export default App;
