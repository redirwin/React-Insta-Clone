import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
// import { Button } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    // console.log(this.state.posts);

    return (
      <div className="app-container">
        <Button color="danger">Test!</Button>
        <div className="App">
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
