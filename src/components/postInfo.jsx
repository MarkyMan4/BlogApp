import React, { Component } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

class PostInfo extends Component {
    state = { 
        postId: this.props.match.params.postId,
        title: '',
        body: '',
        userId: '',
        userName: '',
        comments: []
     }
    render() { 
        return ( 
            <div>
                <div className="m-5">
                    <h1>{this.state.title}</h1>
                    <Link to={"../users/" + this.state.userId} className="text-muted user-name">{this.state.userName}</Link>
                    <p className="mt-4">{this.state.body}</p>
                </div>
                <hr />
                <div className="m-5">
                    <h4 className="mb-4">Comments</h4>
                    {this.state.comments.map(comment => 
                        <div key={comment.id} className="card p-4 m-3 shadow">
                            <h5 className="card-title">{comment.email}</h5>
                            <p>{comment.body}</p>
                        </div>
                    )}
                </div>
            </div>
         );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts?id=' + this.state.postId)
            .then(res => {
                const postData = res.data[0]
                this.setState({
                    title: postData.title,
                    body: postData.body,
                    userId: postData.userId
                })

                // nested request because this must be done after the userId is retrieved
                axios.get('https://jsonplaceholder.typicode.com/users/' + postData.userId)
                    .then(res => {
                        this.setState({userName: res.data.name})
                    })
            });
            
        // this request is not nested because the comments can be retrieved before the post info.
        // postId is passed as a prop so I already have that info at this point in the lifecycle
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.state.postId)
            .then(res => {
                this.setState({
                    comments: res.data
                })
            });
    }
}
 
export default PostInfo;