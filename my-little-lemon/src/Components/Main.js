import React, { Component } from "react";
import Card from "./Card.js"
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h3>Order for delivery!</h3>
        </div>
        <div className="mainClassButtons">
          <button className="mainButton">Lunch</button>
          <button className="mainButton">Mains</button>
          <button className="mainButton">Dessert</button>
          <button className="mainButton">Specials</button>
        </div>
        <div>

        </div>
      </main>
    );
  }
}
export default Main;
