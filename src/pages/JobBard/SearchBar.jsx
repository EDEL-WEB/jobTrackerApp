import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search jobs..." 
        value={query} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBar;

