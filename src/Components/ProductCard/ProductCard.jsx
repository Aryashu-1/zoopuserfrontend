import React, { useState } from 'react';
import HeartIcon from '../HeartIcon/HeartIcon';

const ProductCard = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className='flex mt-2'>
      < div className="flex overflow-hidden md:transform md:origin-center md:transition-transform duration-400  md:hover:scale-[102%] w-[273px] h-[137x] bg-white m-auto  rounded-[20px] drop-shadow-lg border-black ">
        <div className="flex p-2">
          <div className=''>
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              alt="Restaurant"
              className="w-[128px] h-[126px] object-cover rounded-[15px]"
            />
            <HeartIcon/>
          </div>
          <div className='ml-4'>
            <h1 className='text-[18px] font-bold'>Upma Dosa</h1>
            <h1 className='text-[14px]'>Descrition</h1>
            <h1 className='text-[18px] font-bold'>Rs. 45</h1>
            {count === 0 && (
              <button onClick={increment} className='text-[#57d742] w-[74px] h-[26px] border-[1.5px] mt-3 ml-1 shadow-3xl border-[#b0b0b0] rounded-[10px]'>
                ADD
              </button>
            )}
            {count !== 0 && (
              <div className='flex h-[30px] w-[100px] mt-3'>
                <button className='w-[25px] h-[26px] rounded-l-[10px] font-extrabold bg-zoop' onClick={decrement}>
                  -
                </button>
                <div className='w-[46px] h-[26px] text-center'>
                  <h1 className='text-[17px]'>{count}</h1>
                </div>
                <button className='bg-zoop w-[25px] h-[26px] font-extrabold rounded-r-[10px] flex items-center justify-center' onClick={increment}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
