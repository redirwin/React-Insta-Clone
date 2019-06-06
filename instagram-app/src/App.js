import React, { Component } from "react";
import "./App.scss";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  render() {
    return (
      <>
        {/*  
      <ComponentFromWithAuthenticate /> 
    */}

        <Login />
      </>
    );
  }
}

export default App;
