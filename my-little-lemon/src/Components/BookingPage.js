import React from "react";
import BookingForm from "./BookingForm";
import Modal from "react-modal";


const BookingPage = () => {
  return (
    <Modal id="booking-page">
      <h1>Welcome to the booking page</h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm />
      <p>We look forward to seeing you!</p>
    </Modal>
  );
};

export default BookingPage;
