import React, { Component } from "react";
import "./SearchInput.scss";
import Store from "../../Store.js";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Store.getState()
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    const self = this;
    const value = event.target.value;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      self.setState({ value });
      Store.dispatch({
        type: "UPDATE_SEARCH",
        value
      });
      clearTimeout(self.timer);
      self.timer = null;
    }, 100);
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
