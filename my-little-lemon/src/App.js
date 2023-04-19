import './App.css';
import MetaTags from 'react-meta-tags';
import Header from  './Header';
import Nav from './Nav';
import Main from './Main'
import Footer from './Footer';
import littleLemonLogo from './Images/littleLemonLogo.png';

function App() {
  return (
    <>
      <MetaTags>
        <title>My little lemon</title>
        <image rel="littleLemonLogo" href="./Images/littleLemonLogo.png" />
        <meta name='title' content="Little Lemon FP"/>
        <meta name="author" content="Federico Parrinello"/>
        <meta name="language" content="english"/>
        <meta name="description" content="site of the restaurant little lemon"/>
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="./Images/littleLemonLogo" />
        <meta name="robots" content="index,follow" />
        <meta name="google"/>
        <meta name="googlebot" content="notranslate"/>
        <meta name="copyright" content="Copyright 2022"/>
      </MetaTags>
      Homepage
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
