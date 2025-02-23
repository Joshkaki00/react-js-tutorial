import React from 'react';
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours } = props;

  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        height="300"
        alt={name}
      />
      <div>{address}</div>
      <div className="POPOSSpace-Hours">{hours}</div>
    </div>
  );
}

export default POPOSSpace;