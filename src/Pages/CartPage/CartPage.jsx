import React, { useContext } from 'react'
import CartCard from '../../Components/CartCard/CartCard'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext/CartContext'
import { StoresContext } from '../../Contexts/StoresContext/StoresContext'

const CartPage = () => {
  let [cart,setCart] = useContext(CartContext)
  console.log(cart)
  const uniqueStores = [...new Set(cart.map(item => item.storeId))];
  console.log(uniqueStores)
  
  
  return (
    <div className='flex items-center justify-center '>
    <div className='w-[800px]'>
        <div className='flex text-center shadow-xl pb-3'> 
            <NavLink to={'/'}>
              <img className='h-[35px] w-[35px] pl-2 pt-3' src="https://static.thenounproject.com/png/234369-200.png" />
            </NavLink>
            <div className='ml-2  pl-2 pt-2 '>
              <h1 className='text-[23px]' >Cart</h1>
            </div>
            
        </div>
        <div className='md:flex md:flex-wrap  '>
          {
            uniqueStores.map((store,index)=><CartCard storeId={store} index={index}/>)
          }
        </div>
      </div>
      
    </div>
  )
}

export default CartPage
