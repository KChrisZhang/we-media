import React from "react";
import "./App.css";

import ListCard from "./components/ListCard/ListCard.js";
import SearchInput from "./components/SearchInput/SearchInput.js";
import RecommendCard from "./components/RecommendCard/RecommendCard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
      </header>
      <section className="App-recommend">
        <h2 className="App-recommend-title">推介</h2>
        <ul className="App-recommend-list">
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
        </ul>
      </section>
      <ul className="App-list">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </ul>
    </div>
  );
}

export default App;
