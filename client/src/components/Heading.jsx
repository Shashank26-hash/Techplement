// client/src/components/Heading.jsx
import React, { useState } from 'react';
import './Heading.css';

const Heading = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.className = darkTheme ? 'light-theme' : 'dark-theme';
  };

  return (
    <div className={`heading-container ${darkTheme ? 'dark' : 'light'}`}>
      <h1 className="heading">Random Quotes</h1>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Switch to {darkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

export default Heading;
