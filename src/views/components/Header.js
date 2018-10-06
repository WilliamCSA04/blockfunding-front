import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import HeaderLoggedItens from './HeaderLoggedItens';
import HeaderNotLoggedItens from './HeaderNotLoggedItens';

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

    links = () => {
        const isLogged = sessionStorage.userCredentials !== undefined
        if (isLogged) {
            return (
                <HeaderLoggedItens />
            )
        } else {
            return (
                <HeaderNotLoggedItens />
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