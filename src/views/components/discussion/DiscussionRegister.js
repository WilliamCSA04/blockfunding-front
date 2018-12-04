import React, { Component } from 'react';
import { Button, CardBody, CardHeader, FormGroup, Input, Label, Form } from 'reactstrap';
import { create } from '../../../shared/actions/Discussion'

class DiscussionRegister extends Component {

    constructor(props){
        super(props);
        const user = JSON.parse(sessionStorage.userCredentials)
        this.state = {
            projectId: this.props.projectId,
            ownerName: user.name,
            text: "",
            owner: user.username
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onClick = (e) => {
        e.preventDefault();
        create(this.state).then(({ data }) => {
            this.props.updateDiscussions(data)
            alert("Created");
        })
    }

    

    render() {
        return (
            <React.Fragment>
                <CardHeader>
                    <strong>Discussion</strong>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Input type="text" placeholder="Say something about this project" name="text" onChange={this.onChange} />
                        </FormGroup>
                        <div className="form-actions">
                            <Button type="submit" color="primary" onClick={this.onClick}>Post</Button>
                        </div>
                    </Form>
                </CardBody>
            </React.Fragment>
        );
    }
}

export default DiscussionRegister;