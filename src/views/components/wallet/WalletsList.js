import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


class WalletsList extends Component {
  render() {
    return (
              <Col xs="12" sm="4" md="3">
                <Link to={`/wallet/${this.props.id}`}>

                  <div className="project-banner">
                    <img src="https://dayair.org/wp-content/uploads/2017/04/money-wallet.jpg" alt="" />
                    <div className="project-detail">
                      <h1 className="project-title">{this.props.title}</h1>
                      <p className="project-small-desc">{this.props.description}</p>
                      <div><i className="fa fa-money"></i> Funds: {this.props.funds}</div>
                    </div>
                  </div>
                  </Link>
              </Col>
            
    );
  }
}

export default WalletsList;