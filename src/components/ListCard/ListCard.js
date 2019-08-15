import React, { Component } from "react";
import "./ListCard.scss";
import Rate from "../Rate/Rate.js";

class ListCard extends Component {
  render() {
    return (
      <li className="List-card">
        <span className="item-index">{Number(this.props.index) + 1}</span>
        <img
          className="item-logo"
          src={this.props.info.image}
          alt={this.props.info.image}
        />
        <div className="item-info">
          <h3 className="item-name">{this.props.info.name}</h3>
          <p className="item-category">{this.props.info.category}</p>
          <div className="item-rate">
            <Rate stars={this.props.info.stars} />({this.props.info.comments})
          </div>
        </div>
      </li>
    );
  }
}

export default ListCard;
