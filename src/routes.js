import React from 'react';
import TestContainer from './container/testContainer';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const PageRouter = () => {
    return(
        <Router>
            <Route exact path='/' component={TestContainer} />
        </Router>
    );
}

export default PageRouter;