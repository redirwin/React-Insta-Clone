import React, { Component } from "react";
import App from "../../App";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  manageLoginInput = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    const usernameInput = this.state.username;
    localStorage.setItem("username", usernameInput);
    window.location.reload();

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form onSubmit={e => this.login(e)}>
        <input
          type="text"
          className="username-input"
          name="username"
          placeholder="User Name"
          value={this.state.username}
          onChange={e => this.manageLoginInput(e)}
        />
        <input
          type="text"
          className="password-input"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.manageLoginInput(e)}
        />
        <button className="login-submit-button" type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
