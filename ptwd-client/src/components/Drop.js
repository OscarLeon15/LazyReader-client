import React from 'react';
import Dropzone from 'react-dropzone'

export default class Drop extends React.Component {

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

  render() {
    return (
      <div className="text-center mt-5">
        <Dropzone onDrop={this.onDrop}
          onDrop={this.onDrop}
          accept="image/png, image/gif">
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {!isDragActive && 'Click here or drop a file to upload!'}
              {isDragActive && !isDragReject && "Drop it like it's hot!"}
              {isDragReject && "File type not accepted, sorry!"}
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}

