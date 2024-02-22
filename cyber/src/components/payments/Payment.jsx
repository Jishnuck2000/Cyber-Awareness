import React, { useEffect, useState } from 'react'
import './Payment.css'
import axios from 'axios';
import BASE_URL from '../const/const';

function Payment() {
  const[pay,setPay] = useState([])
  const token = localStorage.getItem("Token");
  console.log("Token:", token);

  let total = pay.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);
console.log(total);


  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/cart/viewcart`, {
      // .get("http://localhost:1111/api/cart/viewcart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log("responsefromapi", response);
        setPay(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
        <div className='payment-bg1'>



            <div className='payment-bg2'>
                <div className='payment-bg3'>
                    <div className='payment-p1'>Payment Details
                    <img src='credit-card.png' className='payment-card'></img>
                    </div>
                </div>

                <div className='payment-p2'>Amount</div>
                <div> <select className="payment-dropdown">
                            <selected className='selected'><option value="INR" >INR</option></selected>
                            <option value="INR" className='payment-o1'>INR</option>
                            <option value="DOLLAR" className='payment-o1'>DOLLAR</option>
                            <option value="RIYAL" className='payment-o1'>RIYAL</option>
                        </select>                         <input type='number' className='payment-i1' value={total.toFixed()}></input>
</div>
<div className='payment-div'>
  <div className='payment-p3'>Card Number
  <img src='card.png' className='payment-img1'></img>
    <img src='visa.png' className='payment-img2'></img>
        <img src='payment.png' className='payment-img3'></img>
  </div>
  <div><input type='number' className='payment-i2'></input></div>

</div>
<div className='payment-p4'>CVV</div>
<div className='payment-p5'>Expiry</div>
<div><input type='number' className='payment-i4'></input><input type='date' className='payment-i3'></input>
</div>
<div><button className='payment-btnr'>Make Payment<img src='send.png' className='payment-send'></img></button></div>








            </div>


<img src='qr3.jpg' className='payment-qr'></img>
        </div>
    </div>
  )
}

export default Payment