import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../sfpopos-data.json';
import './POPOSDetails.css';

function POPOSDetails() {
  const { id } = useParams();  // Get the ID from the URL
  
  // Handle invalid ID
  if (!data[id]) {
    return (
      <main className="POPOSDetails">
        <div role="alert" className="error-message">
          <h1>Space Not Found</h1>
          <p>The requested public space could not be found.</p>
        </div>
      </main>
    );
  }
  
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <main className="POPOSDetails">
      <article>
        <header className="POPOSDetails-image">
          <img 
            src={`${process.env.PUBLIC_URL}/images/${images[0]}`} 
            alt={`Photo of ${title} public space`}
            loading="eager"
          />
        </header>
        
        <div className="POPOSDetails-content">
          <h1>{title}</h1>
          
          <section className="POPOSDetails-description">
            <h2 className="visually-hidden">Description</h2>
            <p>{desc}</p>
          </section>
          
          {hours && (
            <section className="POPOSDetails-hours">
              <h2 className="visually-hidden">Operating Hours</h2>
              <p><strong>Hours:</strong> <time>{hours}</time></p>
            </section>
          )}
          
          {features && features.length > 0 && (
            <section className="POPOSDetails-features">
              <h2 className="visually-hidden">Available Features</h2>
              <p><strong>Features:</strong></p>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item">{feature}</li>
                ))}
              </ul>
            </section>
          )}
          
          <section className="POPOSDetails-coordinates">
            <h2 className="visually-hidden">Location Coordinates</h2>
            <p>
              <strong>Coordinates:</strong> 
              <span aria-label={`Latitude ${geo.lat}, Longitude ${geo.lon}`}>
                {geo.lat}, {geo.lon}
              </span>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default POPOSDetails;