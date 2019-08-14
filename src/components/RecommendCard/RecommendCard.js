import React, { Component } from "react";
import "./RecommendCard.scss";

class RecommendCard extends Component {
  render() {
    return (
      <li className="Recommend-card">
        <img
          className="Recommend-logo"
          src={this.props.info.image}
          alt={this.props.info.image}
        />
        <p className="Recommend-name">{this.props.info.name}</p>
        <p className="Recommend-category">{this.props.info.category}</p>
      </li>
    );
  }
}

export default RecommendCard;
