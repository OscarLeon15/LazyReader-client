import React from 'react';
import Dropzone from 'react-dropzone';

export default class Drop extends React.Component {

  constructor() {
    super()
    this.state = {
      image: String
    }
  }

  seePreview = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
 

    this.setState({
      img: URL.createObjectURL(e.target.files[0])
    })
  }

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

  render() {
    const maxSize = 1048576;
    console.log(this.state.img);
    const { image } = this.state
    return (
      <div className="text-center mt-5 dropzone">
        <Dropzone
          onDrop={this.onDrop}
          accept="image/png, 
                  image/jpg, 
                  image/gif, 
                  application/pdf"
          minSize={0}
          maxSize={maxSize}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles }) => {
            const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
            return (
              <div {...getRootProps()}>
                <input {...getInputProps()} onChange={this.seePreview} />
                {!isDragActive && 'Click here or drop a file to upload!'}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && "File type not accepted, sorry!"}
                {isFileTooLarge && (
                  <div className="text-danger mt-2">
                    File is too large.
                </div>
                )}
                <br/>
                <img src={this.state.img} alt="Choose a file"></img>
              </div>
            )
          }
          }
        </Dropzone>

        <p>Acceptable file types: png, jpg, gif, & pdf.</p>
      </div>
    );
  }
}

