import React, { Component } from "react";
import "./SearchInput.scss";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({
      value: event.target.value
    });
    console.log("handleInput", this.state.value);
  }
  render() {
    return (
      <div className="Search-input">
        <input
          type="text"
          className="Search-content"
          placeholder="搜索"
          value={this.state.value}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default SearchInput;
