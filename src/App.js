import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Users from './components/users';
import UserDetails from './components/userDetails';


class App extends Component {
  render() {
    return (
        <div>
          <Users/>
          <BrowserRouter>
            <Route exact path='/users/:id' Component={UserDetails}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
