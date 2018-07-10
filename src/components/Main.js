import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './users';
import UserDetails from './userDetails';
import Posts from './Posts';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Users}/>
            <Route exact path='/users/:id' component={UserDetails}/>
            <Route exact path='/users/posts/:userId' component={Posts}/>
        </Switch>
    </main>
    
)
  
export default Main;
  