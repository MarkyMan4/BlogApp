import React, { Component } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
import '../styles/post.css';

class Post extends Component {
    state = { 
        postId: this.props.postId,
        title: this.props.title,
        body: this.props.body,
        userId: this.props.userId,
        userName: ''
     }

    render() { 
        return ( 
            <div className="card m-3 p-3 shadow">
                <h3><Link to={"post/" + this.state.postId} className="card-title">{this.state.title}</Link></h3>
                <Link to={"users/" + this.state.userId} className="text-muted user-name">{this.state.userName}</Link>
                <hr />
                <p className="card-body">{this.state.body}</p>
            </div>
         );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.state.userId)
            .then(res => {
                this.setState({userName: res.data.name})
            });
    }
}
 
export default Post;