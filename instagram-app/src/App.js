import React, { Component } from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  filterUserNames = e => {
    setState;
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar />
        <div className="App">
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
