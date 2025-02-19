import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import RazorpayButton from '../RazorpayButton/RazorpayButton'
import { NavLink, useParams } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext/CartContext';
import { ssrExportAllKey } from 'vite/runtime';
const Bill = () => {
  const [billAmount, setBillAmount] = useState(0);
  const id = useParams()
  let [cart,setCart] = useContext(CartContext)
  console.log(cart)
  console.log(id)
  const filteredObjects = cart.filter(function(obj) {

    return obj.storeId === id.cartid;
});
useEffect(()=>{
  const calculateBillAmount= ()=>{
    let total =0
    filteredObjects.map((item,index)=>{
  
      total = total + item.qty*item.price
    
    })
    return total
  }
  setBillAmount(calculateBillAmount)  

},[filteredObjects])

console.log(filteredObjects);

  function increment(item_index) {
    setCart((cart) =>
      cart.map((item,ind) =>
        ind === item_index ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function decrement(item_index) {
    
      setCart((cart) =>
        cart.map((item,ind) =>{
          if(item.qty >0){
            ind === item_index ? { ...item, qty: item.qty - 1 } : item

          }
            

        }
          
        )
      );
    
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
            <NavLink to={'/cart'}>
              <img className='h-[35px] w-[35px] pl-2 pt-3' src="https://static.thenounproject.com/png/234369-200.png" />
            </NavLink>
            <div className='ml-2  pl-2 pt-2 '>
              <h1 className='text-[23px]' >Bill</h1>
            </div>
            
        </div>
        <div className=''>
          <div className='pt-16 lg:px-4'>
              <div className="w-[340px] md:w-[750px] mx-auto pl-5 bg-white shadow-2xl rounded-[10px] p-2 " >
                <table className="w-full   ">
                  <thead>
                    <tr className="flex justify-evenly">
                      <th className="flex  text-[22px] w-[150px] md:w-[230px] ">Item Name</th>
                      <th className="flex  text-[22px]  w-[100px] md:w-[230px]">Qty</th>
                      <th className="flex text-[22px] w-[80px] md:w-[230px]">Amt(₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredObjects.map((item, index) => (
                      <tr className="flex justify-evenly" key={index} >
                        <td className="   text-[18px] font-medium w-[150px] md:w-[230px] ">{item.name}</td>
                        { (
                            <div className='flex h-[20px] w-[80px] mt-3 mx-4 md:w-[230px] '>
                                <button className='w-[18px] h-[20px] rounded-l-[5px] font-extrabold bg-zoop items-center justify-center' onClick={()=>decrement(index)}>
                                  -
                                </button>
                                <div className='w-[33px] h-[20px] text-center'>
                                  <h1 className='text-[17px]'>{item.qty}</h1>
                                </div>
                                <button className='bg-zoop  w-[18px] h-[20px] font-extrabold rounded-r-[5px] flex items-center justify-center' onClick={()=>increment(index)}>
                                  +
                                </button>
                            </div>
                        )}

                        <td className=" flex  py-2 text-[18px] font-medium md:w-[230px]  w-[60px]">{item.price.toFixed(2)*item.qty}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mb-7 '>
              <h1 className='text-[16px]  font-medium m-6 mb-3 mx-6'>Cooking Instructions</h1>
              <div className=''>
                <input value={cookingInstructions} onChange={handleChange} className='h-[69px] w-[288px] md:w-[500px]  rounded-[10px]  ml-3 pl-6' type='text' placeholder='Add Cooking Instructions' ></input>

              </div>
            </div>
            <div className='m-7 pb-5'>
              <h1 className='font-semibold text-[22px] mb-2'>TOATL BILL :</h1>
              <div className='h-[132px] w-[291px] bg-white rounded-[10px] flex items-center justify-center'>
                <div >
                  <h1>Total Amount : {billAmount}</h1>
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
