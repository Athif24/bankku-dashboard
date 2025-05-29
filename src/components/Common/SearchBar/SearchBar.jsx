import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ placeholder = "Search for something", onSearch }) => {
  const handleSearch = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="search-bar">
      <Search className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;