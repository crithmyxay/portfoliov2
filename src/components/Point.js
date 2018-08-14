import React from 'react';

const Point = ({color, background, id}) => {
  return (
    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className={background} id={id}>
      <path d="M0 0 L50 100 L100 0 Z" fill={color} stroke={color}></path>
    </svg>
  );
}

export default Point;