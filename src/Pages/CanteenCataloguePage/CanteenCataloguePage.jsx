import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Filter from '../../Components/Filter/Filter'
import Menu from '../../Components/Menu/Menu'

const CanteenCataloguePage = () => {
  return (
    <div>
      CAnteen Catalogue
      <ProductCard/>
      <SearchBar/>
      <Filter/>
      <Menu/>
    </div>
  )
}

export default CanteenCataloguePage
