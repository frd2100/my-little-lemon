import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import Header from  './Components/Header.js';
import NavBar from './Components/NavBar.js';
import Main from './Components/Main'
import Footer from './Components/Footer';

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Header/>
      <Main/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
