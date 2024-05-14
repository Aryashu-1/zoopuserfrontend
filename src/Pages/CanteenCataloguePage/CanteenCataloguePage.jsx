import React, { useEffect } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { useState } from 'react'
import axios from 'axios'

import Menu from '../../Components/Menu/Menu'
import { NavLink } from 'react-router-dom'

const CanteenCataloguePage = () => {
  const [products,setProducts] = useState([])
  const [vegClicked, setVegClicked] = useState(false);
  const [eggClicked, setEggClicked] = useState(false);
  const [option, setOption] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const data = {
          storeId: "663cc03557f2ea22c9a5918b",
        };

        // Construct query parameters from data object
        const queryParams = Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');

        const url = `http://127.0.0.1:8000/store/product?${queryParams}`;

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        const response = await fetch(url, requestOptions);
        const result = await response.json();
        setProducts([...result])
      } catch (error) {
        console.error('error', error);
      }
    }

    fetchData();
  }, []);


  const handleVegClick = () => {
    setVegClicked(!vegClicked);
    if(vegClicked === false){
      setEggClicked(false)
      setOption('Veg')
      
    }
      
  };

  const handleEggClick = () => {
    setEggClicked(!eggClicked);
    if(eggClicked === false ){
      setVegClicked(false)
      setOption('Egg')
      
    }

  };
  
  return (
    <div>
        <div>
          <NavLink to={'/'}>
          <img className='h-[30px] w-[35px] pl-2 pt-2' src="https://static.thenounproject.com/png/234369-200.png" />
          </NavLink>
          
        </div>
        <div className='shadow-3xl flex pb-2'> 
            <div className='pl-[40px] pt-1 '>
              <img className='h-[75px]' src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
            </div>
            <div>
            <div className='m-0'><h3 className=" text-[20px] font-semibold  ml-3">Gandikota Dosa</h3></div>  
              <div className='m-0'><p className="text-[18px]  font-semibold  ml-3">Annapurna</p></div>
               <div className="m-0 flex justify-between items-center">
                <div className="flex items-center ml-3">
                  <img className='h-[22px] w-[22px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSts1lZDcV1iBgY9SlMe94ge-vEvXKviWhTXCqXg5Ypg&s" alt="" />
                  <span className=" text-[19px] font-semibold ">4.5</span>
                </div>
              </div>
              </div>
        </div>
       
        <Menu/>
        <SearchBar/>
        <div className='flex w-[200px] ml-9 mb-1 '> 
      <div className='flex h-[25px]  text-green-600'>
        <div className='flex justify-center ml-3 mr-2'>
          <button 
            className={`h-[20px] w-[20px] rounded-[2px] border-2 border-green-600 m-auto  ${vegClicked ? 'bg-green-600 border-2 border-green-600 ' : ''}`}
            onClick={handleVegClick}
            
          ></button>
        </div>
        <h1>Veg</h1>
      </div>
      <div className='flex h-[25px] text-red-600 mb-2' >
        <div className='flex justify-center ml-3 mr-2'>
          <button 
            className={`h-[20px] w-[20px] rounded-[2px] border-2 border-red-700 m-auto  ${eggClicked ? 'bg-red-600' : ''}`}
            onClick={handleEggClick}
           
          ></button>
        </div>
        <h1>Egg</h1>
      </div>
    </div>
    <div>
    
    <div className='overflow-auto  flex-grow-2 h-screen bg-gray-100 py-1'>
    
  {
    
    // Array.from({ length: storeCount }, (_, index) => (
    //   <div key={index}><ProductCard key={index} index={index} /></div>
      
    // ))
    products.map((product,idx)=>(<div key={idx}><ProductCard name={product.name} image={product.image} key={idx}/></div>))
  }
  
  </div>
    </div>
   
      
    </div>
  )
}

export default CanteenCataloguePage
