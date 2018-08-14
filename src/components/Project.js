import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = ({ image, title, type, description, link }) => {
  return (
    <div className="row justify-content-around">
      <Card>
        <CardImg className="card-image" top width="100%" src={image} alt="Card image cap" />
        <CardBody >
          <CardTitle className="text-center">{title}</CardTitle>
          <CardSubtitle className="text-center">{type}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button><a className="project-link" href={link}>Project Repo</a></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;