import './App.css';
import MetaTags from 'react-meta-tags';

function App() {
  return (
    <>
      <MetaTags>
        <title>My little lemon</title>
        <meta name='title' content="Little Lemon FP"/>
        <meta name="author" content="Federico Parrinello"/>
        <meta name="language" content="english"/>
        <meta name="description" content="site of the restaurant little lemon"/>
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta name="robots" content="index,follow" />
        <meta name="google"/>
        <meta name="googlebot" content="notranslate"/>
        <meta name="copyright" content="Copyright 2022"/>
      </MetaTags>
      Homepage
      <header></header>
      <nav></nav>
      <main></main>
      <footer/>
    </>
  );
}

export default App;
