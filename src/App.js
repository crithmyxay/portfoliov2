import React, { Component } from 'react';
import './App.css';
import TopBar from './components/NavBar';
import CardContainer from './components/CardContainer';
import Neebo from './images/neebo-edit.jpg';
import mySitter from './images/babysitter-min.png';
// import placeHolder from './images/300placeholder.png';
import Background from './components/Background';
import logo from './images/mbs-logo2.png';
import AboutContainer from './components/AboutContainer';
import ContactContainer from './components/ContactContainer';
import Point from './components/Point';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      projects: [
        {
          title: 'Neebo',
          image: Neebo,
          type: 'Solo',
          link: 'https://github.com/crithmyxay/robot-car',
          description: 'NeeBo is a Robot Car kit that uses Arduino and Rapsbery Pi to receive signals to send to it\'s motors. A camera and PS4 controller was added for more functionality. Built with HTML/CSS, JavaScript, jQuery, Node.JS, Express, WebSockets, C++'
        },
        {
          title: 'mySitter',
          image: mySitter,
          type: 'Group',
          link: 'https://github.com/ebates92/babysitter-app',
          description: 'A web app that allows parents to connect with potential babysitters within a certain distance. Utilizes swiping actions for matches or rejections of babysitters. After a match has been made, a list of matches is available for the parent to contact the babysitter via messaging and begin negotiations. Built with HTML, CSS, JavaScript, jQuery, Express, and PostGreSQL.'
        },
        {
          title: 'MBS Event Parking',
          image: logo,
          type: 'Group',
          link: 'https://github.com/crithmyxay/MercedesBenzParking',
          description: 'A web app that lits events at Mercedes Benz Stadium in Atlanta, GA and the surrounding parking lots/costs on the same day. Pulls data from Ticket Master API. The date is then passed to ParkWhiz\'s API, which then passes coordinates to render markers on Google Map\'s API to indicate parking prices/locations. Built with HTML, CSS, JavaScript, and jQuery.'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Background />
        <AboutContainer />
        <Point color="white" background="svgcolor-lightgray"/>
        <CardContainer projects={this.state.projects}/>
        <Point color="lightgray"/>
        <ContactContainer />
      </div>
    );
  }
}

export default App;
