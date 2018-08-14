import React from 'react';
import BackDrop from '../images/office-min.jpg';
import TypeWriter from 'react-typewriter';

const sectionStyle = {
  backgroundImage: `url(${BackDrop})`
}

const Background = () => {
  return (
    <div className="backdrop" style={sectionStyle}>
      <div className="jumbotron typewriter" style={{background: '#343a40'}}>
        <TypeWriter typing={1} >
          <h1>
            &lt;&gt; <br />
            Hi, my name is Chris! <br/>
            I'm a Web Developer! <br/>
            &lt;/&gt; <br/>
          </h1>
        </TypeWriter>
      </div>
    </div>
  );
}

export default Background;