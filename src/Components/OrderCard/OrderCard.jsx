import React from 'react'

const OrderCard = (props) => {
  const orders = {
    "storeName":"Gandikota Dosa",
    "Location":"In Annapurna",
    "totalAmt":50,
    "listOfItems":["Meals","Parotha","WaterBottle"],
    "qtyOfItems":[1,2,3]
  }
  return (
    <div className='flex justify-center items-center p-3 hover:cursor-pointer'>
      <div className='w-[310px] rounded-[15px] bg-white shadow-2xl p-3'>
        <h1 className='text-[20px] font-semibold'>{props.order.storeName}</h1>
        <h1 className='text-[16px]'>{props.order.Location}</h1>
        <div className='mt-2'>
          <h1><span className='text-zoop text-[18px] font-medium '>Items:</span>Rs.{props.order.totalAmt}</h1>
        </div>
        <div className='flex text-[16px] font-medium my-2'>
          {
            props.order.listOfItems.map((item,index)=>(
              <h1 key={index}>{item}({props.order.qtyOfItems[index]}),</h1>
            ))
          }
        </div>
        <div className='flex justify-evenly mt-3 mb-1'>
          <button className='w-[100px]  p-1 rounded-[5px] text-white shadow-2xl bg-zoop'>Rate Store</button>
          <button className='w-[100px]  p-1 rounded-[5px]  text-white shadow-2xl bg-zoop'>Zoop Again</button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard