import React, { Component } from "react";
import "./ListCard.scss";

class ListCard extends Component {
  render() {
    return (
      <li className="List-card">
        <span className="item-index">1</span>
        <div className="item-logo" />
        <div className="item-info">
          <h3 className="name">Facebook</h3>
          <p>导航</p>
          <div />
        </div>
      </li>
    );
  }
}

export default ListCard;
