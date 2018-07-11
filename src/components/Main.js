import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './users';
import UserDetails from './userDetails';
// import Posts from './Posts';
import PostsUpd from './PostsUpd';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Users}/>
            <Route exact path='/users/:id' component={UserDetails}/>
            <Route exact path='/users/:userId/posts' component={PostsUpd}/>
        </Switch>
    </main>
    
)
  
export default Main;
  