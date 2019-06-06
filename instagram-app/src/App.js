import React, { Component } from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
// import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login";

// const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({ posts: dummyData });
    if (localStorage.getItem("username")) {
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      });
    }
  }

  render() {
    console.log(this.state.loggedIn);
    if (this.state.loggedIn === true) {
      return <PostsPage posts={this.state.posts} />;
    } else {
      return <Login />;
    }
  }
}

export default App;
