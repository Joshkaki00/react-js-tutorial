import React from 'react';
import './Footer.css';  // Import styles

function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <div className="Footer">
        <p>Mitchell Hudson &copy; {currentYear}</p>
        <nav className="Footer-Nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Footer;