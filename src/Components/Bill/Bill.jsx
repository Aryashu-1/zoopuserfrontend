import React, { useContext } from 'react'
import { useState } from 'react'
import RazorpayButton from '../RazorpayButton/RazorpayButton'
import { NavLink, useParams } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext/CartContext';
const Bill = () => {
  const [count, setCount] = useState(0);
  const id = useParams()
  let [cart,setCart] = useContext(CartContext)
  console.log(cart)
  console.log(id)
  const filteredObjects = cart.filter(function(obj) {
    return obj.storeId === id.cartid;
});

console.log(filteredObjects);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const [itemsList,editItemsList] = useState([
    {
      "itemName": "Domins Pizza",
      "quantity": 20,
      "price": 850.00
    },
    {
      "itemName": "Burger",
      "quantity": 15,
      "price": 599.00
    },
    {
      "itemName": "Salad",
      "quantity": 25,
      "price": 499.00
    },
    {
      "itemName": "Pasta",
      "quantity": 18,
      "price": 799.00
    }
  ]
  )
  const [cookingInstructions, setcookingInstructions] = useState('');
  const handleChange = (event) => {
    setcookingInstructions(event.target.value);
    console.log(cookingInstructions)
  };
  return (

    <div className='flex items-center justify-center '>
      <div className='w-[800px]  '>
        <div className='flex text-center shadow-xl pb-3'> 
            <NavLink href='/cart'>
              <img className='h-[35px] w-[35px] pl-2 pt-3' src="https://static.thenounproject.com/png/234369-200.png" />
            </NavLink>
            <div className='ml-2  pl-2 pt-2 '>
              <h1 className='text-[23px]' >Bill</h1>
            </div>
            
        </div>
        <div className=''>
          <div className='pt-16 px-4'>
              <div className="w-[340px] md:w-[717px] mx-auto bg-white shadow-2xl rounded-[10px] p-2 " >
                <table className="w-full ">
                  <thead>
                    <tr className="">
                      <th className="flex text-left text-[22px] w-[260px] md:w-[239px] ">Item Name</th>
                      <th className="flex text-left text-[22px]  w-[66px] md:w-[239px]">Qty</th>
                      <th className="text-[22px] w-[55px] md:w-[239px]">Amt(₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredObjects.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "" : ""}>
                        <td className="   text-[18px] font-medium w-[250px] md:w-[239px] ">{item.name}</td>
                        { (
                            <div className='flex h-[20px] w-[69px] mt-3 mx-4 md:w-[239px] '>
                                <button className='w-[18px] h-[20px] rounded-l-[5px] font-extrabold bg-zoop items-center justify-center' onClick={decrement}>
                                  -
                                </button>
                                <div className='w-[33px] h-[20px] text-center'>
                                  <h1 className='text-[17px]'>{item.qty}</h1>
                                </div>
                                <button className='bg-zoop  w-[18px] h-[20px] font-extrabold rounded-r-[5px] flex items-center justify-center' onClick={increment}>
                                  +
                                </button>
                            </div>
                        )}

                        <td className=" px-4 py-2 text-[18px] font-medium md:w-[239px]  w-[55px]">{item.price.toFixed(2)}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mb-7 '>
              <h1 className='text-[16px] font-medium m-6 mb-3 mx-6'>Cooking Instructions</h1>
              <div className=''>
                <input value={cookingInstructions} onChange={handleChange} className='h-[69px] w-[288px] rounded-[10px]  ml-3 pl-6' type='text' placeholder='Add Cooking Instructions' ></input>

              </div>
            </div>
            <div className='m-7 pb-5'>
              <h1 className='font-semibold text-[22px] mb-2'>TOATL BILL :</h1>
              <div className='h-[132px] w-[291px] bg-white rounded-[10px] flex items-center justify-center'>
                <div >
                  <h1>Total Amount : Rs.100</h1>
                  <RazorpayButton />
                </div>
              </div>
            </div>

        </div>
      </div>
  </div>
  )
}

export default Bill
