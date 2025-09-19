import React from 'react';
import './Footer.css';  // Import styles

function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="Footer" role="contentinfo">
        <p>
          <span>&copy; {currentYear} Mitchell Hudson</span>
        </p>
      </footer>
    );
  }
  
  export default Footer;