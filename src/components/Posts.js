import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  class Posts extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
        comments: [],
        showComments: false,
        buttonTitle: "Show Comments"
      }
    }

    componentDidMount() {
        this.getUserPost();
        this.getUserComment();
    }
    
    getUserPost = () => {
        let userId = this.props.match.params.userId;
        //https://jsonplaceholder.typicode.com/users/1/posts
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response =>response.json()
            .then(posts => { this.setState({ posts });
            console.log("posts", posts);
            })
        );
    }

    getUserComment = () => {
        let postId = this.props.match.params.userId;
        //https://jsonplaceholder.typicode.com/posts/11/comments
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response =>response.json()
            .then(comments => { this.setState({ comments });
            console.log("comments", comments);
            })
        );
    }

    showCommentList = () => {
        console.log("clicked")
        const doesShow = this.state.showComments;
        this.setState({showComments:!doesShow });
        if(doesShow === true){
            this.setState({buttonTitle:"show Comments" });
        }
        if(doesShow === false){
            this.setState({buttonTitle:"hide Comments" });
        }
    };

    render() {
    let comments = null;
    if(this.state.showComments === true){
        comments = <div>
                    {this.state.comments.map(comment => (
                        <div key={comment.id}>
                            <p>{comment.name}</p>
                            <p>{comment.body}</p>
                            <p>{comment.email}</p>
                            <br/>
                        </div>
                        ))}
                    </div>
                }

    const posts = <div>
                    {this.state.posts.map(post => (
                        <div key={post.id}>
                            <p><b>{post.title}</b></p>
                            <p>{post.body}</p>
                            <br/>
                        </div>
                    ))}
                </div>

    return (
        <div>
            <h4>Posts</h4>
            <Link to='/'>go to user list</Link>
            {posts}
            <br/>
            <button onClick={this.showCommentList}>{this.state.buttonTitle}</button>
            <br/>
            {comments}
        </div>
        );
    }
  }
    
  export default Posts;