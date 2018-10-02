import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component {
    render() {
        return (
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
							<Button outline color="primary">Registrar</Button>{' '}
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;