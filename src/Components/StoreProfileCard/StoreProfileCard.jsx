//import React from 'react';
import HeartIcon from '../HeartIcon/HeartIcon';
function StoreProfileCard() {
  return (
    <div className="flex flex-wrap justify-center max-h-[calc(100vh-128px)] m-4">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="w-80 mx-4 my-4 overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl shadow-md transition-transform duration-700"
        >
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              alt="Restaurant"
              className="w-full h-40 object-cover"
            />
            <HeartIcon/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Gandikota Dosa</h3>
              <p className="text-gray-600 mb-2">Annapurna,VNRVJIET</p>
              <p className="text-gray-600 mb-2">Hyderabad</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.142 8.646l-5.817-.71-2.6-5.288a1 1 0 00-1.822 0l-2.6 5.288-5.817.71a1 1 0 00-.553 1.705l4.217 4.111-1 5.854a1 1 0 001.451 1.055L10 16.56l5.509 2.856a1 1 0 001.451-1.055l-1-5.854 4.217-4.111a1 1 0 00-.553-1.705zM10 14.5l-4.206 2.178.794-4.63-3.412-3.32 4.726-.577L10 4.792l1.098 2.259 4.726.577-3.412 3.32.794 4.63L10 14.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">4.5</span>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-500">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoreProfileCard;
