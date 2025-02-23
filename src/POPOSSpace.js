import React from 'react';
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours, website } = props;

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
      {website && (
        <div className="POPOSSpace-Link">
          <a href={website} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      )}
    </div>
  );
}

export default POPOSSpace;