import React from 'react';
import SectionTitle from './SectionTitle';

const ContactContainer = (props) => {

  return (
    <div className="container" id="contact">
      <SectionTitle header="Contact" />
      <div className="row justify-content-around">
        <span className="text-center">Would you like to chat about a project or role?<br/> Or maybe we can just talk sports!</span>
      </div>
      <div className="row justify-content-center">
        <div className="row justify-content-between icon-row">
          <a href="https://www.facebook.com/chris.rithmyxay" target="_blank"><i class="devicon-facebook-plain"></i></a>
          <a href="https://www.linkedin.com/in/chris-rithmyxay" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.github.com/crithmyxay" target="_blank"><i class="devicon-github-plain-wordmark"></i></a>
          <a href="mailto:crithmyxay@gmail.com?Subject=Hi%20there!" target="_top"><i class="far fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;