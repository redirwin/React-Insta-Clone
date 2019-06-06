import React, { Component } from "react";

const withAuthenticate = PostsPage =>
  class extends Component {
    constructor(props) {
      super(props);
      this.loggedIn = false;
    }

    render() {
      return (
        <div className="container">
          <PostsPage />
        </div>
      );
    }
  };

export default withAuthenticate;
