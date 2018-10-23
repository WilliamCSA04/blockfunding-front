import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './project.sass';
import { read } from '../../../shared/actions/Project'

class Project extends Component {

    
    componentWillMount() {
        const body = {}
        read(body).then(data => {

        });
    }
    

    render() {
        return (
            <React.Fragment>
                <div className="project-header">
                    <div className="header-image text-center">
                        <div className="header-title">
                            <h1>AI Project</h1>
                            <h2>Help me make a AI to identify payment frauds.</h2>
                        </div>
                    </div>
                    <div className="bg-white">
                        <Container>
                            <div className="header-bar">
                                Overview Updates Investors
                            </div>
                        </Container>
                    </div>
                </div>
                <Container>
                    <div className="project-content">
                        <Row>
                            <Col xs="12" sm="3">
                                <div className="left-content">
                                    <div className="content-topic bg-white">
                                        <div>Valor arrecadado: <span className="green-font">R$: 1000,00</span></div>
                                        <div>Valor necessário: <span className="red-font">R$: 2300,00</span></div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" sm="8" md="6">
                                <div className="middle-content">
                                    <div className="content-topic bg-white">
                                        middle area
                                        <div style={{ height: 35 + 'em' }}></div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" sm="8" md="3">
                                <div className="right-content">
                                    <div className="content-topic bg-white">
                                        right area
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default Project;