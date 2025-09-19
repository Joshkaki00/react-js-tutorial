import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header role="banner">
        <h1>
          <abbr title="San Francisco Privately Owned Public Open Spaces">
            SFPOPOS
          </abbr>
        </h1>
        <p className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</p>
        
        <nav role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} 
                to="/"
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                List
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} 
                to="/about"
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Title;