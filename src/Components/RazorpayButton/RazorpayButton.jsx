import React from 'react'
import useRazorpay from "react-razorpay";

function RazorpayButton() {

  const [Razorpay] = useRazorpay();
  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";
  const createOrderURL = "http://localhost:8000/payment/order"
  const validateOrderURL = "http://localhost:8000/payment/validateOrder"

  const handlePayment = async (e) => {

    // Create cart
    // POST - http://127.0.0.1:8000/user/cart 



    const response = await fetch(createOrderURL, {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();

    const options = {
      key: "rzp_test_co2pYMRyXOG8Ly", 
      amount: amount*100, 
      currency: "INR",
      name: "Zoop",
      description: "Payment for Order",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JDZNk3t8tDryuqT7VWS_TWgEZAJXxBxAi3QCi3wpfQ&s",
      order_id: order.id, 
      handler: async function (response) {

        const valRes = await fetch(validateOrderURL,
          {
            method: "POST",
            body: JSON.stringify(response),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        const res = await valRes.json()
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
        color: "#38bdf8",
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
      <button onClick={handlePayment}>Pay</button>
    </div>
  )
}

export default RazorpayButton