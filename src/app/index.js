import React from 'react';
import { Typography, Button } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home, Account, SignOut, SignIn, NoPage} from 'pages/';

import {Sidebar} from '../components';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/signOut" component={SignOut} />
            <Route path="/signIn" component={SignIn} />
            <Route component={NoPage} />
        </Switch>
    </Router>
);

export default App;