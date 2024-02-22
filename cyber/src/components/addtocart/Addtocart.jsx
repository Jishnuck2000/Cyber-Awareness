import React, { useEffect, useState } from "react";
import "./Addtocart.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartView } from "../../redux/reducer/Cardslice";
import { Link } from "react-router-dom";
import {ColorRing} from 'react-loader-spinner'
import BASE_URL from "../const/const";



function Addtocart() {
  // const [count, setCount] = useState(0);
  const [addtocart, setAddtocart] = useState([]);
  const dispatch = useDispatch();

  let total = addtocart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);
console.log(total);











  // const total={...addtocart}
  // console.log('total',total);
  // const totalProductPrice = item.price*item.quantity

  //   const totalCartPrice = addtocart.reduce((total, currentItem) => {
  //     return total + currentItem.totalProductPrice;
  //   }, 0);
  // console.log(totalCartPrice)

  const Role = localStorage.getItem("Role");
  console.log(Role);


  const token = localStorage.getItem("Token");
  console.log("Token:", token);

  const handleDelete = (_id) => {
    axios
      // .delete(`http://localhost:1111/api/cart/deletecartitems/${_id}`, {})
      .delete(`${BASE_URL}/api/cart/deletecartitems/${_id}`, {})


      .then((response) => {
        console.log(response);
      });
    window.location.reload();
  };

  const increment = (id) => {
    console.log(id);
    axios
      .put(
        `${BASE_URL}/api/cart/addquantity/${id}`,
        // `http://localhost:1111/api/cart/addquantity/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        console.log(response.data.incre_data);
        const incrementstatus = addtocart.filter((data) => {


          
          if (data._id == id) {
            return (data.quantity += 1);
          }
          return data;
        });
        setAddtocart(incrementstatus);

        //  const incrementpricestatus = addtocart.filter((data) = {

        //  })

        // setAddtocart(response.data.data);
        // console.log(qty);
      })
      .catch((err) => {
        console.log(err);
      });
    // setCount(count + 1);
  };
  const decrement = (id) => {
    axios
      .put(
        // `http://localhost:1111/api/cart/decrementquantity/${id}`,
        `${BASE_URL}/api/cart/decrementquantity/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        console.log("responsefromapi", response.data.decre_data);

        const decrementstatus = addtocart.filter((data) => {
          if (data._id == id) {
            return (data.quantity -= 1);
          }
          return data;
        });
        setAddtocart(decrementstatus);
      })
      .catch((err) => {
        console.log(err);
      });
    // setCount(count - 1);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/cart/viewcart`,{
      // .get("http://localhost:1111/api/cart/viewcart",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        // console.log("responsefromapi", response);
        setAddtocart(response.data.data);
      })
      .catch((err) => {
        console.log(err);

      });
  }, []);

  useEffect(() => {
    dispatch(cartView());
    
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return  <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />;
  }

  // if (error) {
  //   return error;
  // }
  console.log(contents);

  return (
    <div>
      <div className="atc-bg">
        <div className="atc-bg1">
          <>
            {addtocart.length !== 0 ? (
              <>
                {addtocart.map((item) => (
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
                      <div className="atc-p8">
                        Delivery expected soon{" "}
                        <img
                          src="delivery-truck.png"
                          className="atc-truck"
                        ></img>
                      </div>
                      <button
                        className="atc-btn1"
                        onClick={() => decrement(item._id)}
                      >
                        -
                      </button>
                      <button
                        className="atc-btn3"
                        onClick={() => increment(item._id)}
                      >
                        +
                      </button>

                      <div className="atc-btn2">{item.quantity}</div>
                      <div className="subtotal">
                        Price:${item.quantity * item.price}
                      </div>
                      <img
                        src="bin.png"
                        className="atc-bin"
                        onClick={() => handleDelete(item._id)}
                      ></img>
                    </div>
                  </div>
                ))}

                <Link to = {'/purchase'}>

                <button className="place-order" >Place Order</button>
                </Link>

                <div className="total">Total: ${total.toFixed(2)}</div>
              </>
            ) : (
              <>
                <div>
                  <img src="shopping.png" className="atc-shopping"></img>
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default Addtocart;
