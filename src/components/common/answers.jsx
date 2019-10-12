import React, { Component } from "react";

class Answers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { answers } = this.props;
    return (
      <div>
        {answers.map(ans => {
          return (
            <div key={ans.answeredBy}>
              <ul>
                <li>
                  By : {ans.answeredBy}
                  <div className="m-1 p-1">
                    <i>{ans.answer}</i>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Answers;
