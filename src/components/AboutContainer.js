import React from 'react';
import { Col, Row } from 'reactstrap';
import myself from '../images/self.jpg'
import SectionTitle from './SectionTitle';

const AboutContainer = (props) => {

  return (
    <div className="container" id="about">
      <SectionTitle header="A little about me..." />
      <div className="row justify-content-around">
        <Row>
          <Col className="row justify-content-center" sm='6'>
            <p>
              I'm a developer that loves challenges and solving problems. I've attended Digital Crafts coding boot camp to learn Full-Stack Web Development.
              When I'm not coding, I like to travel, watch shows/movies and playing and watching sports. 
              I'm a huge sports fan that enjoys talking sports especially if it comes to Atlanta Falcons/United.
              I like to also cook and try new foods of all varieties. I regularly eat food thats very spicy thanks to my family coming from Laos.
              <br/><br/>
            </p>
          </Col>
          <Col className="row justify-content-center" sm='6'> 
            <div>
              <img className="self" src={myself} alt="self"/>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutContainer;