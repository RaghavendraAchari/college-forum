import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import LogInForm from "./components/logInForm";
import NavBar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={LogInForm} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
