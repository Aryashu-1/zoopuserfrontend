import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import SearchBar from '../../Components/SearchBar/SearchBar'

import Menu from '../../Components/Menu/Menu'

const CanteenCataloguePage = () => {
  return (
    <div>
        <div>
          <img className='h-[35px] w-[35px] pl-2 pt-2' src="https://static.thenounproject.com/png/234369-200.png" />
        </div>
        <div className='h-[72px] flex'> 
            <div className='pl-[34px]'>
              <img className='' src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
            </div>
            <div></div>
        </div>
      <ProductCard/>
      <SearchBar/>
      
      <Menu/>
    </div>
  )
}

export default CanteenCataloguePage
