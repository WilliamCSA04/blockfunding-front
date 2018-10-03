import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './components/Header';

class ProjectRegister extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <Row>
                        <Col md={{size:6, offset: 3}}>
                            <Form>
                                <FormGroup>
                                    <Label for="projectName">Nome do projeto</Label>
                                    <Input type="text" name="projectName" id="projectName" placeholder="Digite o nome de seu projeto" />
                                    <Label for="projectDescription">Descrição do projeto</Label>
                                    <Input type="textarea" name="projectDescription" id="projectDescription" />
                                </FormGroup>
                                <Button color="primary float-right">Criar projeto</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default ProjectRegister;