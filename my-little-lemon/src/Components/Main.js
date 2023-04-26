import React, { Component } from "react";
import Card from "./Card.js";
import "./Main.css";
import bruschetta from "../Images/bruschetta.jpg"
import swordFish from "../Images/swordFish.jpg"
import greekSalad from "../Images/greekSalad.jpg"

const cards = [
  {
    image: bruschetta,
    title: "Bruschetta",
    description: "grilled bread rubbed with garlic and topped with olive oil and salt.",
    price: "$ 10.00",
  },
  {
    image: greekSalad,
    title: "Greek Salad",
    description: "traditional Greek salad consists of a few simple ingredients: tomatoes, cucumbers, bell peppers, red onions, olives, and blocks of creamy feta cheese.",
    price: "$20.00",
  },
  {
    image: swordFish,
    title: "Grilled Sword Fish",
    description: "Grilled Sword Fish served with Salad",
    price: "$ 30.00",
  },
];

class Main extends React.Component {
  render() {
    return (
      <main id="menu" className='main'>
        <div>
          <h3>Order for delivery!</h3>
        </div>
        <div className="mainClassButtons">
          <button className="mainButton">Lunch</button>
          <button className="mainButton">Mains</button>
          <button className="mainButton">Dessert</button>
          <button className="mainButton">Specials</button>
        </div>
        <div className="cardContainer">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
            />
          ))}
        </div>
      </main>
    );
  }
}
export default Main;
