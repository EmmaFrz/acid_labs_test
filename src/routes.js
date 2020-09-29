import React from 'react';
import HomeContainer from './container/home/homeContainer';
import PostContainer from './container/post/postContainer';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const PageRouter = () => {
    return(
        <Router>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/post/:id' component={PostContainer} />
        </Router>
    );
}

export default PageRouter;