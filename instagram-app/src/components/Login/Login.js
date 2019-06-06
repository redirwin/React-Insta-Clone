import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 30%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 5%;
  padding: 2%;
  border: 1px solid black;
  border-radius: 3px;
`;

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
      <Form onSubmit={e => this.login(e)}>
        <Input
          type="text"
          className="username-input"
          name="username"
          placeholder="User Name"
          value={this.state.username}
          onChange={e => this.manageLoginInput(e)}
        />
        <Input
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
      </Form>
    );
  }
}

export default Login;
