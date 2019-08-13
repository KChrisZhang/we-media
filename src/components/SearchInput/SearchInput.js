import React, { Component } from "react";
import "./SearchInput.scss";

class SearchInput extends Component {
  render() {
    return (
      <div className="Search-input">
        <input className="Search-content" placeholder="搜索" />
      </div>
    );
  }
}

export default SearchInput;
