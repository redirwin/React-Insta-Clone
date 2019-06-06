import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends Component {
  state = {
    posts: this.props.posts
  };

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
      <>
        <div className="app-container">
          <SearchBar
            filterPosts={this.filterPosts}
            searchInput={this.state.searchInput}
          />
          <div className="App">
            <PostContainer posts={this.state.posts} />
          </div>
        </div>
      </>
    );
  }
}

export default PostsPage;
