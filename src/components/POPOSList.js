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
    <div>
      {/* Controlled input */}
      <input
        type="text"
        placeholder="Search for a space..."
        value={search}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="POPOSList">
        {filteredSpaces.length > 0 ? (
          filteredSpaces.map(({ title, address, images, hours, website, features }, i) => (
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
          ))
        ) : (
          <p>No spaces found</p>
        )}
      </div>
    </div>
  );
}

export default POPOSList;