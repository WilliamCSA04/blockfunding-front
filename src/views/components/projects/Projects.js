import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap';
import './projects.sass'
import '../shared/definitions.sass'
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="bg-white projects recent-project">
                    <Container>
                        <div className="projects-header">
                            <h1 className="projects-title">Recent</h1>
                            <Link to="/projects/recent">See more...</Link>
                        </div>
                        <Row>
                            <Col xs="12" sm="4" md="3">
                                <Link to="/project/1">
                                    <div className="project-banner">
                                        <img src="https://zdnet4.cbsistatic.com/hub/i/2018/04/13/36c52953-7ab9-4608-a848-71d1d538856e/2cad00bf6c3dc3ff21009836b989cda7/td-deep-learning.jpg" />
                                        <div className="project-detail">
                                            <h1 className="project-title">IA Project</h1>
                                            <p className="project-small-desc">Help me make a AI to identify payment frauds.</p>
                                            <div className="project-info">
                                                <div><i className="fa fa-users"></i> 110 Investors</div>
                                                <div><i className="fa fa-money"></i> 920</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs="12" sm="4" md="3">
                                <Link to="/project/2">
                                    <div className="project-banner">
                                        <img src="https://previews.123rf.com/images/yupiramos/yupiramos1506/yupiramos150603691/40932571-food-delivery-design.jpg" />
                                        <div className="project-detail">
                                            <h1 className="project-title">Food Project</h1>
                                            <p className="project-small-desc">We want to make a food delivery app.</p>
                                            <div className="project-info">
                                                <div><i className="fa fa-users"></i> 47 Investors</div>
                                                <div><i className="fa fa-money"></i> 300</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs="12" sm="4" md="3">
                                <Link to="/project/3">
                                    <div className="project-banner">
                                        <img src="https://i.ytimg.com/vi/jZl7lNwFK0g/maxresdefault.jpg" />
                                        <div className="project-detail">
                                            <h1 className="project-title">Video Sharer</h1>
                                            <p className="project-small-desc">Want to be part of the best video sharing platform?</p>
                                            <div className="project-info">
                                                <div><i className="fa fa-users"></i> 245 Investors</div>
                                                <div><i className="fa fa-money"></i> 2400</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-white projects">
                    <Container>
                        <div className="projects-header">
                            <h1 className="projects-title">Trending</h1>
                            <Link to="/projects/trending">See more...</Link>
                        </div>
                        <Row>
                            <Col xs="12" sm="4" md="3">
                                <Link to="/project/1">
                                    <div className="project-banner">
                                        <img src="https://zdnet4.cbsistatic.com/hub/i/2018/04/13/36c52953-7ab9-4608-a848-71d1d538856e/2cad00bf6c3dc3ff21009836b989cda7/td-deep-learning.jpg" />
                                        <div className="project-detail">
                                            <h1 className="project-title">IA Project</h1>
                                            <p className="project-small-desc">Help-me make a IA to identify payment frauds.</p>
                                            <div className="project-info">
                                                <div><i className="fa fa-users"></i> 110 Investors</div>
                                                <div><i className="fa fa-money"></i> 920 </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Projects;