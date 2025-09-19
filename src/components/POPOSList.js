import React, { useState } from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from '../sfpopos-data.json';

function POPOSList() {
  const [search, setSearch] = useState(""); // State for search input

  // Handle input change in a controlled manner
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Filter spaces based on search input
  const filteredSpaces = data.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <div className="search-container">
        <label htmlFor="space-search" className="visually-hidden">
          Search for public spaces by name
        </label>
        <input
          id="space-search"
          type="text"
          placeholder="Search for a space..."
          value={search}
          onChange={handleSearchChange}
          className="search-bar"
          aria-describedby="search-help"
          aria-label="Search for public spaces by name"
        />
        <div id="search-help" className="visually-hidden">
          Type to filter the list of public spaces by name
        </div>
      </div>
      
      <div 
        className="POPOSList"
        role="region"
        aria-label="Public spaces"
        aria-live="polite"
        aria-atomic="false"
      >
        {filteredSpaces.length > 0 ? (
          <>
            <div className="visually-hidden" aria-live="polite">
              {filteredSpaces.length} {filteredSpaces.length === 1 ? 'space' : 'spaces'} found
            </div>
            {filteredSpaces.map(({ title, address, images, hours, website, features }, i) => (
              <POPOSSpace
                key={title}
                id={i}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
                website={website}
                features={features}
              />
            ))}
          </>
        ) : (
          <div className="no-results" role="status" aria-live="polite">
            <p>No spaces found matching "{search}". Try a different search term.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default POPOSList;