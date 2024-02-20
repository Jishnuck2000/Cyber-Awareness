import React, { useEffect, useState } from 'react'
import './Wishlist.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Wishlist() {
    const [favorite,setFavorite] = useState([])
    const token = localStorage.getItem("Token");
    console.log("Token:", token);


    const handleDelete = (_id) => {
        axios
          .delete(`https://cyber-care.onrender.com/api/user/deletewishlist/${_id}`,{
          // .delete(`http://localhost:1111/api/user/deletewishlist/${_id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
          })
    
          .then((response) => {
            console.log(response);
          });
        window.location.reload();
      };


    useEffect(() => {
        axios
          .get("https://cyber-care.onrender.com/api/user/viewwishlist", {
          // .get("http://localhost:1111/api/user/viewwishlist", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    
          .then((response) => {
            // console.log("responsefromapi", response);
            setFavorite(response.data.data);
          })
          .catch((err) => {
            console.log(err);
    
          });
      }, []);


  return (
    <div>
      <div className="atc-bg">
        <div className="atc-bg1">
        <div className='wishlist-h1'>Wishlist<img src='heart.png' className='wishlist-heart'></img></div>

        {favorite.map((item) => (

                  <div className="atc-bg2">
                    <img
                      src={`/upload/${item.image}`}
                      className="atc-img1"
                    ></img>
                    <div className="content-addcart">
                      <div className="atc-p1">{item.name}</div>
                      {/* <div className="atc-p1">{item._id}</div> */}
                      <div className="atc-p2">{item.validity}</div>
                      <div className="atc-p3">{item.description}</div>

                      <div className="atc-p4">{item.usage} Edition</div>
                      <div className="atc-p5">
                        Seller:Shield
                        <img src="shield.png" className="atc-logo"></img>
                        rg
                      </div>
                      <div className="atc-p6">${item.price}</div>
                      <div className="atc-p7">No offers available here!</div>
                    </div>
                    <div className="content-btncart">
                     <Link to = {"/cart"}>
                     <button className='wishlist-button'>Purchase</button></Link>

                    
                      <img
                        src="bin.png"
                        className="atc-bin"
                        onClick={() => handleDelete(item._id)}

                      ></img>
                    </div>
                  </div>



        ))}
            
        </div>
      </div>
    </div>
  )
}

export default Wishlist