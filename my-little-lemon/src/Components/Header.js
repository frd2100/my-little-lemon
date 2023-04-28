import React  from 'react';
import  '../App.css'

class Header extends React.Component {
    render() {
      const { toggleBookingPage } = this.props;

      return <header id="home">
        <h1>Litte Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="buttonHeader" onClick={toggleBookingPage} onClose={toggleBookingPage} >Reserve a Table!</button>
      </header>;
    }
  }
export default Header;
