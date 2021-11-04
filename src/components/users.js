import React, { Component } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';


class Users extends Component {

    state = {
        users: []
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users:response.data
            })
        })
    }
    

    render() {
        return (
            <div>
                <h1>users</h1>
                <table>
                    <tr >
                        <th>username</th>
                        <th>email</th>
                        <th>company name</th>
                    </tr>
                    {
                        this.state.users.map(user => {
                            return (
                                <tr>
                                    <td key={user.id}>
                                        <NavLink exact to={'/users/'+user.id}>{user.name}</NavLink>
                                    </td>
                                    <td key={user.id}>{user.email}</td>
                                    <td key={user.id}>{user.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Users;