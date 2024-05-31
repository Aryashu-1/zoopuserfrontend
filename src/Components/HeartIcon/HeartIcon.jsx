import React, { useContext, useState,useEffect } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { UserContext } from '../../Contexts/UserContext/UserContext';
import axios from 'axios';

const HeartIcon = (props) => {
  let [isLiked, setIsLiked] = useState(props.like);
  console.log(props.like)
  const [user,setUser] = useContext(UserContext)  
  const userId = user._id
  const preferrence = { "userId":userId,"storeId":props.storeId}
  useEffect(() => {
    setIsLiked(props.like); // Update state if props.like changes
  }, [props.like]);
  const handleClick = async () => {
      if(user.name === undefined){    
        alert("Login to add to favorites")

    }
    else{
    
      if(isLiked === false){
        const res = await axios.post("http://127.0.0.1:8000/user/preferences/store",preferrence)
        console.log(res.data)
      } 
      else{
              const url = `http://127.0.0.1:8000/user/preferences/store`
              // const res = await axios.delete(url,preferrence)
              // Define the endpoint
              // const url = 'http://example.com/api/endpoint';



            // Axios configuration
            const config = {
              method: 'delete',
              url: url,
              headers: { 
                'Content-Type': 'application/json'
              },
              data: preferrence 
            };

            // Perform the request
            axios(config)
              .then(response => {
                console.log('Response:', response.data);
              })
              .catch(error => {
                console.error('Error:', error);
              });
                
           }
            setIsLiked(!isLiked);
      }
    };
    useEffect(() => {
      console.log('After state update:', isLiked);
    }, [isLiked]);
  return (
    <div>
      {
        console.log(isLiked)
      }
      <AiFillHeart
        className={`h-[34px] w-[26px] absolute top-4 left-4 cursor-pointer ${
          isLiked
            ? 'text-red-600 transform scale-110 transition-transform duration-400'
            : 'text-white'
        } transition-colors duration-300`}
        onClick={handleClick}
      />
    </div>
    
  );
};

export default HeartIcon;
