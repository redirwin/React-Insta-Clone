import React, { Component } from "react";

const withAuthenticate = PostsPage => Login =>
  class extends Component {
    constructor() {
      super();
      this.loggedIn = false;
    }

    render() {
      return (
        <>
          <PostsPage />
          <Login />
        </>
      );
    }
  };

export default withAuthenticate;
