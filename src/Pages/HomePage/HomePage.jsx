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
  const [like,setLike] = useState(false)
  console.log(user)
  const [stores,setStores] = useContext(StoresContext)
  const [likedStores,setLikedStores]= useState([])
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
        setLikedStores(res.data)
        

      } catch (error) {
        console.error('error', error);
      }
    }

    fetchData();
  }, []);
  
  function storeElements(store,index) {
    
      console.log(likedStores);
      
      let ans = likedStores.includes(store._id);
      console.log(ans);
      
      
      return (
        <div key={index}>
          <StoreProfileCard store={store} index={index} like={ans} />
        </div>
      );
   
  } 
  const storeElementsList = stores.map((store, index) => storeElements(store, index, likedStores));
  return (
    <div>
      <SearchBar />
      <div className='overflow-auto flex-grow h-screen bg-gray-100 py-1'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 bg-gray-100">
          {
          storeElementsList
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
