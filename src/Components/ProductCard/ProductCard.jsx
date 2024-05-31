import React, { useContext, useState,useEffect } from 'react';
import { CartContext } from '../../Contexts/CartContext/CartContext';
import HeartIconProduct from '../HeartIconProduct/HeartIconProduct';
import { UserContext } from '../../Contexts/UserContext/UserContext';

const ProductCard = (props) => {
  let [cart,setCart]= useContext(CartContext)
  const [count, setCount] = useState(0);
  const [user,setUser] = useContext(UserContext)
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);
  function increment() {
    if(user.name === undefined){
      alert("Login to add to Cart")
    }
    else{
      setCount(count + 1);
      // Check if the product already exists in the cart
      const existingProductIndex = cart.findIndex(item => item._id === props.product._id);
      console.log(existingProductIndex)
      // If the product exists in the cart, update its quantity
      if (existingProductIndex !== -1) {
        const updatedCart = [...cart]; // Create a shallow copy of the cart array
        updatedCart[existingProductIndex].qty += 1; // Increment the quantity
        setCart(updatedCart);
      } else {
        // If the product is not in the cart, add it with the quantity
        setCart([...cart, { ...props.product, qty: 1 }]);
      }
    }
    
  }
  
  
  

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowSkeleton(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSkeleton) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Wait for 1 second before showing actual content
      return () => clearTimeout(timer);
    }
  }, [showSkeleton]);
  return (
    <div className={` flex mt-2 ${showSkeleton ? '' : 'opacity-100 transition-opacity duration-1000'}`}>
<div className="flex overflow-hidden md:transform md:origin-center md:transition-transform duration-400 md:hover:scale-[102%] w-[273px] h-[137x] md:h-[110px] md:w-[500px] bg-white m-auto rounded-[20px] drop-shadow-lg border-black">
  {loading && showSkeleton && (
    <div className="flex p-2">
      <div>
        <div className="w-[128px] h-[126px] md:h-[98px] md:rounded-[20px] bg-gray-300"></div>
        <HeartIconProduct like={false} productId={''} />
      </div>
      <div className='ml-4'>
        <div className='h-[18px] w-[200px] bg-gray-300'></div>
        <div className='h-[18px] w-[100px] bg-gray-300 mt-1'></div>
        <div className='flex mt-3 md:mt-1'>
          <div className='w-[74px] h-[26px] md:h-[24px] bg-gray-300'></div>
        </div>
      </div>
    </div>
  )}
  {!loading && !showSkeleton && (
    <div className='flex mt-2'>
    < div className="flex  overflow-hidden md:transform md:origin-center md:transition-transform duration-400  md:hover:scale-[102%] w-[273px] h-[137x] md:h-[120px] md:w-[500px] bg-white m-auto  rounded-[20px] drop-shadow-lg border-black ">
      <div className="flex p-2 ">
        <div className=' h-[137x] md:h-[82px]  flex items-center justify-center'>
          <img
            src={props.product.image}
            alt="Restaurant"
            className="w-[128px] h-[126px] md:h-[90px] md:rounded-[20px] object-cover rounded-[15px]"
          />
          <HeartIconProduct/>
        </div>
        <div className='ml-4'>
          <h1 className='text-[18px] font-bold md:text-[16px]'>{props.product.name}</h1>
          <h1 className='text-[18px] md:text-[16px] font-bold'>Rs. {props.product.price}</h1>
          {count === 0 && (
            <button onClick={increment} className='text-[#57d742] flex items-center justify-center w-[74px] h-[26px] md:h-[24px]  border-[1.5px] mt-3 md:mt-1 ml-1 shadow-3xl border-[#b0b0b0] rounded-[10px]'>
              ADD
            </button>
          )}
          {count !== 0 && (
            <div className='flex h-[30px] w-[100px] mt-3 md:mt-1'>
              <button className='w-[25px] items-center justify-center h-[26px] md:h-[24px] rounded-l-[10px] font-extrabold bg-zoop' onClick={decrement}>
                -
              </button>
              <div className='w-[46px] h-[26px] md:h-[24px] text-center items-center justify-center'>
                <h1 className='text-[17px]'>{count}</h1>
              </div>
              <button className='bg-zoop items-center justify-center w-[25px] h-[26px] md:h-[24px] font-extrabold rounded-r-[10px] flex ' onClick={increment}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )}
</div>
</div>
  );
};

export default ProductCard;








