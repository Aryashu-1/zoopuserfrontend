import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div className='shadow-md bg-zoop h-[74px] w-full p-2'>
    <nav className="  py-3 ">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center justify-start text-white flex-grow">
          <svg
            className="h-12 w-12 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
          <path
  fillRule="evenodd"
  d="M8.5 13c-.862 0-1.579.616-1.744 1.434l-.006.016v.016c0 .036.004.071.01.106v.006c.015.104.041.205.075.302.058.162.139.31.242.442.09.111.194.203.313.273.174.116.376.183.587.191h4c.211-.008.413-.075.587-.191.119-.07.223-.162.313-.273.103-.132.184-.28.242-.442.034-.097.06-.198.075-.302v-.006c.006-.035.01-.07.01-.106v-.016l-.006-.016C13.079 13.616 12.362 13 11.5 13h-3zM4 5.5c0-.276.224-.5.5-.5s.5.224.5.5v3.5c0 .552.448 1 1 1h8c.552 0 1-.448 1-1v-3.5c0-.276.224-.5.5-.5s.5.224.5.5V9c0 1.378-1.122 2.5-2.5 2.5S10 10.378 10 9V5.5c0-.276.224-.5.5-.5s.5.224.5.5V9c0 1.931-1.569 3.5-3.5 3.5S4.5 10.931 4.5 9V5.5c0-.276.224-.5.5-.5s.5.224.5.5V9c0 .276.224.5.5.5s.5-.224.5-.5V5.5c0-.827-.673-1.5-1.5-1.5S3 4.673 3 5.5V9c0 .276.224.5.5.5s.5-.224.5-.5V5.5z"
  clipRule="evenodd"
/>



          </svg>
          <span className="text-lg font-bold">Zoopx</span>
        </div>
        <div className="flex items-center justify-end text-white space-x-4">
            <div className='flex '>
              <button className="text-white mx-2 focus:outline-none transform hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
              </button>
              <div className="hidden md:flex md:max-xl:flex hover:cursor-pointer">
                <a href='/profile' className="md:text-white">SignIn</a>
              </div>
            </div>
            <div className='flex '>
              <button className="text-white mx-2 focus:outline-none transform hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </button>
              <div className="hidden md:flex md:max-xl:flex hover:cursor-pointer">
                <a href='/cart' className="md:text-white">Cart</a>
              </div>
            </div>
          
        </div>
      </div>
    </nav>
    </div>

  )
}

export default Navbar