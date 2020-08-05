import React, { Component } from 'react';

class Post extends Component {
    state = { 
        title: this.props.title,
        body: this.props.body
     }
    render() { 
        return ( 
            <div className="card m-3 p-3 shadow">
                <h3 className="card-title">{this.state.title}</h3>
                <hr />
                <p className="card-body">{this.state.body}</p>
            </div>
         );
    }
}
 
export default Post;