import React from 'react'
import { useState } from 'react'

const Menu = () => {

  const menus = ["Dosas", "Meals", "Snacks", "Sweets"]
  const [isActive,activate] = useState(false)

  function showMenu(){
    activate(true)
  }

  function closeMenu(){
    activate(false)
  }
  

  return (

    <div>
      { !isActive &&
      
      <div className='mt-2 ml-4 flex'>
             <button onClick={showMenu} className='rounded-[5px] p-1 border-2 shadow-2xl w-[30px] h-[30px] flex items-center'>
            
            <svg className='  w-[25px] h-[28px]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" ><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
            
            </button>
            <div className='ml-2 text-[18px] font-medium'><h3>Menu</h3></div>
      </div>
      }

      {isActive && 
      <div className='fixed    w-[100%] h-[100%] bg-gray-200 bg-opacity-50 z-20'>
        <div className='z-20 w-[50%] h-[100%] bg-zoop rounded-r-lg animate-[wiggle_0.49s]'>
          <div className='w-[100%] p-2 flex flex-row justify-start items-center gap-2'>
            <svg onClick={closeMenu} fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 490 490" xml:space="preserve">
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
              489.292,457.678 277.331,245.004 489.292,32.337 "/>
            </svg>
            <span className='text-center font-bold'>Menu</span>
          </div>
          {menus.map((val,idx) => <div key={idx} className=' m-[5px] p-2 border-black text-white'><button className='text-white'>{val}</button></div>)}
        </div>
      </div>
      }
      
    </div>

  )
}

export default Menu
