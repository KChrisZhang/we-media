import React, { Component } from "react";
import "./App.scss";
import Store from "./Store.js";
import * as Processors from "./processors.js";

import appListData from "./mock/appListData.json";
import recomendData from "./mock/recomendData.json";
// import lookUpData from "./mock/lookUp.json";

import Spinner from "./components/Spinner/Spinner.js";
import ListCard from "./components/ListCard/ListCard.js";
import SearchInput from "./components/SearchInput/SearchInput.js";
import RecommendCard from "./components/RecommendCard/RecommendCard.js";

const APP_LIST = Processors.handleAppList(appListData["feed"]["entry"]);
const RECOMMEND_LIST = Processors.handleRecommendList(
  recomendData["feed"]["entry"]
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 10,
      appList: [],
      recommendList: [],
      isLoading: true,
      hasMoreAppList: true,
      searchValue: Store.getState()
    };
  }
  async getAppList() {
    let page = this.state.page;
    if (page > 10 || page < 1) {
      this.setState({ hasMoreAppList: false });
      return;
    }
    this.setState({ isLoading: true });
    const LIMIT = this.state.limit;
    let offset = (page - 1) * LIMIT;
    const list = await APP_LIST.slice(offset, offset + LIMIT);
    const result = this.state.appList.concat(list);
    this.setState({
      appList: result,
      page: page + 1,
      isLoading: false
    });
  }
  getRecommendList() {
    this.setState({
      recommendList: RECOMMEND_LIST
    });
  }
  async componentDidMount() {
    this.getAppList();
    this.getRecommendList();

    Store.subscribe(() => {
      this.setState({
        searchValue: Store.getState()
      });
      // refresh recommend section, app list
    });

    let timerId = null;
    const self = this;
    const wrapper = this.refs.wrapper;
    const SCREEN_HEIGHT = window.screen.height;

    window.addEventListener("scroll", function() {
      if (self.state.isLoading || !self.state.hasMoreAppList) return;
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        let top = wrapper.getBoundingClientRect().top;
        if (top && top < SCREEN_HEIGHT) {
          self.getAppList();
        }
      }, 50);
    });
  }
  render() {
    const recommendList = this.state.recommendList.map((item, index) => {
      return <RecommendCard key={index} info={item} />;
    });
    const appList = this.state.appList.map((item, index) => {
      return <ListCard key={index} index={index} info={item} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <SearchInput />
        </header>
        <section className="App-recommend">
          <h2 className="App-recommend-title">推介</h2>
          <ul className="App-recommend-list">{recommendList}</ul>
        </section>
        <ul className="App-list" id="app-list">
          {appList}
        </ul>
        {this.state.hasMoreAppList && (
          <div className="App-load-more" ref="wrapper">
            <Spinner />
          </div>
        )}
        {!this.state.hasMoreAppList && (
          <div className="App-load-more">数据已全部加载完毕。</div>
        )}
        <footer className="App-footer">Copyright 2008 Apple Inc.</footer>
      </div>
    );
  }
}

export default App;
