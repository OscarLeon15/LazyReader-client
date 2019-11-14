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


// !!! HELP===> Below is the info from a file called 'server.js' - in the example, this sits in the root of the front end - assuming this is because the example did not have a separate backed - so need to add these configs to our backe end
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
// }

// app.use(express.static(__dirname + '/static'));
// app.use(cors())

// // token endpoints
// // **Warning**: these endpoints should probably be guarded with additional authentication & authorization for production use

// // speech to text token endpoint
// var sttAuthService = new watson.AuthorizationV1(
//   Object.assign(
//     {
//       username: 'apikey', // or hard-code credentials here
//       password: 'nFJBB-fw6hnqWPktdl-On5q7W2M9AwVslf0ReE5gHAAa'
//     },
//     vcapServices.getCredentials('speech_to_text') // pulls credentials from environment in bluemix, otherwise returns {}
//   )
// );
// app.use('/api/speech-to-text/token', function (req, res) {
//   sttAuthService.getToken(
//     {
//       url: watson.SpeechToTextV1.URL
//     },
//     function (err, token) {
//       if (err) {
//         console.log('Error retrieving token: ', err);
//         res.status(500).send('Error retrieving token');
//         return;
//       }
//       res.send(token);
//     }
//   );
// });

// const port = process.env.PORT || process.env.VCAP_APP_PORT || 3002;
// app.listen(port, function () {
//   console.log('Example IBM Watson Speech JS SDK client app & token server live at http://localhost:%s/', port);
// });

// // Chrome requires https to access the user's microphone unless it's a localhost url so
// // this sets up a basic server on port 3001 using an included self-signed certificate
// // note: this is not suitable for production use
// // however bluemix automatically adds https support at https://<myapp>.mybluemix.net
// if (!process.env.VCAP_SERVICES) {
//   const fs = require('fs');
//   const https = require('https');
//   const HTTPS_PORT = 3001;

//   const options = {
//     key: fs.readFileSync(__dirname + '/keys/localhost.pem'),
//     cert: fs.readFileSync(__dirname + '/keys/localhost.cert')
//   };
//   https.createServer(options, app).listen(HTTPS_PORT, function () {
//     console.log('Secure server live at https://localhost:%s/', HTTPS_PORT);
//   });
// }
