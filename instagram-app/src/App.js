import React from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
import withAuthenticate from "./components/authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
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
    return ComponentFromWithAuthenticate;
  }
}

export default App;
