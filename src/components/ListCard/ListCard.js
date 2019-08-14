import React, { Component } from "react";
import "./ListCard.scss";

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
            <div className="item-stars">
              {this.props.info.stars.length > 0 &&
                this.props.info.stars.map((item, index) => {
                  return (
                    <img
                      className="item-star-active"
                      key={index}
                      src="assets/star_active.png"
                      alt="assets/star_active.png"
                    />
                  );
                })}
            </div>
            ({this.props.info.comments})
          </div>
        </div>
      </li>
    );
  }
}

export default ListCard;
