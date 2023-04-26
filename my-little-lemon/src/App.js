import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import Header from  './Components/Header.js';
import NavBar from './Components/NavBar.js';
import Main from './Components/Main'
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs.js'

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Header/>
      <Main/>
      <AboutUs/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
