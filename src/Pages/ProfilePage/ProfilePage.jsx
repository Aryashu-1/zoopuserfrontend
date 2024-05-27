import React, { useState,useContext, useRef,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiFillHeart } from 'react-icons/ai';
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import OrderCard from '../../Components/OrderCard/OrderCard';
import { UserContext } from '../../Contexts/UserContext/UserContext';
import axios from 'axios';
import { StoresContext } from '../../Contexts/StoresContext/StoresContext';

const ProfilePage =  () => {
  let [user,setUser] = useContext(UserContext)
  let [stores,setStores]  = useContext(StoresContext)
  const [favoriteStores, setFavoriteStores] = useState([]);
  const [favoriteStoreIds, setFavoriteStoreIds] = useState([]);
  console.log(user)
  const orders = {
    "storeName":"Gandikota Dosa",
    "Location":"In Annapurna",
    "totalAmt":50,
    "listOfItems":["Meals","Parotha","WaterBottle"],
    "qtyOfItems":[1,2,3]
  }
  useEffect(() => {
    const fetchFavoriteStores = async () => {
      try {
        const favouritestoresurl = `http://127.0.0.1:8000/user/preferences/store?userId=${user._id}`;
        
        const res = await axios.get(favouritestoresurl);
        
        setFavoriteStoreIds(res.data);
      } catch (error) {
        console.error("Error fetching favorite stores", error);
      }
    };

    fetchFavoriteStores();
  }, user);
  useEffect(() => {
    const favoriteStoresList = favoriteStoreIds.map(storeId => {
      return stores.find(store => store._id === storeId);
    });
    setFavoriteStores(favoriteStoresList);
  }, [favoriteStoreIds, stores]);
  console.log(favoriteStoreIds)
  console.log(favoriteStores)
    // Create a ref for the target div
    const targetRef = useRef(null);
    const targetOrders = useRef(null)
    // Function to handle the scroll
    const scrollToDiv = () => {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToDivOrders= () =>{
      targetOrders.current.scrollIntoView({behavior:'smooth'})
    }
  return (
    <div>
      <div className=''>
        <div className='flex text-center shadow-xl pb-3'> 
          <NavLink to={'/'}>
            <img className='h-[35px] w-[35px] pl-2 pt-3' src="https://static.thenounproject.com/png/234369-200.png" />
          </NavLink>
          <div className='ml-2  pl-2 pt-2 '>
            <h1 className='text-[23px]' >Profile</h1>
          </div>   
        </div>
      </div>
      <div className='flex flex-col  h-full mt-[100px] from-zoop to-[#0275a8] rounded-t-full bg-gradient-to-b'>
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
                <NavLink onClick={scrollToDiv}>
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
            <NavLink onClick={scrollToDivOrders}>
              <button className='flex items-center justify-center w-[218px] h-[56px] shadow-md shadow-white border-white border-2 rounded-[10px]'>
                ORDERS
              </button>
            </NavLink>
          </div>
          <div ref={targetOrders}>
            <div className='mt-2'>
              <div>
                <h1 className='text-white font-medium text-[24px]'>Current Orders</h1>
              </div>
              {
                Array.from({ length: 3 }, (_, index) => (
                  <NavLink to={'/orders'}><OrderCard  order={orders}/></NavLink>
                ))
              }
            </div>
            <div className='mt-2'>
              <div className='m-2 pl-6'>
                <h1 className='text-white font-medium text-[24px]'>Past Orders:</h1>
              </div>
              {
                Array.from({ length: 3 }, (_, index) => (
                  <OrderCard order={orders}/>
                ))
              }
            </div>
          </div>
          <div ref={targetRef}>
            <h1 className='text-white font-medium text-[24px]'>Favourites:</h1>
            <div className='flex justify-center items-center'><h1 className='text-white font-medium text-[22px]'>STORE'S</h1></div>
              {
                favoriteStores.map((store,index)=>{
                   
                    <NavLink to={`/store/`}>
                    <div className={` p-2 w-[315px] mb-1 mx-auto mt-4  rounded-[23px] bg-white shadow-2xl cursor-pointer overflow-hidden transition-all duration-500 h-[120px]`} >
                      <div className='flex' >
                        <div className=''>
                          <img
                            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                            alt="Restaurant"
                            className="w-[133px] h-[104px]  object-cover rounded-[15px]"
                          />
                        </div>
                        <div className='ml-4 text-[18px] font-medium'>
                          <h1>{store.name}</h1>
                          <h1 className='text-[16px]'>{store.location}</h1>
                          <div className="flex items-center ml-3">
                            <img className='h-[19px] w-[17px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSts1lZDcV1iBgY9SlMe94ge-vEvXKviWhTXCqXg5Ypg&s" alt="" />
                            <span className="md:text-[16px] font-semibold">4.5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                })
              }
                
          </div>
          
          
        </div>
         
      </div>
      
      
      
    </div>
  )
}

export default ProfilePage
