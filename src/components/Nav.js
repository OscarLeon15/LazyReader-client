import React from 'react'
import logo from "../img/logo.svg"
import { Switch, Route, NavLink } from "react-router-dom"
import Home from '../components/Home'
import Signup from "../components/user-pages/Signup"
import Login from '../components/user-pages/Login'
import textToSpeech from '../components/textToSpeech'
import speechToText from '../components/speechToText'
import textFromImage from '../components/textFromImage'

import CountriesList from '../components/CountriesList'
import axios from 'axios'
import Personal from '../components/Personal'

export default class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
      
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/checkuser`, { withCredentials: true })
      .then(responseFromTheBackend => {
        // console.log("User in APP.JS: ", responseFromTheBackend)
        const { userDoc } = responseFromTheBackend.data;
        this.syncCurrentUSer(userDoc);
      })
      .catch(err => console.log("Err while getting the user from the checkuser route: ", err))
  }

  syncCurrentUSer(user) {
    this.setState({ currentUser: user })
  }


  render() {
    return (
      <div>

        <nav className="navbar is-light" role="navigation" aria-label="main navigation">

          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item" >
              <img src={logo} width="152" height="28" alt="lazy reader logo" />
            </NavLink>

            <a href="https://#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start center-nav-text">
              <NavLink to="/textToSpeech" className="navbar-item" >
                Text-to-Speech
              </NavLink>
              <NavLink to="/speechToText" className="navbar-item">
                Speech-to-Text
              </NavLink>
              <NavLink to="/textFromImage" className="navbar-item">
                Text-from-Image
              </NavLink>
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

          <Route exact path="/textToSpeech" component={textToSpeech} />
          <Route exact path="/speechToText" component={speechToText} />
          <Route exact path="/textFromImage" component={textFromImage} />

          <Route exact path="/signup-page" render={() =>
            <Signup
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
            />
          } />

          <Route exact path="/login-page" render={() =>
            <Login
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
            />
          } />

          {/* Login component */}
          <Route exact path="/login-page" component={Login} />
          <Route exact path="/bleh" component={CountriesList} />
          <Route exact path="/personal" component={Personal} />
          
        </Switch>

      </div>


    )
  }
}