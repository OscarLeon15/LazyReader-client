
import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios'
// import file from '../img/file.svg'
// import ocrSpaceApi from 'ocr-space-api';
// require('dotenv').config()


export default class MyUploader extends React.Component {

  constructor() {
    super();
    this.state = {
      file: null
    }
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

    // Start Cloudinary -----------------------
    let formData = new FormData();
    formData.append('theImage', this.state.file)

    axios.post(`${process.env.REACT_APP_API_URL}/testing`,{withCredentials: true}, formData)
      .then(responseFromTheBackend => {
        // responseFromTheBackend.data is the image url
        console.log(responseFromTheBackend.data)

        // let options = {
        //   apikey: process.env.REACT_APP_OCR,
        //   language: 'eng',
        //   imageFormat: 'image/png', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
        //   isOverlayRequired: true
        // };

        // Image file to upload
        // let imageFilePath = responseFromTheBackend.data;

        // Run and wait the result
        // ocrSpaceApi.parseImageFromLocalFile(imageFilePath, options)
        //   .then((parsedResults) => {
        //     console.log(parsedResults)
        //     console.log('parsedText: \n', parsedResults.parsedText);
        //     console.log('ocrParsedResults: \n', parsedResults.ocrParsedResult);
        //   }).catch((err) => {
        //     console.log('ERROR:', err);
        //   });

        // Example API Request -----------------------------
        var https = require('https');

        var options = {
          'method': 'GET',
          'hostname': 'api.ocr.space',
          'path': `/parse/imageurl?apikey=86be69917788957&url=${responseFromTheBackend.data}&language=chs&isOverlayRequired=true`,
          'headers': {
            'apikey': '86be69917788957'
          }
        };

        var req = https.request(options, function (res) {
          var chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
          });

          res.on("error", function (error) {
            console.error(error);
          });
        });

        var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"language\"\r\n\r\neng\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"isOverlayRequired\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"url\"\r\n\r\nhttp://dl.a9t9.com/ocrbenchmark/eng.png\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"iscreatesearchablepdf\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"issearchablepdfhidetextlayer\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

        req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

        req.write(postData);

        req.end();
        // -----------------------------  

      })

      .catch(err => console.log("error from inside Form Data", err))
  }

  render() {
    return (
      <div className="container has-text-centered	">
        <h1 className="has-text-grey-dark	has-text-weight-semibold is-size-4">The best app to convert academic journals to audio.</h1>
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

}

{/* <Image publicId="file-converter-project-3/filename.filetype" >
</Image> */}