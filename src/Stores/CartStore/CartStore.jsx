import React, { useState } from 'react'
import { StoresContext } from '../../Contexts/StoresContext/StoresContext'
import { CartContext } from '../../Contexts/CartContext/CartContext'

const CartStore = ({children}) => {
    let [cart,setCart] = useState([])
  return (
    <div>
      <CartContext.Provider value={[cart,setCart]}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default CartStore
