import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import POPOSList from './POPOSList';
import About from './About';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();