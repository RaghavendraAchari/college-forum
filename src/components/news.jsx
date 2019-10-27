import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

class News extends Component {
  state = {
    news: [
      {
        id: "1",
        title: "title 1",
        details: "News in detail...."
      },
      {
        id: "2",
        title: "title 2",
        details: "News in detail...."
      },
      {
        id: "3",
        title: "title 3",
        details: "News in detail...."
      },
      {
        id: "4",
        title: "title 4",
        details: "News in detail...."
      }
    ]
  };

  renderNewsList = () => {
    return (
      <div className="row">
        {this.state.news.map(n => {
          return (
            <div
              className="col-sm-12 m-1 p-2"
              key={n.id}
              style={{ borderRadius: "0px" }}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{n.title}</h5>

                  <p className="card-text">{n.details}</p>
                  <button
                    onClick={() => {
                      this.props.history.push("/news/" + n.id);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  renderNews = props => {
    const id = props.match.params.id;
    console.log(id);
    const newsDetails = this.state.news.find(obj => obj.id === id);
    console.log(newsDetails);

    return (
      <div>
        <div>{newsDetails.title}</div>
        <div>{newsDetails.details}</div>
        <br />
        <div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.history.goBack()}
          >
            Go back
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>News</h1>
        <Switch>
          <Route path="/news/:id/" render={props => this.renderNews(props)} />
          <Route path="/news/" render={this.renderNewsList} />
        </Switch>
      </div>
    );
  }
}

export default News;
