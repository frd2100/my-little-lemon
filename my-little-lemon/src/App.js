import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import MetaTags from 'react-meta-tags';
import Header from  './Header';
import NavBar from './Components/NavBar.js';
import Main from './Main'
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
