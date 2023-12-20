import React, { useState } from "react";
import "./Complaint.css";
import Nav from "../Nav/Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';





function Complaint() {
  const [complaint, setComplaint] = useState({});

  const inputChange = (event) => {
    const { name, value } = event.target;
    setComplaint({ ...complaint, [name]: value });
  };
  console.log(complaint);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:1111/api/admin/add',complaint)
    .then((data)=>{
        console.log(data);
        
    })
    .catch((err)=>{
        console.log(err);
    })
  };
  
  return (
    <div>
      <Nav />
      <div className="body-c">
        <div className="bg-c">
          <p className="p-c1">Register Your Complaint</p>
          <input
            type="text"
            className="i-c1"
            placeholder="    Name"
            onChange={inputChange}
            name='Name'
          ></input>
          <input
            type="number"
            className="i-c2"
            placeholder="    Age"
            onChange={inputChange}
            name='Age'
          ></input>
          <input
            type="text"
            className="i-c3"
            placeholder="    Address"
            onChange={inputChange}
            name='Address'
          ></input>
          <input
            type="number"
            className="i-c4"
            placeholder="    Ph_no"
            onChange={inputChange}
            name='Phone_no'
          ></input>
          <input
            type="text"
            className="i-c5"
            placeholder="    Email"
            onChange={inputChange}
            name='Email'
          ></input>
          <textarea
            
            id=""
            cols="40"
            rows="2"
            className="i-c6"
            placeholder="  Discription"
            onChange={inputChange}
            name='Discription'
          ></textarea>
        </div>
        <input
          type="submit"
          value="Register"
          onClick={(event) => handleSubmit(event)}
          className="btn-c"
        ></input>
        <Link to={'/Dis'}>
          
           <img src='file.png' className='csf' id="complaint-image" alt="" />
           </Link>
           <Image src='captainamerica.png' className="captainamarica"></Image>

      </div>
      <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  );
}

export default Complaint;
