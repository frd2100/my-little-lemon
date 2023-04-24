import React, { Component } from "react";
import './Card.css';

/*
1. Card Class
2. Defaults
*/

// 1. Card Class /////////////////////////////////////////////
function CardImage(props) {
    const isImageURL = props.image;
    // If an image was passed:
    if (isImageURL) {
      return (
        <div className="styleImage">
          <img
            style={{ width: props.width + "px", marginTop: "-8%" }}
            src={props.image}
          />
        </div>
      );
    }
    return null;
  }

  function CardContent(props) {
    return (
      <div className="styleCardContent">
        <p className="styleCardTitle">{props.title}</p>
        <p className="styleLocationLabel">{props.description}</p>
        <p className="styleDescription">{props.price}</p>
      </div>
    );
  }

  export default class Card extends React.Component {
    render() {
      return (
        <div style={{ width: this.props.width + "px" }}>
          <div className="styleCard">
            <CardImage image={this.props.image} width={this.props.width} />
            <CardContent
              title={this.props.title}
              location={this.props.description}
              description={this.props.price}
            />
          </div>
        </div>
      );
    }
  }

  // 2. Defaults /////////////////////////////////////////////
  Card.defaultProps = {
    width: 350,
    title: "Template - Card Title",
    location: "Location label",
    description: "Template description textbox"
  };
