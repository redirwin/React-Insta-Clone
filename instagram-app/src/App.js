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

  filterPosts = e => {
    e.preventDefault();
    // console.log("filtering posts!");
    this.setState({});
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar filterPosts={this.filterPosts} />
        <div className="App">
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
