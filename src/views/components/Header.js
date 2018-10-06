import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout = () => {
        sessionStorage.removeItem("userCredentials");
    }

    links = () => {
        const isLogged = sessionStorage.userCredentials !== undefined
        if (isLogged) {
            return (
                <React.Fragment>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            <i className="fa fa-user"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/dashboard">
                                Dashboard
                            </DropdownItem>
                            <DropdownItem href="/account">
                                My Account
                            </DropdownItem>
                            <DropdownItem onClick={this.logout}>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/register">Registrar</NavLink>
                    </NavItem>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <Navbar className="fixed-top" color="white" light expand="md">
                <Container>
                    <NavbarBrand href="/">Blockfunding</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/projects">Projects</NavLink>
                            </NavItem>
                            {this.links()}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;