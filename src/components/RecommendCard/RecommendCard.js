import React, { Component } from "react";
import "./RecommendCard.scss";

class RecommendCard extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
  }
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
