import React from 'react';
import './Footer.css';  // Import styles

function Footer() {
  return (
    <div className="Footer">
      <p>Mitchell Hudson &copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;