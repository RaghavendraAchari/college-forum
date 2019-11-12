import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Query from "./components/query";
import News from "./components/news";
import LogInForm from "./components/logInForm";
import User from "./components/user";
import "./App.css";

class App extends Component {
  state = {
    user: ""
  };

  onLogin = user => {
    this.setState({ user });
  };

  renderLogInForm(props) {
    return (
      <LogInForm user={this.state.user} onLogin={this.onLogin} props={props} />
    );
  }

  render() {
    return (
      <div className="App">
        <NavBar loggedInUser={this.state.user} />
        <div className="container">
          <Switch>
            <Route path="/news" component={News} />
            <Route
              path="/login"
              render={props => this.renderLogInForm(props)}
            />
            <Route
              path="/user"
              render={() => {
                return <User user={this.state.user} />;
              }}
            />
            <Route path="/" component={Query} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
