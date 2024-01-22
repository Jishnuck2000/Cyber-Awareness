import React, { useEffect, useState } from 'react'
import "./Ordersummary.css"
import axios from 'axios';
import { Link } from 'react-router-dom';


function Ordersummary() {
  const [order,setOrder] = useState([])
  const [orderaddress,setOrderaddress] = useState([])
  const token = localStorage.getItem("Token");
  console.log("Token:", token);


  let total = order.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);
console.log(total);

  useEffect(() => {
    axios
      .get("http://localhost:1111/api/cart/viewcart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log("responsefromapi", response);
        setOrder(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });


      axios
      .get("http://localhost:1111/api/user/vieworderaddress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log("responsefromapi", response);
        setOrderaddress(response.data.data);
        console.log(response.data.data);

      })
      
      .catch((err) => {
        console.log(err);
      });


  }, []);



  return (
    <div>
<div className='order-bg1'>

    <div className='order-bg2'>
        <div className='order-p1'>Order Summary</div>
        <div className='order-bg3'>

          <div className='order-div'>
            
          <div className='order-p2'>{orderaddress.name}</div>
          <div className='order-p3'>Ph:{orderaddress.phone_no}</div>
          <div className='order-p4'>{orderaddress.house_name}[house]</div>
          <div className='order-p5'>{orderaddress.city}[p.o],{orderaddress.pincode}</div>
          <div className='order-p6'>{orderaddress.district},{orderaddress.state}</div>

</div>
          

          <div className='order-bg4'>
          {order.map((item) => (
            <>


            <div><img src={`/upload/${item.image}`} className='order-img'></img></div>
            <div className='order-p7'>{item.name}</div>
            <div className='order-p7'>Qty:{item.quantity}</div>
            <div className='order-p7'>Validity:{item.validity}</div>
            <div className='order-p7'>{item.usage}</div>
            <div className='order-p7'>${item.price}</div>
            </>
            ))}

          </div>
<Link to = {"/payment"}>
<button className='order-btn1'>Payment</button></Link>
<div className='order-p8'>Total:${total.toFixed()}</div>


        </div>
    </div>

</div>
    </div>
  )
}

export default Ordersummary