import React from 'react';
import './About.css';

function About() {
  return (
    <main className="About">
      <article className="About-content">
        <header>
          <h1>About <abbr title="Privately Owned Public Open Spaces">POPOS</abbr></h1>
        </header>
        <section>
          <p>
            <abbr title="Privately Owned Public Open Spaces">POPOS</abbr> are <strong>Privately Owned Public Open Spaces</strong> - publicly accessible spaces 
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
            San Francisco has over 70 <abbr title="Privately Owned Public Open Spaces">POPOS</abbr> throughout the city, offering residents and visitors 
            places to rest, eat lunch, and enjoy outdoor space in the dense urban environment.
          </p>
        </section>
      </article>
    </main>
  );
}

export default About;