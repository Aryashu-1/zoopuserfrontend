import React, { useState, useEffect, useContext } from 'react';
import StoreProfileCard from '../../Components/StoreProfileCard/StoreProfileCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext/UserContext';
import { StoresContext } from '../../Contexts/StoresContext/StoresContext';
import axios from 'axios';


const HomePage = () => {
  const storeCount = 10;
  let [user,setUser] = useContext(UserContext)
  console.log(user)
  const [stores,setStores] = useContext(StoresContext)
  
  useEffect(() => {
    async function fetchData() {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const url = `http://127.0.0.1:8000/store/`;

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };


        const response = await fetch(url, requestOptions);
        const result = await response.json();
        setStores([...result])
        console.log(user._id)
        const storesurl = `http://127.0.0.1:8000/user/preferences/store?userId=${user._id}`
        console.log(storesurl)
        const res = await axios.get(storesurl)
        console.log(res)

      } catch (error) {
        console.error('error', error);
      }
    }

    fetchData();
  }, []);


  return (
    <div>
      <SearchBar />
      <div className='overflow-auto flex-grow h-screen bg-gray-100 py-1'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 bg-gray-100">
          {
          // Array.from({ length: storeCount }, (_, index) => (
          //   <div key={index} className="w-full sm:w-auto md:w-full lg:w-1/3 xl:w-1/4">
          //     <StoreProfileCard index={index} />
          //   </div>
          // ))
            stores.map((val,key)=>(<div key={key}><StoreProfileCard store={val} index={key} key={key}/></div>))

          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
