import React from 'react'
import logo from "../img/logo.svg"
import { Switch, Route, NavLink } from "react-router-dom"
// import CountriesList from "./components/CountriesList"
import Home from '../components/Home'
import Signup from "../components/user-pages/Signup"
import Login from '../components/user-pages/Login'


export default class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  render() {
    return (
      <div>

        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item" >
              <img src={logo} width="152" height="28" alt="lazy reader logo" />
            </NavLink>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink to="/signup-page" className="button is-primary">
                    <strong>Sign up</strong>
                  </NavLink>
                  <NavLink to="/login-page" className="button is-light">
                    Log in
          </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup-page" render={() =>
            <Signup
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
            />
          } />
          {/* Login component */}
          <Route exact path="/login-page" component={Login} />
        </Switch>

      </div>


    )
  }
}