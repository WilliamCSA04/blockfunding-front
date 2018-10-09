import React, { Component } from 'react';
import {
    NavItem,
    NavLink,
} from 'reactstrap';

class HeaderNotLoggedItens extends Component {
    render() {
        return (
            <React.Fragment>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/register">Register</NavLink>
                </NavItem>
            </React.Fragment>
        );
    }
}

export default HeaderNotLoggedItens;