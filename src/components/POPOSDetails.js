import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../sfpopos-data.json';
import './POPOSDetails.css';

function POPOSDetails() {
  const { id } = useParams();  // Get the ID from the URL
  const { images, title, desc, hours, features, geo } = data[id];  // Get the data using ID

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div className="POPOSDetails-content">
        <h1>{title}</h1>
        <p>{desc}</p>
        {hours && <p className="POPOSDetails-hours"><strong>Hours:</strong> {hours}</p>}
        {features && features.length > 0 && (
          <p className="POPOSDetails-features"><strong>Features:</strong> {features.join(', ')}</p>
        )}
        <p className="POPOSDetails-coordinates"><strong>Coordinates:</strong> {geo.lat}, {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;