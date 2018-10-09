import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import 'simple-line-icons/css/simple-line-icons.css';

import App from './App';
import NotFound from './NotFound';
import Login from './views/Login';
import ProjectRegister from './views/components/projects/ProjectRegister'
import Register from './views/UserRegister'
import Projects from './views/components/projects/Projects'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            <Route path="/project/register" exact={true} component={ProjectRegister} />
            <Route path="/projects" exact={true} component={Projects} />
            <Route path="*" component={NotFound} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();