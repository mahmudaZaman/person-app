import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
const URL_USERS = 'https://jsonplaceholder.typicode.com/users'

class Users extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      users: []
    }
  }

  componentDidMount() {
    fetch(URL_USERS).then(response =>
      response.json().then(users => {
        setTimeout(() => this.setState({ loading: false, users }), 1000);
      })
    );
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {this.state.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/${user.id}`}>Details</Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      </BrowserRouter>
    );
  }
}
  
export default Users;
  