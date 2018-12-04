import React, { Component } from 'react';
import Register from '../../components/Register';
import { Button, CardBody, CardHeader, FormGroup, Input, Label, Form } from 'reactstrap';

class DiscussionRegister extends Component {

    render() {
        return (
            <React.Fragment>
                <CardHeader>
                    <strong>Discussion</strong>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="Discussion">Discussion</Label>
                            <Input type="text" placeholder="Say something about this project" name="text" onChange={this.onChange} />
                        </FormGroup>
                    </Form>
                </CardBody>
            </React.Fragment>
        );
    }
}

export default DiscussionRegister;