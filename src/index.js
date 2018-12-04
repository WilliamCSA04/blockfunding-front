import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import 'simple-line-icons/css/simple-line-icons.css';

import Account from './views/components/account/Account';
import Header from './views/components/header/Header';
import Footer from './views/components/footer/Footer';
import NotFound from './NotFound';
import Login from './views/Login';
import ProjectRegister from './views/components/project/ProjectRegister'
import Register from './views/components/users/UserRegister'
import Projects from './views/components/projects/Projects'
import ProjectDetail from './views/components/project/ProjectDetail'
import WalletRegister from './views/components/wallet/Wallet'
import Home from './views/components/home/Home';

ReactDOM.render(
    <React.Fragment>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/account" exact={true} component={Account} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/register" exact={true} component={Register} />
                <Route path="/project/register" exact={true} component={ProjectRegister} />
                <Route path="/project/:id" exact={true} component={ProjectDetail} />
                <Route path="/projects" exact={true} component={Projects} />
                <Route path="/wallet/register" exact={true} component={WalletRegister} />
                <Route path="*" component={NotFound} />
            </Switch>
        </ BrowserRouter>
        <Footer />
    </React.Fragment>

    , document.getElementById('root'));
registerServiceWorker();