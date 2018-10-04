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

class Header extends Component {

    render() {
        return (
            <Navbar color="dark" light expand="md">
                <Container>
                    <NavbarBrand href="/" className="text-white">Blockfunding</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login" className="text-white">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register" className="text-white">Registrar</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;