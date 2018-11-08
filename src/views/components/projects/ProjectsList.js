import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


class ProjectsList extends Component {
  render() {
    return (
              <Col xs="12" sm="4" md="3">
                <Link to="/project/1">
                  <div className="project-banner">
                    <img src="https://zdnet4.cbsistatic.com/hub/i/2018/04/13/36c52953-7ab9-4608-a848-71d1d538856e/2cad00bf6c3dc3ff21009836b989cda7/td-deep-learning.jpg" alt="" />
                    <div className="project-detail">
                      <h1 className="project-title">{this.props.title}</h1>
                      <p className="project-small-desc">{this.props.description}</p>
                      <div className="project-info">
                        <div><i className="fa fa-users"></i> 110 Investors</div>
                        <div><i className="fa fa-money"></i> 920</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            
    );
  }
}

export default ProjectsList;