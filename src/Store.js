import { createStore } from "redux";

const reducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return action.value;
    default:
      return state;
  }
};

export default createStore(reducer);
