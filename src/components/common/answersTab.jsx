import React, { Component } from "react";
import Answers from "./answers";
import Input from "./input";

class AnswersTab extends Component {
  render() {
    const { query, hidden, inputParams, onClick } = this.props;
    const { name, id, value, onChange } = inputParams;
    return (
      <div id={query.id + "-show-btn"} hidden={hidden}>
        <Input onChange={e => onChange(e)} value={value} name={name} id={id} />
        <button
          onClick={() => {
            onClick(query.id);
          }}
          className="btn btn-primary btn-sm"
        >
          Submit
        </button>

        <Answers answers={query.answers} />
      </div>
    );
  }
}

export default AnswersTab;
