import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { read } from '../../../shared/actions/Project'
import ProjectsList from './ProjectsList'
import './projects.sass';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            projects: []
        }
    }


    componentDidMount(){
        read().then(({ data }) => {
            this.setState({projects: data.content});
        })
    }

    renderProjects = () => {
        console.log(this.state.projects)
        return this.state.projects.map(project => {
            return (<ProjectsList id={project.id} title={project.name} description={project.description} neededFunds={project.neededFunds} />)
        });
    }


    render() {
        return (
            <React.Fragment>
      <div className="bg-white projects recent-project">

        <Container>
          <div className="projects-header">
            <h1 className="projects-title">Recent</h1>
            <Link to="/projects/recent">See more...</Link>
          </div>
          <div className="projects-content">
            <Row>
                {this.renderProjects()}
                </Row>
          </div>
        </Container>
      </div>
            </React.Fragment>
        );
    }
}

export default Projects;