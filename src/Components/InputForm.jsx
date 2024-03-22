// InputForm.js
import React, { useState } from "react";
import "./../Styles/styles.css";

const InputForm = ({ onSetTargetDate, showForm }) => {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  const handleDateChange = (e) => {
    setDateInput(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTimeInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const maxDate = new Date(now.getTime() + 99 * 24 * 60 * 60 * 1000); // 99 days from now

    const selectedDate = new Date(`${dateInput}T${timeInput}`);
    if (selectedDate < now) {
      alert("Please select a future date and time.");
      return;
    }

    if (selectedDate > maxDate) {
      alert("Maximum countdown duration is 99 days.");
      return;
    }

    onSetTargetDate(selectedDate);
  };

  return (
    <form
      className={showForm ? "input-form" : "input-form hidden"} // Use classnames based on showForm state
      onSubmit={handleSubmit}
    >
      <input
        type="date"
        value={dateInput}
        onChange={handleDateChange}
        required
        min={new Date().toISOString().split("T")[0]} // Set min date to today
        className="form-input"
      />
      <input
        type="time"
        value={timeInput}
        onChange={handleTimeChange}
        required
        className="form-input"
      />
      <button type="submit" className="form-button">
        Set Countdown
      </button>
    </form>
  );
};

export default InputForm;
