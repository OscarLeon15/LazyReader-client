import React from 'react';
import './App.css';
import axios from "axios";
import Nav from "./components/Nav"
import 'react-bulma-components/dist/react-bulma-components.min.css'



export default class App extends React.Component {


  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER}/api/checkuser`, { withCredentials: true })
      .then(responseFromTheBackend => {
        const { userDoc } = responseFromTheBackend.data;
        this.syncCurrentUSer(userDoc);
      })
      .catch(err => console.log("Err while getting the user from the checkuser route: ", err))
  }

  syncCurrentUSer(user) {
    this.setState({ currentUser: user })
  }


  render() {
    // console.log("the state in APPJS: ", this.state);
    return (

      <div >
        <Nav />


        {/* <footer class="footer">
          <div class="content has-text-centered">
            <p>
              &copy; 2019 <strong>LazyReader</strong> is a project by <a href="https://github.com/dustygaron">Dusty Garon</a> and
            <a href="http://#"> Oscar Leon</a>.
            </p>
          </div>
        </footer> */}
      </div>

    )
  }
}