
import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios'


// HELP ===> Trying to get 'test' from line 68 out of scope... how??? Can't return or set state. Also tried setting global as below... 
// After the OCR Api runs, 'test' contains the parsed text. Need to get this text to display on screen.



let test = ''

export default class MyUploader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // specify upload params and url for your files
  getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  // called every time a file's `status` changes
  handleChangeStatus = ({ meta, file }, status) => {
    this.setState({
      file: file
    })
    console.log(status, meta, file);
  }

  // receives array of files that are done uploading when submit button is clicked
  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())

    // Axios Call -----------------------
    let formData = new FormData();
    formData.append('theImage', this.state.file)
    // console.log("THIS STATE FILE=====>>>" + this.state.file)

    axios.post(`${process.env.REACT_APP_API_URL}/testing`, { withCredentials: true }, formData)
      .then(responseFromTheBackend => {

        // responseFromTheBackend.data is the image url
        console.log(responseFromTheBackend.data)

        // Example API Request -----------------------------
        let https = require('https');

        let options = {
          'method': 'GET',
          'hostname': 'api.ocr.space',
          'path': `/parse/imageurl?${process.env.REACT_APP_OCR}&url=${responseFromTheBackend.data}&isOverlayRequired=false`,
          'headers': {
            'apikey': '86be69917788957'
          }
        };

        let req = https.request(options, function (res) {
          let chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function (chunk) {
            let body = Buffer.concat(chunks);
            test = body.toString()
            // console.log(body.toString());
          });

          res.on("error", function (error) {
            console.error(error);
          });

        });

        let postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"language\"\r\n\r\neng\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"isOverlayRequired\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"url\"\r\n\r\nhttp://dl.a9t9.com/ocrbenchmark/eng.png\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"iscreatesearchablepdf\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"issearchablepdfhidetextlayer\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

        req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

        req.write(postData);

        req.end();

        // -----------------------------  
      })

      .catch(err => console.log("error from inside Form Data", err))

  }


  render() {
    return (
      <div className="container">
        {/* <img src={file} alt="file icon" /> */}
        <Dropzone
          getUploadParams={this.getUploadParams}
          onChangeStatus={this.handleChangeStatus}
          onSubmit={this.handleSubmit}
          accept=".png, .jpg, .jpeg, .pdf"
        />
      </div>
    )
  }
  // --------------------------------------------------------







}
