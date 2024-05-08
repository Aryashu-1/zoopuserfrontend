import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';

const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);
  

  const handleClick = () => {
    setIsLiked(!isLiked); // Toggle the value of isLiked
  };

  return (
    <AiFillHeart
      className={`h-[38px] w-[30px] absolute top-4 left-4 cursor-pointer ${
        isLiked
          ? 'text-red-600 transform scale-110 transition-transform duration-400'
          : 'text-white'
      } transition-colors duration-300`}
      onClick={handleClick}
      
    />
  );
};

export default HeartIcon;
