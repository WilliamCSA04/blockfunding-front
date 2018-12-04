import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { read as readProject } from '../../../shared/actions/Project'
import { read as readWallet } from '../../../shared/actions/Wallet'

class Account extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            neededFunds: 0,
            description: ""
        }
    }
    
    componentDidMount() {
        const user = JSON.parse(sessionStorage.userCredentials)
        readProject().then(({ data }) => {
            this.setState({projects: data.content.filter(project => {
                return project.owner == user.username
            })})
        });
        readWallet().then(({ data }) => {
            this.setState({wallets: data.content.filter(wallet => {
                return wallet.owner == user.username
            })})
        });
    }
    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Account;