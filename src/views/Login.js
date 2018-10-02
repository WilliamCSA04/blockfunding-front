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
                            	<Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;