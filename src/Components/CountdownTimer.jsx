import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft = { days, hours, minutes, seconds };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-timer">
      <div className="timer-content">
        <div className="timer-box">
          <span className="timer-value">{timeLeft.days}</span>
          <span className="timer-label">Days</span>
        </div>
        <div className="timer-box">
          <span className="timer-value">{timeLeft.hours}</span>
          <span className="timer-label">Hours</span>
        </div>
        <div className="timer-box">
          <span className="timer-value">{timeLeft.minutes}</span>
          <span className="timer-label">Minutes</span>
        </div>
        <div className="timer-box">
          <span className="timer-value">{timeLeft.seconds}</span>
          <span className="timer-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
