import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { read as readProject } from '../../../shared/actions/Project'
import { read as readWallet } from '../../../shared/actions/Wallet'
import ProjectList from '../projects/ProjectsList'

class Account extends Component {

    constructor(props){
        super(props);
        this.state = {
            wallets: [],
            projects: []
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
        const projects = this.state.projects.map(project => {
            return <ProjectList title={project.name} description={project.description} neededFunds={project.neededFunds} />
        })
        return (
            <React.Fragment>
      <div className="bg-white projects recent-project">

        <Container>
          <div className="projects-header">
            <h1 className="projects-title">My projects</h1>
            <Link to="/projects/recent">See more...</Link>
          </div>
          <div className="projects-content">
            <Row>
                {projects}
                </Row>
          </div>
        </Container>
      </div>
            </React.Fragment>
        );
    }
}

export default Account;