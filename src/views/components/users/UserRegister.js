import React, { Component } from 'react';
import { Button, CardBody, CardFooter, Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Register from '../../components/Register.js';
import { create } from '../../../shared/actions/Login'

class UserRegister extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      name: "",
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onClick = (e) => {
    e.preventDefault();
    create(this.state).then(({data}) => {
      sessionStorage.setItem("userCredentials", JSON.stringify(data))
    })
  }

  render() {
    return (
        <Register>
          <CardBody className="p-4">
            <Form>
              <h1>Sign up</h1>
              <p className="text-muted">Register your account</p>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="name" placeholder="name" autoComplete="name" onChange={this.onChange}/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="username" placeholder="Username" autoComplete="username" onChange={this.onChange}/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input type="email" name="email" placeholder="Email" autoComplete="email" onChange={this.onChange}/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="password" name="password" placeholder="Password" autoComplete="new-password" onChange={this.onChange}/>
              </InputGroup>
              <Button color="success" onClick={this.onClick} block>Sign up</Button>
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
    );
  }
}

export default UserRegister;