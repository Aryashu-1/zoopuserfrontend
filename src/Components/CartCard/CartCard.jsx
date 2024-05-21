import React from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { StoresContext } from '../../Contexts/StoresContext/StoresContext';

const CartCard = (props) => {
  const nav = useNavigate()
  const [stores,setStores] = useContext(StoresContext)
  console.log(props.storeId)
  const storeDetails = stores.find(store => store._id === props.storeId)
  console.log(storeDetails)
  const [expanded, setExpanded] = useState(false);
  const checkout = () => {
    console.log('checkout')
    
    nav(`/cart/${props.storeId}`)
  }
  const deleteCart = () => {
    console.log('delete')
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={` p-2 w-[315px] mb-1 mx-auto mt-4  rounded-[23px] bg-white shadow-2xl cursor-pointer overflow-hidden transition-all duration-500 ${expanded ? 'h-[180px]' : 'h-[120px]'}`} >
      <div className='flex' onClick={toggleExpand}>
          <div className=''>
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              alt="Restaurant"
              className="w-[133px] h-[104px]  object-cover rounded-[15px]"
            />
            
          </div>
          <div className='ml-4 text-[18px] font-medium'>
            <h1>{storeDetails.name}</h1>
            <h1 className='text-[16px]'>{storeDetails.location}</h1>
            <div className="flex items-center ml-3">
                  <img className='h-[19px] w-[17px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSts1lZDcV1iBgY9SlMe94ge-vEvXKviWhTXCqXg5Ypg&s" alt="" />
                  <span className="md:text-[16px] font-semibold">4.5</span>
            </div>
           
          </div>
          
      </div>
      {expanded && (
              <div className='flex mt-4 justify-center items-center'>
                <button className=" text-red-600 px-2  rounded-md mx-3 border-red-600 shadow-sm shadow-red-500 w-[106px] h-[28px]" onClick={deleteCart}>Delete</button>
                <NavLink ><button className="bg-zoop text-white px-2 rounded-md mx-3 w-[106px] h-[28px] shadow-sm shadow-zoop" onClick={checkout}>Checkout</button></NavLink>
              </div>
      )}
      
    </div>
  )
}

export default CartCard
