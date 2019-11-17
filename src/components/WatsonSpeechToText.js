<<<<<<< HEAD
// import React, { Component } from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {}
//   }
//   onListenClick() {

//     fetch('http://localhost:3005/speech-to-text/token')
//       .then(function (response) {
//         return response.text();
//       }).then((token) => {
//         console.log('token is', token)
//         var stream = recognizeMic({
//           token: token,
//           objectMode: true, // send objects instead of text
//           extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
//           format: false // optional - performs basic formatting on the results such as capitals an periods
//         });
//         stream.on('data', (data) => {
//           this.setState({
//             text: data.alternatives[0].transcript
//           })
//         });
//         stream.on('error', function (err) {
//           console.log(err);
//           console.log("======>>>>>" + this.state.text);

//         });
//         document.querySelector('#stop').onclick = stream.stop.bind(stream);
//       }).catch(function (error) {
//         console.log(error);
//       });
//   }
//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.onListenClick.bind(this)}>Listen to microphone</button>
//         <div style={{ fontSize: '40px' }}>{this.state.text}</div>

//       </div>
//     );
//   }
=======
import React from 'react'


export default class WatsonSpeechToText extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  onListenClick() {

    fetch('http://localhost:3002/api/speech-to-text/token')
      .then(function (response) {
        return response.text();
      }).then((token) => {
        console.log('token is', token)
        var stream = recognizeMic({
          token: token,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
        });
        stream.on('data', (data) => {
          this.setState({
            text: data.alternatives[0].transcript
          })
        });
        stream.on('error', function (err) {
          console.log(err);
        });
        document.querySelector('#stop').onclick = stream.stop.bind(stream);
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onListenClick.bind(this)}>Listen to microphone</button>
        <div style={{ fontSize: '40px' }}>{this.state.text}</div>

      </div>
    );
  }

}


// !!! HELP===> Below is the info from a file called 'server.js' - in the example, 
//this sits in the root of the front end - assuming this is because the example did not 
//have a separate backed - so need to add these configs to our backe end
// ------------------------------

// 'use strict';

// /* eslint-env node, es6 */

// const express = require('express');
// const app = express();
// const watson = require('watson-developer-cloud');
// const vcapServices = require('vcap_services');
// const cors = require('cors')

// // on bluemix, enable rate-limiting and force https
// if (process.env.VCAP_SERVICES) {
//   // enable rate-limiting
//   const RateLimit = require('express-rate-limit');
//   app.enable('trust proxy'); // required to work properly behind Bluemix's reverse proxy

//   const limiter = new RateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // limit each IP to 100 requests per windowMs
//     delayMs: 0 // disable delaying - full speed until the max limit is reached
//   });

//   //  apply to /api/*
//   app.use('/api/', limiter);

//   // force https - microphone access requires https in Chrome and possibly other browsers
//   // (*.mybluemix.net domains all have built-in https support)
//   const secure = require('express-secure-only');
//   app.use(secure());
>>>>>>> fa3259d3b6b4e684fc1b3d2e3e6ac63d3f1c300a
// }

// export default App;
