import React, { Component } from 'react';
import { Button, CardBody, CardFooter, Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header.js'
import Register from '../../components/Register.js';
import Footer from '../../components/footer/Footer';

class UserRegister extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Register>
          <CardBody className="p-4">
            <Form>
              <h1>Sign up</h1>
              <p className="text-muted">Register your account</p>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Username" autoComplete="username" />
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
                <Input type="password" placeholder="Password" autoComplete="new-password" />
              </InputGroup>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="password" placeholder="Confirm Password" autoComplete="new-password" />
              </InputGroup>
              <Button color="success" block>Sign up</Button>
            </Form>
          </CardBody>
          <CardFooter className="p-4">
            <Row>
              <Col xs="12" className="text-center">
                <Link to="/login"><Button color="link" className="px-0">Already have a account?</Button></Link>
              </Col>
            </Row>
          </CardFooter>
        </Register>
      </div>
    );
  }
}

export default UserRegister;