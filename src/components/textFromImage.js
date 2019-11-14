import React from 'react'
import MyUploader from '../components/MyUploader'


export default class textFromImage extends React.Component {
  render() {
    return (
      <div>
        <div className="container has-text-centered	">
          <h1 className="has-text-grey-dark	has-text-weight-semibold is-size-4">
            Text from Image
            </h1>
        </div>
        <MyUploader />
      </div>
    )
  }
}
