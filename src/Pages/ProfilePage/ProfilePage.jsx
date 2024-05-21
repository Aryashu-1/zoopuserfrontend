import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiFillHeart } from 'react-icons/ai';
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'

const ProfilePage = () => {
  return (
    <div>
      <div className=''>
        <div className='flex text-center shadow-xl pb-3'> 
          <NavLink href='/'>
            <img className='h-[35px] w-[35px] pl-2 pt-3' src="https://static.thenounproject.com/png/234369-200.png" />
          </NavLink>
          <div className='ml-2  pl-2 pt-2 '>
            <h1 className='text-[23px]' >Profile</h1>
          </div>   
        </div>
      </div>
      <div className='flex flex-col  h-screen mt-[100px] from-zoop to-[#0275a8] rounded-t-full bg-gradient-to-b'>
        <div class="  drop-shadow-2xl   ">
          <div class="absolute h-[145px] w-14 left-[31.8%] -top-16 ">  
            <img className=' fixed top-[-10] h-[145px] m-auto ' src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt="" />
          </div>
          
        </div>
        <div className='mt-[100px]'>
          <div className='flex items-center justify-center'>
            <h1 className='text-[20px] font-semibold text-white'>Sushanth</h1> 
          </div>
    
          <div className=' flex items-center justify-evenly mt-10 '>
            <button className='flex items-center justify-center w-[63px] h-[56px] shadow-md shadow-white border-white border-2 rounded-[10px]'>
              <div>
                <NavLink to={'/'}>
                  <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 15 L 14 15 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"/></svg>
                </NavLink>
                <h1 className='text-[10px] text-white'>Home</h1>
              </div>
            </button>
            <button className='flex items-center justify-center w-[63px] h-[56px] shadow-md shadow-white border-white border-2 rounded-[10px]'>
              <div>
                <NavLink to={'/favs'}>
                  <AiFillHeart className={`h-[34px] w-[26px] text-white`} />
                </NavLink>
                <h1 className='text-[10px] text-white'>Favs</h1>
              </div>
            </button>
            <button className='flex items-center justify-center w-[63px] h-[56px] shadow-md shadow-white border-white border-2 rounded-[10px]'>
              <div>
                <NavLink to={'/cart'}><FontAwesomeIcon className='text-white h-[24px]' icon={faShoppingCart} size="2x" /></NavLink>
                <h1 className='text-[10px] text-white'>Cart</h1>
              </div>
            </button>
            

          </div>
          <div className='flex items-center justify-center mt-10 text-white text-20px'>
            <NavLink to={'/orders'}>
              <button className='flex items-center justify-center w-[218px] h-[56px] shadow-md shadow-white border-white border-2 rounded-[10px]'>
                ORDERS
              </button>
            </NavLink>
          </div>
          
        </div>
         
      </div>
      
      
    </div>
  )
}

export default ProfilePage
