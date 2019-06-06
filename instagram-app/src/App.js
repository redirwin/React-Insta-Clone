import React, { Component } from "react";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/authentication/withAuthenticate";

const ComponentFromWithAuthenticate = () => {
  return <PostsPage />;
};

class App extends Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
