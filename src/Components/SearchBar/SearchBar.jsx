import React, { useState } from 'react';
import Filter from '../Filter/Filter';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
    const searchObject = { query: searchQuery };
    console.log('Search Object:', searchObject);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center rounded-full overflow-hidden shadow-lg bg-ivory  hover:shadow-xl border border-gray-200 transform hover:scale-105 transition-transform duration-700">
          <input
            type="text"
            placeholder="Search Food..."
            value={searchQuery}
            onChange={handleChange}
            className="w-full py-3 px-8 focus:outline-none bg-ivory"
          />
          <button
            className="flex items-center justify-center bg-blue-500 text-white p-3 rounded-full hover:bg-green-600 focus:outline-none transition-all duration-700 transform hover:scale-105 hover:text-gray-100 "
            onClick={handleSearch}
          >
            <svg
              className="w-6 h-6 text-white  transform hover:rotate-12 shadow-sm transition-colors duration-700 hover:text-gray-100"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-green-500 text-white p-3 rounded-full focus:outline-none transition-all duration-300 transform hover:scale-105"
        onClick={handleOpen}
      >
        <svg
          className="w-6 h-6 text-white  transform hover:rotate-12 shadow-sm transition-colors duration-300 hover:text-gray-100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 4h16M4 12h16M4 20h16"></path>
        </svg>
      </button>
      {/* Render Filter component conditionally */}
      {isOpen && <Filter />}
    </div>
  );
};

export default SearchBar;
