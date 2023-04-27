import "./App.css";
import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./Components/Header.js";
import NavBar from "./Components/NavBar.js";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs.js";
import BookingPage from "./Components/BookingPage.js";

function App() {
  const [showBookingPage, setShowBookingPage] = useState(false);

  const toggleBookingPage = () => {
    setShowBookingPage(!showBookingPage);
  };

  return (
    <ChakraProvider>
      {showBookingPage && <BookingPage />}
      <NavBar toggleBookingPage={toggleBookingPage} />
      <Header />
      <Main />
      <AboutUs />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
