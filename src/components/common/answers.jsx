import React, { Component } from "react";

class Answers extends Component {
  render() {
    const { answers } = this.props;
    return (
      <div>
        {answers.length === 0 && <p>No answers yet.</p>}
        {answers.length !== 0 && (
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
        )}
      </div>
    );
  }
}

export default Answers;
