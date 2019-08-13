import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SearchInput from "./components/SearchInput";
import ListCard from "./components/ListCard";
import RecommendCard from "./components/RecommendCard";

function App() {
  return (
    <div className="App">
      <SearchInput />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        <ListCard />
        <RecommendCard />
      </ul>
    </div>
  );
}

export default App;
