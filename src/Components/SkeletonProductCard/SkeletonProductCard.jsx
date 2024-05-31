import React from 'react';

const SkeletonProductCard = () => {
  return (
    <div className='flex mt-2 animate-pulse'>
      <div className="flex overflow-hidden md:transform md:origin-center md:transition-transform duration-400 md:hover:scale-[102%] w-[273px] h-[137x] md:h-[110px] md:w-[500px] bg-white m-auto rounded-[20px] drop-shadow-lg border-black">
        <div className="flex p-2">
          <div className=''>
            <div className="w-[128px] h-[126px] md:h-[98px] md:rounded-[20px] bg-gray-300"></div>
          </div>
          <div className='ml-4'>
            <div className='h-[18px] w-[200px] bg-gray-300'></div>
            <div className='h-[18px] w-[100px] bg-gray-300 mt-1'></div>
            <div className='flex mt-3 md:mt-1'>
              <button className='w-[25px] h-[26px] md:h-[24px] bg-gray-300'></button>
              <div className='w-[46px] h-[26px] md:h-[24px] bg-gray-300 mx-1'></div>
              <button className='w-[25px] h-[26px] md:h-[24px] bg-gray-300'></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductCard;
