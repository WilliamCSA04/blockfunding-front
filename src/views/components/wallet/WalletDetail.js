import React, { Component } from 'react';
import { read, credit } from '../../../shared/actions/Wallet'
import Register from '../../components/Register';
import { Button, CardBody, CardHeader, FormGroup, Input, Label, Form } from 'reactstrap';


class WalletDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            amount: "",
            id: this.props.id
        }
    }

    onChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    onClick = (e) => {
      e.preventDefault();
      credit(this.state).then(({data}) => {
        alert("Added fund");
      })
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
                      <Label htmlFor="vat">Amount</Label>
                      <Input type="text"  placeholder="How much you want to add" name="amount" onChange={this.onChange} />
                  </FormGroup>
                  <div className="form-actions">
                      <Button type="submit" color="primary" onClick={this.onClick}>Add funds</Button>
                  </div>
              </Form>
          </CardBody>
      </Register>
        );
    }
}

export default WalletDetail;