import React, { Component } from 'react';
import Register from '../../components/Register';
import { Button, CardBody, CardHeader, FormGroup, Input, Label, Form } from 'reactstrap';
import { create } from '../../../shared/actions/Wallet';

class WalletRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
        }
    }


    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onClick = (event) => {
        event.preventDefault();
        const user = JSON.parse(sessionStorage.userCredentials)
        const body = {
            name: this.state.name,
            description: this.state.description,
            owner: user.username,
            type: "PERSONAL"
        }
        create(body).then(({ data }) => {
            alert("Created");
        })
    }

    render() {
        return (
            <Register>
                <CardHeader>
                    <strong>Wallet</strong>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="Wallet">Wallet Name</Label>
                            <Input type="text" id="wallet" placeholder="Type a name to your wallet" name="name" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="vat">Wallet Description</Label>
                            <Input type="textarea" id="vat" placeholder="Describe your wallet" name="description" onChange={this.onChange} />
                        </FormGroup>
                        <div className="form-actions">
                            <Button type="submit" color="primary" onClick={this.onClick}>Register Wallet</Button>
                        </div>
                    </Form>
                </CardBody>
            </Register>
        );
    }
}

export default WalletRegister;