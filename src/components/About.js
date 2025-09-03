import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <div className="About-content">
        <h1>About SFPOPOS</h1>
        <p>
          POPOS are <strong>Privately Owned Public Open Spaces</strong> - publicly accessible spaces 
          in the forms of plazas, terraces, atriums, and parks, maintained by private developers 
          in San Francisco.
        </p>
        <p>
          These spaces were created through San Francisco's planning process, where developers 
          provide public space in exchange for additional building height or floor area. 
          While privately owned and maintained, these spaces must remain open and accessible 
          to the public during specified hours.
        </p>
        <p>
          San Francisco has over 70 POPOS throughout the city, offering residents and visitors 
          places to rest, eat lunch, and enjoy outdoor space in the dense urban environment.
        </p>
      </div>
    </div>
  );
}

export default About;