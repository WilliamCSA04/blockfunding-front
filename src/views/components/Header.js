import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/" className="text-white">Blockfunding</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/login" className="text-white">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/register" className="text-white">Registrar</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;