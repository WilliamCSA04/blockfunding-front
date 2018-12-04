import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { read } from '../../../shared/actions/Wallet'

class Wallet extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            neededFunds: 0,
            description: "",
            discussions: []
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        read(id).then(({ data }) => {
            this.setState(data)
        });
    }
    
    updateDiscussions = (newDiscussion) => {
        const discussions = this.state.discussions;
        discussions.unshift(newDiscussion);
        this.setState({discussions: discussions});
    }

    render() {
        return (
          <Register>
          <CardHeader>
              <strong>Wallet</strong>
          </CardHeader>
          <CardBody>
              <Form>
                  <FormGroup>
                      <Label htmlFor="Wallet">Wallet Name</Label>
                      <Input type="text" placeholder="Type a name to your wallet" name="name" />
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="vat">Amount</Label>
                      <Input type="text"  placeholder="How much you want to add" name="amount" />
                  </FormGroup>
                  <div className="form-actions">
                      <Button type="submit" color="primary" >Add funds</Button>
                  </div>
              </Form>
          </CardBody>
      </Register>
        );
    }
}

export default Wallet;