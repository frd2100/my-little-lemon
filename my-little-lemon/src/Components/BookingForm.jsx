import React, { useState, useReducer } from "react";
import "./BookingForm.css";

function bookingFormReducer(state, action) {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    default:
      return state;
  }
}

const BookingForm = ({ exit, availableTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const [bookingFormState, dispatch] = useReducer(bookingFormReducer, {
    date: "",
    time: "",
  });


  function handleDateChange(event) {
    dispatch({ type: "SET_DATE", payload: event.target.value });
  }

  function handleTimeChange(event) {
    dispatch({ type: "SET_TIME", payload: event.target.value });
  }

  const handleNumGuestsChange = (event) => {
    setNumGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const isDisabled = () => {
    if (!date && !time && !numGuests) {
      return true;
    }
    return false;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reservation submitted:", { date, time, numGuests, occasion });

    setDate("");
    setTime("");
    setNumGuests("");
    setOccasion("");
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleDateChange}
            value={date}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            value={time}
            name="time"
            onChange={handleTimeChange}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            placeholder="1"
            min="1"
            max="20"
            value={numGuests}
            onChange={handleNumGuestsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button
          className="buttonHeader"
          type="submit"
          disable={isDisabled().toString()}
          onClick={handleSubmit}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
