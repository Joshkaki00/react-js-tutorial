import React from 'react';
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours, website, features } = props;

  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      {image && (
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width="300"
          height="300"
          alt={name}
        />
      )}
      {address && <div>{address}</div>}
      {hours && <div className="POPOSSpace-Hours">{hours}</div>}
      {website && (
        <div className="POPOSSpace-Link">
          <a href={website} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      )}
      {features && features.length > 0 && (
        <div className="POPOSSpace-Features">
          {features.map((feature, index) => (
            <span key={index} className="POPOSSpace-Feature">{feature}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default POPOSSpace;