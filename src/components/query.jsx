import React, { Component } from "react";
import "./query.css";
import Input from "./common/input";

class Query extends Component {
  state = {
    queries: [
      {
        id: "12ewdsfdwfwe",
        title: "Query 1",
        publisher: "Smith",
        answers: [
          {
            answer: "With great power comes great responsibility",
            answeredBy: "John"
          },
          {
            answer: "That's not correct.",
            answeredBy: "smith"
          }
        ]
      },
      {
        id: "12ewdsfdwfww",
        title: "Query 1",
        publisher: "Smith",
        answers: [
          {
            answer: "answer",
            answeredBy: "John"
          }
        ]
      },
      {
        id: "12ewdsfdwfwd",
        title: "Query 1",
        publisher: "Smith",
        answers: [
          {
            answer: "answer",
            answeredBy: "John"
          }
        ]
      }
    ],

    submittedAnswer: ""
  };

  handleShow(event, query) {
    // console.log(event);
    let ele = document.getElementById(query.id + "-show-btn");
    ele.hidden = !ele.hidden;
    // console.log(query);
  }

  handleAnswer = e => {
    const answer = e.target.value;
    this.setState({ submittedAnswer: answer });
    console.log("Writing answer");
  };

  handleSubmit = id => {
    console.log("Answer submited");
    const queries = [...this.state.queries];
    let query = queries.find(q => q.id === id);
    query.answers.push({
      answeredBy: "xyz",
      answer: this.state.submittedAnswer
    });

    this.setState({ queries });
  };
  render() {
    const { queries } = this.state;
    return (
      <div>
        <h1>Queries</h1>

        {queries.length && <p>There are {queries.length} queries.</p>}
        {queries.length === 0 && <p>There are no queries.</p>}

        <div className="row">
          {queries.length &&
            queries.map(query => {
              return (
                <div className="col-sm-12 m-1 p-2" key={query.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{query.title}</h5>

                      <p className="card-text">
                        Answers : {query.answers.length}
                      </p>
                      <button
                        onClick={e => this.handleShow(e, query)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        Show
                      </button>
                      <div id={query.id + "-show-btn"} hidden="hidden">
                        <Input
                          onChange={e => this.handleAnswer(e)}
                          value={this.state.submittedAnswer}
                          name="answer"
                          id={query.id + "submit-answer"}
                        />
                        <button
                          onClick={() => this.handleSubmit(query.id)}
                          className="btn btn-primary btn-sm"
                        >
                          Submit
                        </button>
                        {query.answers.map(ans => {
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
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Query;