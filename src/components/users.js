import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const URL_USERS = 'https://jsonplaceholder.typicode.com/users'

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
   this.getUsers();
  }

  getUsers = () => {
    fetch(URL_USERS)
      .then(response =>response.json()
      .then(users => { this.setState({ users });
      })
    );
  }

  render() {
    const userItems = this.state.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <Link to={`/users/${user.id}`}>Details</Link>
        </td>
      </tr>
    ))

    return (
      <div>
        <h4>User List</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userItems}
          </tbody>
        </table>
      </div>
    );
  }
}
  
export default Users;
  