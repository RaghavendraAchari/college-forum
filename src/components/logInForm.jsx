import React, { Component } from "react";
import Input from "./common/input";

class LogInForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleChange = ({ currentTarget: input }) => {
    const { account } = this.state;
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.props.history.push("/home");
    this.props.onLogin(this.state.account.username);
  };
  render() {
    const { account } = this.state;
    return (
      <div className="form">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            label="Username"
          />

          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            label="Password"
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
