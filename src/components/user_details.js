import React, { Component } from "react";
import axios from "axios";

class UserDetails extends Component {

    state = {
        user: {}
    }


    componentDidMount(){
        let current_user = this.props.match.params.user_id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${current_user}`)
        .then(response => {
            this.setState({
                user:response.data
            })
        })
    }
    

    render() {
        return (
            <div>
                <h1>user details</h1>
                <h2>{this.state.user.name}</h2>
            </div>
        )
    }
}

export default UserDetails;