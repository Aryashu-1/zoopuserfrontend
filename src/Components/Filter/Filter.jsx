import React, { useState } from 'react';

const Filter = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    } else {
      setSelectedOptions((prevOptions) => prevOptions.filter((option) => option !== value));
    }
  };

  const handleClose = () => {
    console.log('Selected Options:', selectedOptions);
    setIsOpen(!isOpen) // Close the filter by calling the onClose function
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-xl font-bold mb-4">Filter Options</h2>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="sortByDate"
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Sort by Date</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="sortByPrice"
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Sort by Price</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="sortByTime"
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Sort by Time</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="sortByDistance"
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Sort by Distance</span>
          </label>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-zoop text-white px-4 py-2 rounded transition-colors duration-700"
            onClick={handleClose}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
