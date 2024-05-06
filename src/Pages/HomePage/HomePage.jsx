import React from 'react'
import StoreProfileCard from '../../Components/StoreProfileCard/StoreProfileCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'


const HomePage = () => {
  const storeCount = 10
  return (
    <div >
    
      <SearchBar/>
      <div className='overflow-auto flex-grow h-screen bg-gray-100 py-1'>
  
      {
        
        Array.from({ length: storeCount }, (_, index) => (
          <div><StoreProfileCard key={index} index={index} /></div>
          
        ))
      }
      </div>
      
    </div>
  )
}

export default HomePage
