import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './project.sass';
import { read } from '../../../shared/actions/Project'
import Discussion from '../discussion/DiscussionRegister'

class Project extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            neededFunds: 0,
            description: ""
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        read(id).then(({ data }) => {
            this.setState(data)
        });
    }
    

    render() {
        return (
            <React.Fragment>
                <div className="project-header">
                    <div className="header-image text-center">
                        <div className="header-title">
                            <h1>{this.state.name}</h1>
                            <h2>{this.state.description}</h2>
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
                                        <div>Valor necessário: <span className="red-font">R$: {this.state.neededFunds},00</span></div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" sm="8" md="6">
                                <div className="middle-content">
                                    <div className="content-topic bg-white">
                                        <Discussion projectId={this.props.match.params.id}/>
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