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
    <div className='box-content mb-6  h-[50px] w-[350px] mt-[15px]  py-1  ml-[30px]'>
    <div className="flex  ">
      
        <div className="flex items-center rounded-[30px] mt-1 shadow-3xl  h-[40px] w-[270px] p-2 border-gray-300  border-[0.5px]">
          
          <input
            type="text"
            placeholder="Search for Food,Canteen...."
            value={searchQuery}
            onChange={handleChange}
            className="w-full py-3  h-[25px] pl-[20px] l focus:outline-none "
          />
          <button
            className="flex  items-center justify-center text-white pr-2 rounded-full  "
            onClick={handleSearch}
          >
            <img className='h-[20px] drop-shadow-3xl' src="https://cdn-icons-png.freepik.com/256/711/711319.png?semt=ais_hybrid" alt="" />
          </button>
      
      </div>
      <div className='mt-1 ml-[15px] '>
      <button
        className="mr-2"
        onClick={handleOpen}
      >
       <img className='h-[38px] w-[38px] drop-shadow-3xl' src="https://t3.ftcdn.net/jpg/03/20/78/84/360_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg" alt="" />
      </button>
      <p>Filter</p>
      {/* Render Filter component conditionally */}
      {isOpen && <Filter />}
      </div>
      
    </div>
    </div>
  );
};

export default SearchBar;
