import React from 'react';
import './App.css'
const Box = ({ value, onClick,selected }) => {
  return (
    <div
    id={`bx-${value}`}
    className={`box ${selected ? 'selected' : ''}`}
    onClick={() => onClick(value)}
  >
    {value}
  </div>
  );
};

export default Box;
