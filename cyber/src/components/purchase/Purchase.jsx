import React, { useEffect, useState } from "react";
import "./Purchase.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Purchase() {
  const [purchase, setPurchase] = useState([]);
  const [buy,setBuy] = useState([]);
  const token = localStorage.getItem("Token");
  console.log("Token:", token);


  let total = buy.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);
console.log(total);

let sum = buy.reduce((previousValue, currentValue) => {
  return previousValue + currentValue.quantity;
}, 0);
console.log(sum);




  const handleUpdate = (_id) => {
    console.log(_id);

    axios
      .get("http://localhost:1111/api/user/viewaddaddress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const primaryAddress = (id) => {
    console.log(id);

    axios
      .put(
        `http://localhost:1111/api/user/updateaddresstype/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        const unchecked = purchase.filter((data) => {
          return (data.addresstype = "");
        });
        const checked = unchecked.filter((data) => {
          if (data._id == id) {
            return(data.addresstype = "primary");
          }
          return data;
        });
        setPurchase(checked);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const handleDelete = (_id) =>{

    axios.delete(`http://localhost:1111/api/user/deleteaddress/${_id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    .then((response)=>{
      console.log(response)
     } )
     window.location.reload()
}


  useEffect(() => {
    axios
      .get("http://localhost:1111/api/user/viewaddaddress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        // console.log("responsefromapi", response);
        setPurchase(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });


      axios
      .get("http://localhost:1111/api/cart/viewcart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        // console.log("responsefromapi", response);
        setBuy(response.data.data);
        console.log(response.data.data);

      })
      
      .catch((err) => {
        console.log(err);
      });



  }, []);


  return (
    <div>
      <div className="purchase-bg">
        <div className="purchase-bg2">
          <div className="purchase-bg4">
            <div className="purchase-bg5">1</div>
            <div className="purchase-p8">DELIVERY ADDRESS</div>
          </div>

          <div>
            {purchase.map((item) => (
              <div key={item._id}>
                <div>
                  {item.addresstype == "primary" ? (
                    <input
                      checked
                      type="checkbox"
                      className="purchase-checkbox"
                      onClick={() => primaryAddress(item._id)}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      className="purchase-checkbox"
                      onClick={() => primaryAddress(item._id)}
                    />
                  )}
                </div>
                <div className="purchase-p9">{item.name}</div>
                <div className="purchase-bg6">{item.location}</div>
                <div className="purchase-p10">{item.phone_no}</div>
                <div className="purchase-p11">
                  {item.house_name}[house],{item.city}[p.o],{item.district},
                  {item.state},{item.pincode}
                </div>
                <button className="purchase-btn2">Deliver Here</button>
                <Link to={`/updateaddress/${item._id}`}>
                  <button
                    className="purchase-btn4"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Edit
                  </button>
                </Link>
                <button className="purchase-btn5" onClick={()=>handleDelete(item._id)}>Delete</button>
              </div>
            ))}
          </div>
          <div className="purchase-bg7">
            <Link to={"/addaddressform"}>
              <div className="purchase-p12">+ ADD YOUR ADDRESS</div>
            </Link>
          </div>
        </div>

        <div className="purchase-bg3">
       
            <div className="purchase-p1">PRICE DETAILS</div>
            <div className="purchase-line1">
<>
              <div className="purchase-p2">
                Price ({sum.toFixed()} item)<div className="purchase-p3">${total.toFixed(2)}</div>
              </div>
              <div className="purchase-p4">
                Quantity<div className="purchase-p5">{sum.toFixed()}</div>
              </div>
              <div className="purchase-p4">
                Delivery Charge<div className="purchase-p5">FREE</div>
              </div>
              </>
            </div>

            <div className="purchase-line2">
              <div className="purchase-p6">
                Total Price<div className="purchase-p7">${total.toFixed(2)}</div>
              </div>
              <Link to = {"/ordersummary"}>
              <button className="purchase-btn">Buy</button></Link>
            </div>
        
        </div>
      </div>
    </div>
  );
}

export default Purchase;
