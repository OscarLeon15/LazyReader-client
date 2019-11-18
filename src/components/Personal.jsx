import React from "react";
import MyUploader from "../components/MyUploader"

// import axios from "axios";



export default class Personal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           allFiles: []
        }
    }

    avatar(){
        // console.log('my image')
        console.log(`${this.props.fullName._id}`)
        console.log(`number of files ${this.state.allFiles.length}`)
    }

    render(){
        return(
            <div>
                <nav></nav>
                <div>
                    <div>
                        {/* <img src="" alt=""/> */}
                        {/* <img src={`${this.props.responseFromTheBackend.data}`} alt="" className="avatarImg"/> */}
                    </div>
                    <div>
                        <div>
                            
                            <h2>current user name:  </h2>
                            {/* <h2>current user name: {this.props.currentUser.fullName} </h2> */}
                            <MyUploader />
                            <h1 className="fileText">{this.props.ocrParsedText}</h1>
                            <div>
                                <h2> File Name </h2>
                                <div className="fileText">

                                </div>
                            </div>

                        </div>
                        <div>number of files</div>
                    </div>
                </div>
            </div>
        )
    }
}