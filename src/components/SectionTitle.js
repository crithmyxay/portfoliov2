import React from 'react';

const SectionTitle = (props) => {
  return (
    <div className="center">
      <h1 className="section-header text-center">
        {props.header}
      </h1>
      <div className="bar"></div>
    </div>
  );
}

export default SectionTitle;