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
        if(isLogged){
            return (
                <React.Fragment>
                    <NavItem>
                        <NavLink href="/project/register">Criar Projeto</NavLink>
                    </NavItem>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/projects">Projects</NavLink>
                    </NavItem>
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
                            {this.links()}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;