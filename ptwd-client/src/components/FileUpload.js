import React from 'react';
import axios from "axios"

class FileUpload extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      image: String
    }
  }

  updateValueField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  seePreview = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);

    this.setState({
      img: URL.createObjectURL(e.target.files[0]),
      imgFile: e.target.files[0]

    })
  }



  // callOCR = (e) => {
  //   e.preventDefault();
  //   // alert(this.state.img)

  //   // let sanatizeURL = this.state.img.subtr(5)

  //   axios.post(`https://api.ocr.space/parse/imageurl?apikey=${process.env.REACT_APP_OCR}&url=https://i.ytimg.com/vi/anVweXDcxhA/maxresdefault.jpg`, { withCredentials: true })
  //     .then(responseFromTheBackend => {
  //       console.log("User in APP.JS: ", responseFromTheBackend)
  //       const { userDoc } = responseFromTheBackend.data;
  //       this.syncCurrentUSer(userDoc);
  //     })
  //     .catch(err => console.log("Err while getting the user from the checkuser route: ", err))

  // }

  render() {

    console.log(this.state.img);

    const { image } = this.state
    return (
      <h2>
        <h2>Sign Up</h2>
        <form onSubmit={this.callOCR}>

          <label>Image </label>
          <input type="file" name="image" value={image} onChange={this.seePreview}></input>
          <img src={this.state.img} alt="Choose a file"></img>
          <button>Submit</button>

        </form>
      </h2>
    )
  }

}

export default FileUpload;