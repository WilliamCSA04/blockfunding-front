import React, { Component } from 'react';
import Header from './components/Header';
import Register from './components/Register';
import axios from 'axios';
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
        const endPoint = '/projects'
        
        const userExperienceData = {
            "name": this.state.name,
            "description": this.state.description,
            "neededFunds": this.state.funds,
        }
        
            const requestHandler = (request, generator) => {
                return [200, { 'Content-Type': 'application/json' }, JSON.stringify(userExperienceData)];
        }
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
                                <Input type="text" id="project" placeholder="Digite o nome do projeto" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="vat">Descrição do projeto</Label>
                                <Input type="textarea" id="vat" placeholder="Descreva seu projeto" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="funds">Fundos necessários</Label>
                                <Input type="text" id="funds" placeholder="Ex: R$1000,00" />
                            </FormGroup>
                            <div className="form-actions">
                                <Button type="submit" color="primary">Criar Projeto</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Register>
            </React.Fragment>
        );
    }
}

export default ProjectRegister;