import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
    // loggedIn: false
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
    // console.log(usernameInput);
    localStorage.setItem("username", usernameInput);

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
