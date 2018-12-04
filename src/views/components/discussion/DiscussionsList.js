import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class DiscussionsList extends Component {
  render() {
    return (
              <Col xs="12" sm="12" md="12">
              <Card>
                <CardBody>
                  <CardTitle>{this.props.name} says:</CardTitle>
                  <CardText>{this.props.text}</CardText>
                </CardBody>
              </Card>
              </Col>
            
    );
  }
}

export default DiscussionsList;