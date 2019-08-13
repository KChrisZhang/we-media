import React, { Component } from "react";
import "./RecommendCard.scss";

class RecommendCard extends Component {
  render() {
    return (
      <li className="Recommend-card">
        <div className="Recommend-logo" />
        <p className="Recommend-name">name</p>
        <p className="Recommend-category">category</p>
      </li>
    );
  }
}

export default RecommendCard;
