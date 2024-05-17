import React, { useContext, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { UserContext } from '../../Contexts/UserContext/UserContext';

const HeartIconProduct = () => {
  
    const [isLiked, setIsLiked] = useState(false);
    const [user,setUser] = useContext(UserContext)
    console.log(user.name)
  const handleClick = () => {

    if(user.name === undefined){    
        alert("Login to add to favorites")

    }
    else{
        setIsLiked(!isLiked);
    }
  };

  return (
    <AiFillHeart
      className={`h-[34px] w-[26px] absolute top-4 left-4 cursor-pointer ${
        isLiked
          ? 'text-red-600 transform scale-110 transition-transform duration-400'
          : 'text-white'
      } transition-colors duration-300`}
      onClick={handleClick}
      
    />
  )
}

export default HeartIconProduct
