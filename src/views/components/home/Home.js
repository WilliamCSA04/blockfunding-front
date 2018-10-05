import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './home.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
    render() {
        return (
            <div className="home-content">
                <div className="intro-area">
                    <div className="text-center intro-area-content">
                        <h1 className="intro-area-title">WELCOME TO BLOCKFUNDING</h1>
                        <h2 className="intro-area-subtitle">A criptocurrency based crowdfunding platform</h2>
                        <div className="intro-area-buttons">
                            <Link to="#about"><Button color="default" className="btn-lg mt-3" active>ABOUT US</Button></Link>
                            <Link to="/login"><Button color="danger" className="btn-lg mt-3" active>NEW PROJECT</Button></Link>
                        </div>
                    </div>
                </div>
                <div className="about-area text-center bg-white" name="about">
                    <Container>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</h1>
                        <p className="about-area-desc">
                            Aenean non justo eu sapien interdum congue vel in dui. Nullam maximus semper felis, quis iaculis metus mollis quis.
                            Aliquam viverra ante in mi iaculis, quis pellentesque risus malesuada. Cras sit amet scelerisque nisl, ut commodo nibh.
                            Morbi pharetra turpis dui, id aliquet est suscipit in. Duis nec purus eu tellus dapibus pretium in a sem.
                            In mollis ligula ut tortor ultrices, eget convallis sem suscipit. In vulputate, purus eu interdum semper, tortor dolor egestas odio, non rhoncus urna ligula eu neque.
                            Cras et lorem lorem. Curabitur viverra consequat pharetra. Cras non leo tincidunt, vehicula odio a, cursus nibh. Maecenas blandit convallis maximus.
                        </p>
                    </Container>
                </div>
                <div className="about-area bg-blue text-center">
                    <Container>
                        <Row>
                            <Col md="6">
                                <h1>All kinds of currencies!</h1>
                                <FontAwesomeIcon className="big-fa-icon" icon="stroopwafel"/>
                            </Col>
                            <Col md="6">
                                <h1>Just like a Stock Exchange!</h1>
                                <FontAwesomeIcon className="big-fa-icon" icon="stroopwafel"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="about-area bg-white text-center">
                    <Container>
                        Some stuff...
                    </Container>
                </div>
                <div className="about-area text-center">
                    <Container>
                        Some more stuff...
                    </Container>
                </div>
            </div >
        );
    }
}

export default Home;