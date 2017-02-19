import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './App'
import Chat from './containers/Chat'
import Test from './containers/Create'


export default (
    <Router>
        <Route path="/" component={Main} history={browserHistory}>
            <IndexRoute component={Test} />
            <Route path="chat" component={Chat} />
        </Route>
    </Router>
)