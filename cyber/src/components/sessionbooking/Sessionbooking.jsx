import React, { useState } from "react";
import "./Sessionbooking.css";
import axios from "axios";
import { Link, useNavigate, useParams, } from "react-router-dom";


function Sessionbooking() {
  const{name}=useParams()
  console.log(name)
  const{time}=useParams()
  console.log(time)
  const{date}=useParams()
  console.log(date)
  const token = localStorage.getItem("Token");
  console.log("Token:", token);
  const [sessionbooking, setSession] = useState({
    Date:date,
    time:time,
    about:name,
  });



  const inputChange = (event) => {
    const { name, value } = event.target;
    setSession({ ...sessionbooking, [name]: value });
    console.log(sessionbooking)
  };
  console.log(sessionbooking);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://cyber-care.onrender.com/api/user/addsession", sessionbooking, {
      // .post("http://localhost:1111/api/user/addsession", sessionbooking, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        navigate("/viewsession");
      })
      .catch((err) => {
        console.log(err);
      });
  };

 

  

  const navigate = useNavigate();
  return (
    <div>

      <div className="sb-bg">
        <div className="sb-bg2">
          <p className="sessionb">Book Here,</p>
          <input
            type="text"
            name="Name"
            placeholder="    Name"
            onChange={inputChange}
            className="sb-i1"
          ></input>
          <br></br>
          <input
            type="text"
            name="Address"
            placeholder="    Address"
            onChange={inputChange}
            className="sb-i2"
          ></input>
          <br></br>
          <input
            type="number"
            name="Pincode"
            placeholder="    Pincode"
            onChange={inputChange}
            className="sb-i3"
          ></input>
          <br></br>
          <input
            type="text"
            name="City"
            placeholder="    City"
            onChange={inputChange}
            className="sb-i4"
          ></input>
          <br></br>
          <input
            type="text"
            name="District"
            placeholder="    District"
            onChange={inputChange}
            className="sb-i5"
          ></input>
          <br></br>
          <input
            type="text"
            name="State"
            placeholder="    State"
            onChange={inputChange}
            className="sb-i6"
          ></input>
          <br></br>
          <input
            type="text"
            name="date"
            className="sb-i7"
            value={date}
         disabled ></input>
          <br></br>

          <input type="text" name="time" className="sb-i10" value={time} disabled></input>
          <br></br>
          <input
            type="text"
            name="about"
            placeholder="    About"
            className="sb-i11"
            value={name}
            
            
          disabled></input>
          <br></br>

          <input
            type="number"
            name="Phone_no"
            placeholder="    Ph_no"
            onChange={inputChange}
            className="sb-i8"
          ></input>
          <br></br>
          <input
            type="text"
            name="Email"
            placeholder="    Email"
            onChange={inputChange}
            className="sb-i9"
          ></input>
          <br></br>
          <Link to={"/viewsession"}>
            <input
              type="button"
              value="Book Now"
              onClick={(event) => handleSubmit(event)}
              className="btn-sb"
            ></input>
          </Link>
        </div>
      </div>
      <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  );
}

export default Sessionbooking;
