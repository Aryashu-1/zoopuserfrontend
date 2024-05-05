import React from 'react'
import StoreProfileCard from '../../Components/StoreProfileCard/StoreProfileCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Filter from '../../Components/Filter/Filter'

const HomePage = () => {
  return (
    <div>
        <h1 className='text-3xl'>Home</h1>
      <StoreProfileCard/>
      <SearchBar/>
      <Filter/>
    </div>
  )
}

export default HomePage
