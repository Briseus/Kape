import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './containers/App'
import Chat from './containers/Chat'
import LandingPage from './containers/Landing'
import Channels from './Channels'

export default (
    <Router>
        <Route path="/" component={Main} history={browserHistory}>
            <IndexRoute component={LandingPage} />
            <Route path="chat" component={Channels} />
            <Route path="chat/:room" component={Chat}/>
        </Route>
    </Router>
)