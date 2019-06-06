import React, { Component } from "react";

const withAuthenticate = PostsPage => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.loggedIn = false;
    }

    render() {
      if (this.state.loggedIn === true) {
        return <PostsPage posts={this.state.posts} />;
      } else {
        return <Login />;
      }
    }
  };

export default withAuthenticate;
