import React from 'react'
import CartCard from '../../Components/CartCard/CartCard'

const CartPage = () => {
  return (
    <div>
      <div className='flex text-center shadow-xl pb-3'> 
          <a href='/'>
            <img className='h-[35px] w-[35px] pl-2 pt-3' src="https://static.thenounproject.com/png/234369-200.png" />
          </a>
          <div className='ml-2  pl-2 pt-2 '>
            <h1 className='text-[23px]' >Cart</h1>
          </div>
          
      </div>
      <CartCard/>
    </div>
  )
}

export default CartPage
