import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Header from './components/Header.js'
import { Server, Faker, uid } from 'react-mock'
import axios from "axios"

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "" 
        }
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    
    componentWillMount() {      
        const endPoint = '/router/auth/oauth/token'
        
        const userExperienceData = {
            "access_token": "bb84ad11-283d-43d7-b982-75ebc8eb94a5",
            "token_type": "bearer",
            "expires_in": 43200,
            "scope": "read write"
        }
        
        const requestHandler = (request, generator) => {
        return [200, { 'Content-Type': 'application/json' }, JSON.stringify(userExperienceData)];
        }
        
        Server.mockPost(endPoint, requestHandler)
        Server.on()
    }

    componentWillUnmount() {
        Server.off()
    }
    
    

    onClick = (event) => {
        event.preventDefault();
        if(this.state.email.length == 0){
            alert("Por favor, preencha um email");
        }
        if(this.state.password.length == 0){
            alert("Por favor, preencha uma senha")
        }
        const body = {
            username: this.state.email,
            password: this.state.password
        }
        axios.post('/router/auth/oauth/token', body).then(({ data }) => {
            sessionStorage.setItem("userCredentials", JSON.stringify(data))
            alert("Usuario logado")
        });
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <div className="app flex-row align-items-center">
                <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                    <CardGroup>
                        <Card className="p-4">
                        <CardBody>
                            <Form>
                            <h1>Login</h1>
                            <p className="text-muted">Entre com sua conta</p>
                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="icon-user"></i>
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" placeholder="email" autoComplete="username" name="email" onChange={this.onChange} />
                            </InputGroup>
                            <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="icon-lock"></i>
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input type="password" placeholder="Senha" autoComplete="current-password" name="password" onChange={this.onChange}/>
                            </InputGroup>
                            <Row>
                                <Col xs="6">
                                <Button color="primary" className="px-4" onClick={this.onClick}>Login</Button>
                                </Col>
                                <Col xs="6" className="text-right">
                                <Button color="link" className="px-0">Esqueceu sua senha?</Button>
                                </Col>
                            </Row>
                            </Form>
                        </CardBody>
                        </Card>
                        <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                        <CardBody className="text-center">
                            <div>
                            <h2>Cadastro</h2>
                            <p>Cadastre-se para poder cadastrar seu próprio projeto e ver projeto de outros usuarios.</p>
                            <Link to="/register"><Button color="primary" className="mt-3" active>Cadastrar</Button></Link>
                            </div>
                        </CardBody>
                        </Card>
                    </CardGroup>
                    </Col>
                </Row>
                </Container>
            </div>
            </React.Fragment>
        );
    }
}

export default Login;