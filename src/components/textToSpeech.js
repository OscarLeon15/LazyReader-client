import React from 'react'
import WatsonTextToSpeech from '../components/WatsonTextToSpeech'

export default class textToSpeech extends React.Component {
  render() {
    return (
      <div>
        <div className="container has-text-centered	">
          <h1 className="has-text-grey-dark	has-text-weight-semibold is-size-4">
            Text to Speech</h1>
          <WatsonTextToSpeech />
        </div>

      </div>
    )
  }
}
