import React, { useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import Modal from "react-modal";
import "./BookingForm.css";
import fetchAPI from "./FetchApi.js"
Modal.setAppElement("#root");

const BookingPage = ({ toggleBookingPage }) => {

  const initializeTimes = () => {
    const today = new Date().toISOString().slice(0, 10);
    return fetchAPI(today)
      .then(response => response.json())
      .then(data => data.availableTimes)
      .catch(error => console.error(error));
  };

  const [availableTimes, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE":
        // Filter the available times based on the selected date
        const selectedDate = action.payload;
        const filteredTimes = initializeTimes().filter((time) => {
          const dateTime = new Date(`${selectedDate}T${time}:00`);
          return dateTime > new Date();
        });
        return filteredTimes;
      default:
        return state;
    }
  }, initializeTimes());

  const [data, setData] = useState([]);

  useEffect((date) => {
    fetchAPI(date)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Modal
      isOpen={true}
      onRequestClose={toggleBookingPage}
      id="booking-page"
      style={{
        content: {
          backgroundColor: "#495e57",
          borderRadius: "8px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "600px",
          padding: "40px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1000",
        },
      }}
    >
      <button onClick={toggleBookingPage} className="close-button">
        X
      </button>
      <h1 className="header">Welcome to the booking page</h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm
        exit={toggleBookingPage}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
      <p>We look forward to seeing you!</p>
    </Modal>
  );
};

export default BookingPage;

