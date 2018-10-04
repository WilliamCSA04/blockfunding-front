import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './home.sass'

class Home extends Component {
    render() {
        return (
            <div className="home-page-area">
                <div className="home-content">
                    <div className="area-one">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 area-one-titles">
                                    <h1 className="area-one-title">Lorem ipsum dolor sit amet</h1>
                                    <p className="area-one-subtitle">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="col-sm-6 area-one-info">
                                    <p className="area-one-text-preview">
                                    Sed gravida, turpis eu fermentum eleifend, mauris orci aliquet est, at auctor nulla sem vel magna. Quisque sodales mattis arcu id elementum. Donec elementum lacus id eleifend tincidunt. Sed purus nisi, consequat non leo nec, posuere molestie nisi.                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="area-two">
                        <div className="container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</p>
                            <div className="area-two-options">
                                <div className="row">
                                    <p className="area-two-option-desc">
                                        Aenean non justo eu sapien interdum congue vel in dui. Nullam maximus semper felis, quis iaculis metus mollis quis. 
                                        Aliquam viverra ante in mi iaculis, quis pellentesque risus malesuada. Cras sit amet scelerisque nisl, ut commodo nibh. 
                                        Morbi pharetra turpis dui, id aliquet est suscipit in. Duis nec purus eu tellus dapibus pretium in a sem. 
                                        In mollis ligula ut tortor ultrices, eget convallis sem suscipit. In vulputate, purus eu interdum semper, tortor dolor egestas odio, non rhoncus urna ligula eu neque. 
                                        Cras et lorem lorem. Curabitur viverra consequat pharetra. Cras non leo tincidunt, vehicula odio a, cursus nibh. Maecenas blandit convallis maximus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;