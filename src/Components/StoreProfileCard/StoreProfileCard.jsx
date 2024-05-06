
import HeartIcon from '../HeartIcon/HeartIcon';
import { NavLink } from 'react-router-dom';
function StoreProfileCard(index) {
  return (
    <div className="">
        
        <div className="bg-white md:w-[360px] md:h-[328px] w-[233px] h-[277px] rounded-[24px] mx-auto my-[30px] drop-shadow-lg border-black overflow-hidden transform  hover:scale-105 hover:cursor-pointer  shadow-2xl transition-transform duration-700">
          <div className=" p-3">
            <div className=''>
            <NavLink to={`store/${index}`}>
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              alt="Restaurant"
              className="w-[215px] h-[137px] object-cover rounded-[17px]"
            />
            </NavLink>
            <HeartIcon/>
            </div>
            <NavLink to={`store/${index}`}>
            <div className="">
              <div><h3 className="text-[22px] font-semibold mt-1 ml-3">Gandikota Dosa</h3></div>  
              <div><p className="text-[20px]  font-semibold  ml-3">Annapurna</p></div>
               <div className="flex justify-between items-center">
                <div className="flex items-center ml-3">
                  <img className='h-[22px] w-[22px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSts1lZDcV1iBgY9SlMe94ge-vEvXKviWhTXCqXg5Ypg&s" alt="" />
                  <span className=" text-[19px] font-semibold ">4.5</span>
                </div>
              </div>
              <div>
                  <p className='ml-3 text-[17px] font-semibold'><a className='text-open '>Opened</a> . Closes at 4pm</p>
                </div>
            </div>
            </NavLink>
            
          </div>
        </div>
 
    </div>
  );
}

export default StoreProfileCard;
