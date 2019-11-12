import React from "react";
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
                hello this is the personal profile page!!
            </div>
        )
    }
}