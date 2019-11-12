import React, { Component } from "react";
import "./query.css";
import AnswersTab from "./common/answersTab";
import Input from "./common/input";
import ShowHideButton from "./common/button";

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

    submittedAnswer: "",
    newQuery: ""
  };

  handleShow(event, query) {
    console.log(event);
    //var ele = ReactDOM.getElementById(query.id + "-show-btn");
    let ele = document.getElementById(query.id + "-show-btn");
    ele.hidden = !ele.hidden;
    console.log(query);
  }

  handleAnswer = e => {
    const answer = e.target.value;
    this.setState({ submittedAnswer: answer });
    console.log("Writing answer");
  };

  handleQuestion = e => {
    const query = e.target.value;
    this.setState({ newQuery: query });
    console.log("Writing query");
  };

  handleSubmit = id => {
    console.log("Answer submited");
    const queries = [...this.state.queries];
    let query = queries.find(q => q.id === id);
    query.answers.push({
      answeredBy: "xyz",
      answer: this.state.submittedAnswer
    });

    this.setState({ queries, submittedAnswer: "" });
  };

  handleQuestionSubmit = () => {
    const newQuery = this.state.newQuery;
    const newQueryObj = {
      id: "12ewdsfdwfwe" + newQuery.substring(0, newQuery.length / 2),
      title: newQuery,
      publisher: "Smith",
      answers: []
    };

    const queries = [newQueryObj, ...this.state.queries];
    this.setState({ queries });
  };

  render() {
    const { queries } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 m-1 p-2">
            <div className="card">
              <div className="card-body">
                <Input
                  name="newQuery"
                  id="newQuery"
                  label="I have something to ask.."
                  placeholder="Type your query"
                  onChange={this.handleQuestion}
                  value={this.state.newQuery}
                />
                <button
                  onClick={this.handleQuestionSubmit}
                  className="btn btn-danger btn-sm m-1"
                >
                  Ask Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <h1>Submitted Queries</h1>

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
                      <ShowHideButton
                        onClick={e => {
                          this.handleShow(e, query);
                        }}
                      />

                      <AnswersTab
                        query={query}
                        hidden="hidden"
                        inputParams={{
                          onChange: e => this.handleAnswer(e),
                          value: this.state.submittedAnswer,
                          name: "answer",
                          id: query.id + "submit-answer-input"
                        }}
                        onClick={() => this.handleSubmit(query.id)}
                      />
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
