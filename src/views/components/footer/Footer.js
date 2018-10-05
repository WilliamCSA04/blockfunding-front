import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './footer.sass'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: (new Date()).getFullYear()
        }
    }
    render() {
        return (
            <div class="footer-area text-center bg-white">
                <span> {this.state.date} Blockfunding </span>
            </div>
        );
    }
}

export default Footer;