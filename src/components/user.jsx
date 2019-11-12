import React, { Component } from "react";

class User extends Component {
  state = {};
  render() {
    return <div>{this.props.user}</div>;
  }
}

export default User;
