import React from 'react';

class FileUpload extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: String,
      email: String,
      password: String,
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
      img: URL.createObjectURL(e.target.files[0])
    })
  }

  makeNewUser = (e) => {
    e.preventDefault();

  }

  render() {
    console.log(this.state.img);
    const { username, email, password, image } = this.state
    return (
      <section>
        <h2>Sign Up</h2>
        <form onSubmit={this.makeNewUser}>
          <label>Username: </label>
          <input type="text" name="username" value={username} onChange={this.updateValue}></input>
          <label>Email: </label>
          <input type="email" name="email" value={email} onChange={this.updateValue}></input>
          <label>Password </label>
          <input type="text" name="password" value={password} onChange={this.updateValueField}></input>
          <label>Image </label>
          <input type="file" name="image" value={image} onChange={this.seePreview}></input>
          <img src={this.state.img} alt="Choose a file"></img>
          <button>Submit</button>
        </form>
      </section>
    )
  }

}

export default FileUpload;