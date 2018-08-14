import React from 'react';
import ProjectCard from './Project';
import { Col, Row } from 'reactstrap';
import SectionTitle from './SectionTitle';

const CardContainer = (props) => {

  const projects = props.projects.map((project, i) => {
    return (
      <Col md="4" key={project.title}>
        <ProjectCard 
          className="projects" 
          {...project}
        />
      </Col>
    )
  });

  return (
    <div className="container-fluid  project-container" id="projects">
      <div className="container" >
        <SectionTitle header="Projects"/> 
        <Row>
          {projects}
        </Row>
      </div>
    </div>
  );
};

export default CardContainer;