import React, { Component } from 'react';
import { Button, CardBody, CardFooter, Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import Header from './components/Header.js'
import Register from './components/Register.js';
import Footer from './components/footer/Footer';

class UserRegister extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="app flex-row align-items-center">
        <Register>
            <CardBody className="p-4">
              <Form>
                <h1>Cadastro</h1>
                <p className="text-muted">Crie sua conta</p>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="text" placeholder="Nome de usuario" autoComplete="username" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                  </InputGroupAddon>
                  <Input type="email" placeholder="Email" autoComplete="email" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="password" placeholder="Senha" autoComplete="new-password" />
                </InputGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="password" placeholder="Confimação de Senha" autoComplete="new-password" />
                </InputGroup>
                <Button color="success" block>Criar conta</Button>
              </Form>
            </CardBody>
            <CardFooter className="p-4">
              <Row>
                <Col xs="12" className="text-center">
                  <Link to="/login"><Button color="link" className="px-0">Já possui uma conta?</Button></Link>
                </Col>
              </Row>
            </CardFooter>
          </Register>
      </div>
      <Footer />
      </React.Fragment>
    );
  }
}

export default UserRegister;