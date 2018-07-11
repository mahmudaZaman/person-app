import React, { PureComponent } from 'react';

  class Comment extends PureComponent {

    render() {
    let comments = null;
    if(this.props.showComments === true){
        return this.props.comments.map(comment => (
            <div key={comment.id}>
                <p>{comment.name}</p>
                <p>{comment.body}</p>
                <p>{comment.email}</p>
                <br/>
            </div>
            ))
        }
        else {
            return <div>Loading...</div>
        }
    }
  }
    
  export default Comment;