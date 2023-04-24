import React, { Component }  from 'react';
import  '../App.css'

class Header extends React.Component {
    render() {
      return <header>
        <h1>Litte Lemon</h1>
        <h2>Westeros</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="buttonHeader">Reserve a Table!</button>
      </header>;
    }
  }
export default Header;