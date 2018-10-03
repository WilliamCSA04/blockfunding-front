import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import NotFound from './NotFound';
import Login from './views/Login';
import ProjectRegister from './views/ProjectRegister'
import Register from './views/UserRegister'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            <Route path="/project/register" exact={true} component={ProjectRegister} />
            <Route path="*" component={NotFound} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();