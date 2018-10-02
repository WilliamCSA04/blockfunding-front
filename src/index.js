import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/404" component={NotFound} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();