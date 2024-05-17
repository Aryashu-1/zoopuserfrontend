import React, { useState } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext/ProductsContext'

const ProductsStore = ({children}) => {
    let [proucts, setProducts] = useState([])
  return (
    <div>
      <ProductsContext.Provider value={[proucts,setProducts]}>
        {children}
      </ProductsContext.Provider>
    </div>
  )
}

export default ProductsStore
