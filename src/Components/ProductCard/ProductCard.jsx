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
      < div className="flex overflow-hidden md:transform md:origin-center md:transition-transform duration-400  md:hover:scale-[102%] w-[273px] h-[137x] md:h-[110px] md:w-[500px] bg-white m-auto  rounded-[20px] drop-shadow-lg border-black ">
        <div className="flex p-2 ">
          <div className=''>
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              alt="Restaurant"
              className="w-[128px] h-[126px] md:h-[98px] md:rounded-[20px] object-cover rounded-[15px]"
            />
            <HeartIcon/>
          </div>
          <div className='ml-4'>
            <h1 className='text-[18px] font-bold md:text-[16px]'>Upma Dosa</h1>
            <h1 className='text-[14px] md:text-[12px]'>Descrition</h1>
            <h1 className='text-[18px] md:text-[16px] font-bold'>Rs. 45</h1>
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
  );
};

export default ProductCard;
