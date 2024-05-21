import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import OrderCard from '../../Components/OrderCard/OrderCard'
import axios from 'axios'
const OrdersPage = () => {
  
      const order = {
        "orderId":" #864657436582",
        "storeId":"6644f907a77778e4de8e1f4c",
        "storeName":"Gandikota Dosa",
        "Location":"In Annapurna",
        "totalAmt":50,
        "listOfItems":["Meals","Parotha","WaterBottle"],
        "qtyOfItems":[1,2,3],
        "priceOfItems":[50,50,20],
        "orderTime":"18/05/2024 12:30pm",
        "CookingInstructions":"Do not add onion "
      }
  return (
    <div className='bg-gray-100'>
      <div className=''>
        <div className='flex text-center shadow-xl pb-3'> 
          <NavLink href='/'>
            <img className='h-[35px] w-[35px] pl-2 pt-3' src="https://static.thenounproject.com/png/234369-200.png" />
          </NavLink>
          <div className='ml-2  pl-2 pt-2 '>
            <h1 className='text-[23px] font-bold' > My Order</h1>
          </div>  
        </div>
        <div>
          <div className='mt-10 mx-6'>
            <h1 className='text-[20px] font-medium' ><span className='text-[20px] text-zoop font-medium'>ZOOP:</span>{order.orderId}</h1>
          </div>
          <div className='mx-7'>
            <h1><span className='text-[16px] text-zoop'>Zooped on:</span>{order.orderTime}</h1>
          </div>
          <div className='mt-6 '>
            <h1 className='mx-2 text-[18px] font-medium'>From:</h1>
            <NavLink to={`/store/${order.storeId}`}>
              <div className={` p-2 w-[315px] mb-1 mx-auto mt-4  rounded-[23px] bg-white shadow-2xl cursor-pointer overflow-hidden transition-all duration-500 h-[120px]`} >
                <div className='flex' >
                  <div className=''>
                    <img
                      src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                      alt="Restaurant"
                      className="w-[133px] h-[104px]  object-cover rounded-[15px]"
                    />
                  </div>
                  <div className='ml-4 text-[18px] font-medium'>
                    <h1>{order.storeName}</h1>
                    <h1 className='text-[16px]'>{order.Location}</h1>
                    <div className="flex items-center ml-3">
                      <img className='h-[19px] w-[17px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSts1lZDcV1iBgY9SlMe94ge-vEvXKviWhTXCqXg5Ypg&s" alt="" />
                      <span className="md:text-[16px] font-semibold">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
            <div>
              <h1 className='mx-2 text-[18px] font-medium'>Bill:</h1>
              <div className='flex items-center justify-center '>
                <div className='  '>
                  <div className=''>
                    <div className='pt-16 px-4'>
                      <div className="md:w-[717px] mx-auto bg-white shadow-2xl rounded-[10px] p-2 " >
                        <table className="w-full ">
                          <thead>
                            <tr className="flex ">
                              <th className="flex text-left text-[22px] w-1/3 md:w-[239px] ">Item Name</th>
                              <th className="flex text-left text-[22px]  w-1/3 md:w-[239px]">Qty</th>
                              <th className="text-[22px] w-1/3 md:w-[239px]">Amt(₹)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              order.listOfItems.map((item, index) => (
                              <tr key={index} className={index % 2 === 0 ? "" : ""}>
                                <td className="   text-[18px] font-medium w-[250px] md:w-[239px] ">{item}</td>
                                {  
                                  (
                                    <div className='w-[33px] h-[20px] text-center'>
                                      <h1 className='text-[17px]'>{order.qtyOfItems[index]}</h1>
                                    </div>       
                                  )
                                }

                               <td className=" px-4 py-2 text-[18px] font-medium md:w-[239px]  w-[55px]">{order.priceOfItems[index].toFixed(2) * order.qtyOfItems[index]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='mb-7 '>
                      <h1 className='text-[16px] font-medium m-6 mb-3 mx-6'>Cooking Instructions</h1>
                      <div className=''>
                        <h1  className='h-[69px] w-[288px] rounded-[10px]  ml-3 pl-6' > {order.CookingInstructions}</h1>
                      </div>
                    </div>
                    <div className='m-7 pb-5'>
                      <h1 className='font-semibold text-[22px] mb-2'>TOATL BILL :</h1>
                      <div className='h-[132px] w-[291px] bg-white rounded-[10px] flex items-center justify-center'>
                        <div >
                          <h1>Total Amount : Rs.100</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
