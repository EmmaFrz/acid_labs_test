import React from 'react';
import HomeContainer from './container/home/homeContainer';
import PostContainer from './container/post/postContainer';
import NewPostContainer from './container/newPost/newPostContainer';
import UpdatePostContainer from './container/updatePost/updatePostContainer';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const PageRouter = () => {
    return(
        <Router>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/post/:id' component={PostContainer} />
            <Route exact path='/new' component={NewPostContainer} />
            <Route exact path='/update/:id' component={UpdatePostContainer} />
        </Router>
    );
}

export default PageRouter;