import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  class Posts extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts:[]
      }
    }

    componentDidMount() {
        this.getUserPost();
    }
    
    getUserPost = () => {
    let userId = this.props.match.params.userId;
    //https://jsonplaceholder.typicode.com/users/1/posts
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response =>response.json()
        .then(posts => { this.setState({ posts });
        })
    );
    }

    render() {
      return (
        <div>
          <h4>Posts</h4>
          <Link to='/'>go to user list</Link>
          <div>
          {this.state.posts.map(post => (
            <tr key={post.id}>
              <td>{post.body}</td>
              <td>{post.title}</td>
            </tr>
          ))}
          </div>
        </div>
      );
    }
  }
    
  export default Posts;