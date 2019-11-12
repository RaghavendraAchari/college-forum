import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  render() {
    const loggedInUser = this.props.loggedInUser;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/query" className="navbar-brand">
            College Forum
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/news">
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Queries
                </NavLink>
              </li>

              {loggedInUser === "" && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Log In
                  </NavLink>
                </li>
              )}
              {loggedInUser !== "" && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user">
                    {loggedInUser}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
