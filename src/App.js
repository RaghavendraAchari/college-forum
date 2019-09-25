import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Query from "./components/query";
import News from "./components/news";
import LogInForm from "./components/logInForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/news" component={News} />
          <Route path="/login" component={LogInForm} />
          <Route path="/" component={Query} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
