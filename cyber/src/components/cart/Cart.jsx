import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from 'axios';
import { Link } from 'react-router-dom';



function Cart() {
    const [viewcart,setViewcart] = useState([]);
    const Role = localStorage.getItem("Role");

    const token = localStorage.getItem("Token");
  console.log("Token:", token);




  const handleDelete = (_id) =>{

    axios.delete(`http://localhost:1111/api/product/deleteproducts/${_id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    .then((response)=>{
      console.log(response)
     } )
     window.location.reload()
}

  
const handleItem= (item) =>{

  axios.post('http://localhost:1111/api/cart/addcart',item,{
    headers: {
      Authorization: `Bearer ${token}`,
    },

  })
   .then((response)=>{
    console.log(response)
   } )
   .catch((err)=>{
    console.log(err)
   } )
}

  const handleUpdate = (_id)=>{
    console.log(_id)
  
    axios
    .get("http://localhost:1111/api/product/viewproducts")
  }


  

    useEffect(() => {
        axios
          .get("http://localhost:1111/api/product/viewproducts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    
    
    
          
          .then((response) => {
            console.log("responsefromapi", response);
            setViewcart(response.data.data);
          })
          .catch((err) => {
            console.log(err);
          });

        }, []);




        console.log(viewcart)


  return (
    <div>
        <div className='cart-bg'>

            <div className='cart-bg1'>
            {viewcart.map((item)=>(

<div className='card-cartdiv'>
                <div className='cart-card'>

                    <img src={`/upload/${item.image}`} className='av1'></img>
                    <h2 className='cart-h2'>{item.usage}</h2>
                    <p className='cart-p1'>{item.validity}</p>
                    <div className='cart-hr'>
                        <p className='cart-name'>{item.name}</p>
                        <p className='cart-dis'>Type:{item.description}</p>
                        <p className='cart-val'>Validity:{item.validity}</p>
                        <p className='cart-price'>${item.price}</p>
                        <Link to={'/addtocart'}>
                        <button className='cart-btn' onClick={()=>handleItem(item)}>Add to cart</button></Link>


                        {Role == 1 ? (
                          <>
                        <Link to ={`/updatecart/${item._id}`}>
                        <button className='cart-btn1'  onClick={()=>handleUpdate(item._id)}>Edit</button></Link> 
                        <button className='cart-btn2' onClick={()=>handleDelete(item._id)}>Delete</button>
                        </>
                        ):(
                          ""
                        )}
                    </div>

                </div></div>
))}
            </div>


        </div>

    </div>
  )
}

export default Cart