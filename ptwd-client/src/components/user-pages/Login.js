import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            message: null
        }
    }

    genericSync(event) {
        // console.log("what is: ", event.target.value)
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        // console.log("submitting form");
        event.preventDefault()

        axios.post(
            // route we are hitting in the backend
            "http://localhost:3000/api/login",
            // the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
            this.state,
            // secure sending
            { withCredentials: true }
        )
            .then(responseFromServer => {
                // console.log("response is:", responseFromServer);
                const { userDoc } = responseFromServer.data
                this.props.onUserChange(userDoc)
                alert('You are logged in.')
            })
            .catch(err => {
                // console.log("err: ", err.response)
                if (err.response.data) return this.setState({ message: err.response.data.message })
            })
    }

    render() {
        const { fullName, email, password } = this.state

        return (
            <div>



                <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                        <h1> Login </h1>


                        <form onSubmit={event => this.handleSubmit(event)} >
                            {/*----- FULL NAME -----*/}
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input
                                        className="input"
                                        value={fullName} // this.state.email
                                        onChange={event => this.genericSync(event)}
                                        type='text'
                                        name='fullName'
                                        placeholder='Full Name'
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fa fa-check"></i>
                                    </span>
                                </p>
                            </div>


                            {/*----- EMAIL -----*/}
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input
                                        className="input"
                                        value={email} // this.state.email
                                        onChange={event => this.genericSync(event)}
                                        type='email'
                                        name='email'
                                        placeholder='myname@email.com'
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fa fa-check"></i>
                                    </span>
                                </p>
                            </div>

                            {/*----- PASSWORD -----*/}
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input
                                        className="input"
                                        value={password} // this.state.password
                                        onChange={event => this.genericSync(event)}
                                        type='password'
                                        name='password'
                                        placeholder='***********'
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                </p>
                            </div>

                            {/*----- SUBMIT -----*/}
                            <div className="field">
                                <p className="control">
                                    <button className="button is-success">
                                        Login
                                </button>
                                </p>
                            </div>

                        </form>
                        {this.state.message && <div> {this.state.message} </div>}
                    </div>
                </div>

            </div >
        )
    }
}
