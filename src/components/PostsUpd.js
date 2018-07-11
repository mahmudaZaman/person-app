import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from "./Comment"
class PostsUpd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            showComments: false,
            buttonTitle: "Show Comments"
        }
    }

    componentDidMount() {
        this.loadUserPost();
        // this.getUserComment();
    }

    loadUserPost = () => {
        let userId = this.props.match.params.userId;
        //https://jsonplaceholder.typicode.com/users/1/posts
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json()
                .then(posts => {
                    this.setState({ posts });
                    console.log("posts", posts);
                })
            );
    }

    showCommentList = () => {
        if (this.state.showComments) {
            this.setState({ ...this.state, showComments: false });
        }
        else {
            const userId = this.props.match.params.userId;
            fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
                .then(response => response.json()
                    .then(comments => {
                        const newState = { comments };
                        // this.setState({ comments });
                        const doesShow = this.state.showComments;
                        // this.setState({ showComments: !doesShow });
                        newState.showComments = !doesShow;
                        if (doesShow === true) {
                            // this.setState({ buttonTitle: "show Comments" });
                            newState.buttonTitle = "show Comments"
                        }
                        if (doesShow === false) {
                            // this.setState({ buttonTitle: "hide Comments" });
                            newState.buttonTitle = "hide Comments"
                        }
                        this.setState({ ...newState });
                        console.log("comments", comments);
                    })
                );
            console.log("clicked")
        }
    };

    render() {
        const posts = <div>
            {this.state.posts.map(post => (
                <div key={post.id}>
                    <p><b>{post.title}</b></p>
                    <p>{post.body}</p>
                    <br />
                </div>
            ))}
        </div>

        return (
            <div>
                <h4>Posts</h4>
                <Link to='/'>go to user list</Link>
                {posts}
                <br />
                <button onClick={this.showCommentList}>{this.state.buttonTitle}</button>
                <br />
                <Comment comments={this.state.comments} showComments={this.state.showComments}></Comment>
            </div>
        );
    }
}

export default PostsUpd;