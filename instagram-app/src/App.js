import React, { Component } from "react";
import "./App.scss";
// import dummyData from "./dummy-data";
// import PostContainer from "./components/PostContainer/PostContainer";
import PostsPage from "./components/PostContainer/PostsPage";
// import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return <PostsPage />;
  }
}

export default App;
