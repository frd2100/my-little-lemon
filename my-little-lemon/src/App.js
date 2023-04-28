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

  const toggleBP = () => {
    setShowBookingPage(!showBookingPage);
  };

  return (
    <ChakraProvider>
      {showBookingPage && <BookingPage toggleBookingPage={toggleBP} />}
      <NavBar toggleBookingPage={toggleBP} />
      <Header toggleBookingPage={toggleBP} />
      <Main />
      <AboutUs />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
