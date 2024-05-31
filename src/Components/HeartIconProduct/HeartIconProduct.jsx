import React, { useContext, useState, useEffect } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { UserContext } from '../../Contexts/UserContext/UserContext';
import axios from 'axios';

const HeartIconProduct = (props) => {
  const [isLiked, setIsLiked] = useState(props.like); // Initialize state correctly
  const [user, setUser] = useContext(UserContext);
  const userId = user._id;
  const preference = { userId: userId, productId: props.productId };

  // Update state if props.like changes
  useEffect(() => {
    setIsLiked(props.like);
  }, [props.like]);

  const handleClick = async () => {
    if (!user.name) {
      alert("Login to add to favorites");
      return;
    }

    console.log('Before state update:', isLiked);

    if (!isLiked) {
      try {
        const res = await axios.post("http://127.0.0.1:8000/user/preferences/product", preference);
        console.log(res.data);
      } catch (error) {
        console.error('Error adding to favorites:', error);
      }
    } else {
      const url = "http://127.0.0.1:8000/user/preferences/product";
      const config = {
        method: 'delete',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: preference
      };

      try {
        const response = await axios(config);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error removing from favorites:', error);
      }
    }

    setIsLiked(!isLiked); // Update state after async operations
  };

  useEffect(() => {
    console.log('After state update:', isLiked);
  }, [isLiked]);

  return (
    <AiFillHeart
      className={`h-[34px] w-[26px] absolute top-4 left-4 cursor-pointer ${
        isLiked
          ? 'text-red-600 transform scale-110 transition-transform duration-400'
          : 'text-white'
      } transition-colors duration-300`}
      onClick={handleClick}
    />
  );
};

export default HeartIconProduct;
