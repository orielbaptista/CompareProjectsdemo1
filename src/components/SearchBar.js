import React from 'react';
import searchicon from '../images/search-icon.png';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      {/* City and Location Section */}
      <input
        type="text"
        id="city"
        placeholder="Enter city location..."
        className="search-input"
      />
      <input
        type="text"
        id="location"
        placeholder="Enter property location..."
        className="search-input"
      />

      {/* Search Button with Icon */}
      <button id="search-btn" className="search-btn">
        <img src={searchicon} alt="Search" className="search-icon" /> Search
      </button>
    </div>
  );
};


export default SearchBar;
