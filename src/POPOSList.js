import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';

function POPOSList() {
  const spaces = data.map(({ title, address, images, hours, website }) => (
    <POPOSSpace
      key={title}
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
      website={website}  // Pass website as a prop
    />
  ));

  return (
    <div className="POPOSList">
      {spaces}
    </div>
  );
}

export default POPOSList;