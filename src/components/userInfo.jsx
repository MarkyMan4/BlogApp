import React, { Component } from 'react';
import axios from 'axios';
import '../styles/userInfo.css';

class UserInfo extends Component {
    state = { 
        userId: this.props.match.params.userId,
        name: '',
        username: '',
        website: ''
     }
    render() { 
        // console.log(this.state.userId);

        return ( 
            <div className="row">
                <div className="col-md-4"></div>
                <div className="user-info-card card shadow text-center p-5 mt-5">
                    <h1>{this.state.name}</h1>
                    <hr />
                    <h3 className="mt-3">User Name</h3>
                    <p>{this.state.username}</p>
                    <h3>Website</h3>
                    <p>{this.state.website}</p>
                </div>
                <div className="col-md-4"></div>
            </div>
         );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.state.userId)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    username: res.data.username,
                    website: res.data.website
                })
            });
    }
}
 
export default UserInfo;