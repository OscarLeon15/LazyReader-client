import React from 'react'

export default class speechToText extends React.Component {
  render() {
    return (
      <div className="container has-text-centered	">
        <h1 className="has-text-grey-dark	has-text-weight-semibold is-size-4">
          Speech to Text
        </h1>
        <button className="button">Turn on Microphone</button>
      </div>
    )
  }
}
