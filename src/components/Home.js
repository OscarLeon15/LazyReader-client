import React from "react"
import { NavLink } from "react-router-dom"


export default class Home extends React.Component {

    render() {
        return (
            <div>




                <div className="hero is-primary is-bold is-widescreen is-fullheight">
                    <div className="container ">
                        <h1 className="title has-text-centered">Try Our Awesome Conversion Tools!</h1>
                        <div className="columns">
                            <div className="column">
                                <div className="card is-rounded">
                                    <div className="card-content has-text-centered">
                                        <p className="title">
                                            Text -to- Speech
                                        </p>
                                        <i className="icon is-large">
                                            <i className="fas fa-heading fa-3x"></i>
                                        </i>
                                        <hr />
                                        <p className="subtitle">
                                            Type or paste your text, <br />
                                            receive an audio file to listen to.
                                        </p>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <span>
                                                <NavLink to="/textToSpeech">
                                                    Convert Text-to-Speech
                                    </NavLink>
                                            </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <div className="card-content has-text-centered">
                                        <p className="title">
                                            Speech -to- Text
                                        </p>
                                        <i className="icon is-large">
                                            <i className="far fa-comment-alt fa-3x"></i>
                                        </i>
                                        <hr />
                                        <p className="subtitle">
                                            Enable your browser's microphone, speak your content, receive a text file.
                                        </p>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <span>
                                                <NavLink to="/speechToText">
                                                    Convert Speech-to-Text
                                    </NavLink>
                                            </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <div className="card-content has-text-centered">
                                        <p className="title">
                                            Image -to- Text
                                        </p>
                                        <i className="icon is-large">
                                            <i className="far fa-file-image fa-3x"></i>
                                        </i>
                                        <hr />
                                        <p className="subtitle">
                                            Upload an image containing text, <br />
                                            receive a text file.
                                        </p>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <span>
                                                <NavLink to="/imageToText">
                                                    Convert Image-to-Text
                                    </NavLink>
                                            </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container is-widescreen is-light">
                        <nav className="level is-mobile">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Tweets</p>
                                    <p className="title">3,456</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Following</p>
                                    <p className="title">123</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Followers</p>
                                    <p className="title">456K</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Likes</p>
                                    <p className="title">789</p>
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>



            </div>
        )
    }
}