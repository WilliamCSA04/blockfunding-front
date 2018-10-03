import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';

class Register extends Component {
    render() {
        return (
        <Container>
            <Row className="justify-content-center">
                    <Col md="6">
                    <Card className="mx-4">
                        {this.props.children}
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Register;