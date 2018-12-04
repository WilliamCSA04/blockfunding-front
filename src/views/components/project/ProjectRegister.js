import React, { Component } from 'react';
import Register from '../../components/Register';
import { Button, CardBody, CardHeader, FormGroup, Input, Label, Form } from 'reactstrap';
import { create } from '../../../shared/actions/Project'

class ProjectRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            funds: "",
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
            neededFunds: this.state.funds,
            owner: user.username
        }
        create(body).then(({ data }) => {
            alert("Projeto criado")
        })
    }

    render() {
        return (
            <Register>
                <CardHeader>
                    <strong>Project</strong>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="Project">Project Name</Label>
                            <Input type="text" id="project" placeholder="Type a name to your project" name="name" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="vat">Project Description</Label>
                            <Input type="textarea" id="vat" placeholder="Describe your project" name="description" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="funds">Funds require</Label>
                            <Input type="text" id="funds" placeholder="Ex: 1000" name="funds" onChange={this.onChange} />
                        </FormGroup>
                        <div className="form-actions">
                            <Button type="submit" color="primary" onClick={this.onClick}>Register Project</Button>
                        </div>
                    </Form>
                </CardBody>
            </Register>
        );
    }
}

export default ProjectRegister;