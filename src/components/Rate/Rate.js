import React, { Component } from "react";
import "./Rate.scss";

class Rate extends Component {
  render() {
    let list = [];
    for (let i = 0; i < Number(this.props.stars); i++) {
      list.push(i);
    }
    const elements = list.map((item, index) => {
      return (
        <img
          className="Rate-star-active"
          key={index}
          src="assets/star_active.png"
          alt="assets/star_active.png"
        />
      );
    });
    return <div className="Rate">{elements}</div>;
  }
}

export default Rate;
