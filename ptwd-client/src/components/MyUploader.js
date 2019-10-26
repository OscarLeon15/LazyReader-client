
import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios'

class MyUploader extends React.Component {

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
    console.log(status, meta, file)
  }

  // receives array of files that are done uploading when submit button is clicked
  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())

    // e.preventDefault();

    let blah = new FormData();

    blah.append('theImage', this.state.file)

    axios.post('http://localhost:5000/testing', blah)

      // router.post(req, res, next, uplaodCloud.single('theImage') ,()=>{

      // })


      .then(responseFromTheBackend => {

      })
      .catch(err => console.log("error from inside BLAH", err))

  }

  render() {
    return (
      <Dropzone
        getUploadParams={this.getUploadParams}
        onChangeStatus={this.handleChangeStatus}
        onSubmit={this.handleSubmit}
        accept="image/*,audio/*,video/*"
      />
    )
  }

}

export default MyUploader