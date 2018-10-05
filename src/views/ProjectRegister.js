import React, { Component } from 'react';
import Header from './components/Header';
import Register from './components/Register';
import axios from 'axios';
import { Server, Faker, uid } from 'react-mock'
import { Button, CardBody, CardHeader, FormGroup, Input, Label, Form } from 'reactstrap';

class ProjectRegister extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            description: "",
            funds: "",
        }
    }

    componentWillMount() {      
        const endPoint = '/project'
        
        const projectData = {
            "name": this.state.name,
            "description": this.state.description,
            "neededFunds": this.state.funds,
        }
        
            const requestHandler = (request, generator) => {
                return [200, { 'Content-Type': 'application/json' }, JSON.stringify(projectData)];
        }
        Server.mockPost(endPoint, requestHandler)
        Server.on()
    }

    componentWillUnmount() {
        Server.off()
    }
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onClick = (event) => {
        event.preventDefault();
        const body = {
            name: this.state.email,
            description: this.state.description,
            neededFunds: this.state.funds
        }
        axios.post('/project', body).then(({ data }) => {
            alert("Projeto criado")
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Register>
                    <CardHeader>
                        <strong>Projeto</strong>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="Project">Nome do Projeto</Label>
                                <Input type="text" id="project" placeholder="Digite o nome do projeto" name="name" onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="vat">Descrição do projeto</Label>
                                <Input type="textarea" id="vat" placeholder="Descreva seu projeto" name="description" onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="funds">Fundos necessários</Label>
                                <Input type="text" id="funds" placeholder="Ex: 1000" name="funds" onChange={this.onChange}/>
                            </FormGroup>
                            <div className="form-actions">
                                <Button type="submit" color="primary" onClick={this.onClick}>Criar Projeto</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Register>
            </React.Fragment>
        );
    }
}

export default ProjectRegister;