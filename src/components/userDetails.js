import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  class UserDetails extends Component {
    constructor(props){
      super(props);
      this.state = {
        userDetails: {}
      }
    }

    componentDidMount() {
      this.getUserDetails();
    }
    
    getUserDetails = () => {
      let userId = this.props.match.params.id;
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response =>response.json()
        .then(userDetails => { this.setState({ userDetails });
        })
      );
    }
  
    render() {
      return (
        <div>
          <h4>User Details</h4>
          <Link to='/'>go to user list</Link>
          <ul>
            <li>{this.state.userDetails.name}</li>
            <li>{this.state.userDetails.username}</li>
            <li>{this.state.userDetails.email}</li>
            <li>{this.state.userDetails.phone}</li>
            <li>{this.state.userDetails.website}</li>
            <li>
              <Link to={`/users/posts/${this.state.userDetails.id}`}>Posts</Link>
            </li>
          </ul>
        </div>
      );
    }
  }
    
  export default UserDetails;