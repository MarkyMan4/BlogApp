import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Post from './components/post';
import UserInfo from './components/userInfo';
import PostInfo from './components/postInfo';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Blog</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/users" className="nav-link">Users</Link>
              </li> */}
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:userId" component={UserInfo} />
          <Route path="/post/:postId" component={PostInfo} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

class Home extends Component {
  state = { 
    posts: []
   }

  render() {
    return ( 
      <div className="m-5">
        {this.state.posts.map(post =>
          <Post key={post.id} title={post.title} body={post.body} userId={post.userId} postId={post.id} />
        )}
      </div>
     );
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({posts: res.data})
      });
  }
}

function About() {
  return <h2>About</h2>;
}
