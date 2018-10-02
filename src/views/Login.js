import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <FormGroup>
                            	<Label for="emailLogin">Email</Label>
                                <Input type="email" name="email" id="emailLogin" placeholder="email@mail.com" />
								<Label for="passwordLogin">Password</Label>
          						<Input type="password" name="password" id="passwordLogin" placeholder="Senha" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;