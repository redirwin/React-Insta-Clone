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

  filterPosts = (e, input) => {
    e.preventDefault();
    if (input) {
      this.setState({
        posts: dummyData.filter(data => data.username === input)
      });
    } else {
      this.setState({
        posts: dummyData
      });
    }
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar
          filterPosts={this.filterPosts}
          searchInput={this.state.searchInput}
        />
        <div className="App">
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
