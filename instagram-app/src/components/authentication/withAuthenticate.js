import React, { Component } from "react";

const withAuthenticate = PostsPage => Login =>
  class extends Component {
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
