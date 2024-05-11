import React from 'react';
import StoreProfileCard from '../../Components/StoreProfileCard/StoreProfileCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const storeCount = 10;

  return (
    <div>
      <SearchBar />
      <div className='overflow-auto flex-grow h-screen bg-gray-100 py-1'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 bg-gray-100">
          {Array.from({ length: storeCount }, (_, index) => (
            <div key={index} className="w-full sm:w-auto md:w-full lg:w-1/3 xl:w-1/4">
              <StoreProfileCard index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
