import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './components/Header';

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <Row>
                        <Col md={{size:6, offset: 3}}>
                            <Form>
                                <FormGroup>
                                    <Label for="emailLogin">Email</Label>
                                    <Input type="email" name="email" id="emailLogin" placeholder="email@mail.com" />
                                    <Label for="passwordLogin">Password</Label>
                                    <Input type="password" name="password" id="passwordLogin" placeholder="Senha" />
                                </FormGroup>
                                <Button color="primary float-right">Login</Button>
                                <Link to="/register"><Button outline color="primary">Registrar</Button></Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

        );
    }
}

export default Login;