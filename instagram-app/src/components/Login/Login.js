import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  login = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <input
          type="text"
          className="username-input"
          name="username"
          placeholder="User Name"
          value={this.state.username}
        />
        <input
          type="text"
          className="password-input"
          name="password"
          placeholder="Password"
          value={this.state.password}
        />
        <button className="login-submit-button" type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
