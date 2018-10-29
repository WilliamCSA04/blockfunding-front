import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { login } from '../shared/actions/Login';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }



    onClick = (event) => {
        event.preventDefault();
        if (this.state.email.length === 0) {
            alert("Por favor, preencha um email");
        } else {
            if (this.state.password.length === 0) {
                alert("Por favor, preencha uma senha")
            } else {
                const body = {
                    username: this.state.email,
                    password: this.state.password
                }
                login(body).then(({ data }) => {
                    sessionStorage.setItem("userCredentials", JSON.stringify(data));
                    alert("Usuario logado");
                    this.props.history.push('/projects');
                }).catch((data) => {
                    alert(data.response.data.error)
                });
            }
        }
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <Form>
                                            <h1>Login</h1>
                                            <p className="text-muted">Login with your account</p>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="email" placeholder="Email" autoComplete="username" name="email" onChange={this.onChange} />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-lock"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={this.onChange} />
                                            </InputGroup>
                                            <Row>
                                                <Col xs="6">
                                                    <Button color="primary" className="px-4" onClick={this.onClick}>Login</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Sign up to register your own project and see others users projects.</p>
                                            <Link to="/register"><Button color="primary" className="mt-3" active>Sign up</Button></Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;