import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class HeaderLoggedItens extends Component {
    render() {
        return (
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
        );
    }
}

export default HeaderLoggedItens;