import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
  const { name, image, address, hours, website, features, id } = props;

  // Build aria-describedby string only for elements that exist
  const describedBy = [
    address && `address-${id}`,
    hours && `hours-${id}`
  ].filter(Boolean).join(' ');

  return (
    <article className="POPOSSpace" role="article">
      <header>
        <h2>
          <Link 
            to={`/details/${id}`}
            aria-describedby={describedBy || undefined}
          >
            {name}
          </Link>
        </h2>
      </header>
      
      {image && (
        <Link 
          to={`/details/${id}`}
          aria-label={`View details for ${name}`}
          className="POPOSSpace-ImageLink"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/${image}`}
            width="300"
            height="300"
            alt={`Photo of ${name} public space`}
            loading="lazy"
          />
        </Link>
      )}
      
      <div className="POPOSSpace-Content">
        {address && (
          <div className="POPOSSpace-Address" id={`address-${id}`}>
            <span className="visually-hidden">Address: </span>
            {address}
          </div>
        )}
        
        {hours && (
          <div className="POPOSSpace-Hours" id={`hours-${id}`}>
            <span className="visually-hidden">Hours: </span>
            {hours}
          </div>
        )}
        
        {website && (
          <div className="POPOSSpace-Link">
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visit ${name} website (opens in new tab)`}
            >
              Visit Website
              <span className="visually-hidden"> (opens in new tab)</span>
            </a>
          </div>
        )}
        
        {features && features.length > 0 && (
          <div className="POPOSSpace-Features" role="list" aria-label="Available features">
            {features.map((feature, index) => (
              <span 
                key={index} 
                className="POPOSSpace-Feature"
                role="listitem"
                aria-label={`Feature: ${feature}`}
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default POPOSSpace;