import React, { Component } from "react";

const withAuthenticate = PostsPage => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
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
        return <PostsPage />;
      } else {
        return <Login />;
      }
    }
  };

export default withAuthenticate;
