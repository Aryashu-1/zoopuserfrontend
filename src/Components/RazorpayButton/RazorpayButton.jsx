import React from 'react'
import useRazorpay from "react-razorpay";
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function RazorpayButton() {
  const nav = useNavigate()

  const [Razorpay] = useRazorpay();
  const createOrderURL = "http://localhost:8000/payment/order"
  const validateOrderURL = "http://localhost:8000/payment/validateOrder"
  const cartCreateURL = 'http://127.0.0.1:8000/user/cart'

  const handlePayment = async (e) => {

    // How this component works?
    // Steps:
    // 1) A cart is created in the backend and the cartId is fetched
    // 2) Then using OrderAPI(Razorpay) order is created on razorpay end
    // 3) Payment is processed, we get back razorpay_payment_id, razorpay_signature
    // 4) Using that returned values and cartId payment is validated and razorpa


    // Step 1) Create cart
    // The Data should be Formatted this way !!BE CAREFUL
    // This contains all the final details of the transaction
    let jsonData = {
      etc: "2015-03-25T12:00:00Z",// This should be in string format only
      storeId: "663b4934847115f97f8e1be0",
      userId: "663cc3017d0771bd1a4fe39e",
      listOfItems: [
        "663c93f91fe190ac2ac7fe30",
        "663cc42a028b0b16cacab77c"
      ],
      totalAmount: 200
    }

    //Convert object into JSON
    let data = JSON.stringify(jsonData);

    //  Config to create cart
    let config = {
      method: 'post', 
      maxBodyLength: Infinity,
      url: cartCreateURL,
      headers: { 
        'Content-Type': 'application/json', 
      },
      data : data
    };

    let cartId;
    axios.request(config)
    .then((response) => {
      cartId = response.data.id
    })
    .catch((error) => {
      // Redirect to an error page
      // Error here means, error from our side only


      console.log(error);
    });
    // Step 1) Ends

    // Step 2) Create a Razorpay Order
    const response = await fetch(createOrderURL, {
      method: "POST",
      body: JSON.stringify({
        amount:jsonData.totalAmount * 100,
        currency:"INR",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order)
    // Step 2 Ends

    // Step 3 Complete Payment
    // Define options for the window
    const options = { 
      key: "rzp_test_co2pYMRyXOG8Ly", // Razorpay Public API key
      amount: jsonData.totalAmount * 100, // amount in paise
      currency: "INR", 
      name: "Zoop",
      description: "Payment for Order",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JDZNk3t8tDryuqT7VWS_TWgEZAJXxBxAi3QCi3wpfQ&s",
      order_id: order.id, 
      handler: async function (response) {

        // Step 4 call back function after successful payment
        let body = {
          cartId: cartId,
          ...response
        }
        
        const valRes = await fetch(validateOrderURL,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        
        const razorPaymentId = await valRes.json()
        
        
        console.log(razorPaymentId)
        if(razorPaymentId === null){
          // redirect to a failure page
          console.log("Payment failed")
        }
        // Step 4 ends

        // Redirect to the QR page/ component
        nav('/orders')
        
      },
      prefill: {
        name: "Piyush Garg",// change this to actual user name
        email: "youremail@example.com",// change this to actual email
        contact: "9999999999",// change this to actual number
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#38bdf8",//This is zoop color, but can be changed
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    
  };


  return (
    <div>
      <button className='bg-zoop p-2 flex items-center justify-center w-[141px] h-[36px] rounded-[7px] m-3 text-white font-semibold' onClick={handlePayment}>Pay Now</button>
    </div>
  )
}

export default RazorpayButton