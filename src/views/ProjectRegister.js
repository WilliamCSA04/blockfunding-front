import React, { Component } from 'react';
import Header from './components/Header';
import Register from './components/Register';
import { Button, CardBody, CardHeader, Col, FormGroup, Input, Label, Form, CardFooter } from 'reactstrap';

class ProjectRegister extends Component {
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
                            <div className="form-actions">
                                <Button type="submit" color="primary">Criar Projeto</Button>
                                <Button color="secondary">Cancelar</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Register>
            </React.Fragment>
        );
    }
}

export default ProjectRegister;