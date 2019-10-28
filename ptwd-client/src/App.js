import React from 'react';
import './App.css';
// import axios from "axios";
// import { Switch, Route, NavLink } from "react-router-dom";
// import Signup from "./components/user-pages/Signup";
// import CountriesList from "./components/CountriesList";
// import Home from "./components/Home";
// import Login from './components/user-pages/Login';

// import MyUploader from "./components/MyUploader"
import Nav from "./components/Nav"
import 'react-bulma-components/dist/react-bulma-components.min.css';



export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  // componentDidMount() {

  //   console.log(process.env.REACT_APP_OCR)
  //   axios.get("http://localhost:3000/api/checkuser", { withCredentials: true })
  //     .then(responseFromTheBackend => {
  //       console.log("User in APP.JS: ", responseFromTheBackend)
  //       const { userDoc } = responseFromTheBackend.data;
  //       this.syncCurrentUSer(userDoc);
  //     })
  //     .catch(err => console.log("Err while getting the user from the checkuser route: ", err))
  // }

  syncCurrentUSer(user) {
    this.setState({ currentUser: user })
  }



  render() {
    // console.log("the state in APPJS: ", this.state);
    return (

      <div >
        <Nav />
      </div>

    )
  }
}