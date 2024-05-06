import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';

const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {

    setIsLiked(!isLiked); // Toggle the value of isLiked
  };

  return (
    <AiFillHeart
      className={`h-[38px] w-[30px]  absolute top-5 right-6 cursor-pointer ${isLiked ? 'text-red-600' : 'text-white'} active:text-red-600 transition-colors duration-300`}
      size={24}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
    />
  );
};

export default HeartIcon;
