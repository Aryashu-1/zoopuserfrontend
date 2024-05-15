import HeartIcon from '../HeartIcon/HeartIcon';
import { NavLink } from 'react-router-dom';

function StoreProfileCard(props) {
  return (
    <div className='justify-center'>
    <div className="">
      <div className="bg-white md:w-[291.5px] md:h-[271.5px] w-[231.5px] h-[281.5px] rounded-[24px] mx-auto my-[30px] drop-shadow-lg border-black overflow-hidden transform hover:scale-105 hover:cursor-pointer shadow-2xl transition-transform duration-700">
        <div className="p-3 h-full flex flex-col justify-between">
          <div className=''>
            <NavLink to={`store/${props.index}`}>
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt="Restaurant"
                className="md:w-[323px] md:h-[133px] object-cover rounded-[17px]"
              />
            </NavLink>
            <HeartIcon />
          </div>
          <NavLink to={`store/${props.index}`} className="flex-grow">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="md:text-[19px] font-semibold mt-1 ml-3">Gandikota Dosa</h3>
                <p className="md:text-[17px] font-semibold ml-3">Annapurna</p>
                <div className="flex items-center ml-3">
                  <img className='h-[19px] w-[17px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSts1lZDcV1iBgY9SlMe94ge-vEvXKviWhTXCqXg5Ypg&s" alt="" />
                  <span className="md:text-[16px] font-semibold">4.5</span>
                </div>
              </div>
              <div>
                <p className='ml-3 md:text-[14px] font-semibold'><span className='text-open'>Opened</span>  Closes at 4pm</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
}

export default StoreProfileCard;
