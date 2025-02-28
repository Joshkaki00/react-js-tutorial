import React, { useState } from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from '../sfpopos-data.json';

function POPOSList() {
  const [search, setSearch] = useState(""); // State for search input

  // Filter spaces based on search input
  const filteredSpaces = data.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  const spaces = filteredSpaces.map(({ title, address, images, hours, website, features }, i) => (
    <POPOSSpace
      id={i}
      key={title}
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
      website={website}
      features={features}
    />
  ));

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a space..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="POPOSList">
        {spaces.length > 0 ? spaces : <p>No spaces found</p>}
      </div>
    </div>
  );
}

export default POPOSList;