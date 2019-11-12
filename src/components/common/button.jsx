import React, { Component } from "react";

class ShowHideButton extends Component {
  state = {
    toShow: true
  };
  render() {
    return (
      <button
        onClick={e => {
          this.props.onClick(e);
          const toShow = !this.state.toShow;
          this.setState({ toShow });
        }}
        className="btn btn-danger btn-sm m-1"
      >
        {this.state.toShow ? "Show" : "Hide"}
      </button>
    );
  }
}

export default ShowHideButton;
